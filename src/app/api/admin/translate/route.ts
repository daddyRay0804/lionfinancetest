import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';

// Content directory path
const CONTENT_DIR = path.join(process.cwd(), 'content');

// Helper to check authentication
async function checkAuth() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get('admin-auth');
  return authToken?.value === 'authenticated';
}

export async function POST(request: NextRequest) {
  try {
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { sourcePath, targetLang } = await request.json();

    // Validate target language
    if (!['zh', 'kr'].includes(targetLang)) {
      return NextResponse.json(
        { error: 'Invalid target language. Use "zh" or "kr"' },
        { status: 400 }
      );
    }

    // Security check: ensure path is within content directory
    const normalizedSourcePath = path.normalize(sourcePath);
    if (!normalizedSourcePath.startsWith(CONTENT_DIR)) {
      return NextResponse.json(
        { error: 'Invalid source file path' },
        { status: 400 }
      );
    }

    // Check if source file exists and is English
    const sourceLang = normalizedSourcePath.split('/').slice(-2, -1)[0];
    if (sourceLang !== 'en') {
      return NextResponse.json(
        { error: 'Only English files can be used as source for translation' },
        { status: 400 }
      );
    }

    // Read source content
    const sourceContent = await fs.readFile(normalizedSourcePath, 'utf-8');
    const fileName = path.basename(normalizedSourcePath);

    // Prepare translation prompt
    const translationPrompt = `Translate the following markdown content from English to ${targetLang === 'zh' ? 'Simplified Chinese' : 'Korean'}.
    
IMPORTANT:
1. Maintain all markdown formatting, headers, lists, links, and structure
2. Keep technical terms and proper names in English if no direct translation exists
3. Ensure the translation is natural and fluent
4. Do not add any commentary or notes, just return the translated markdown

Source content:
${sourceContent}`;

    // Call the existing AI chat endpoint for translation
    const aiResponse = await fetch(`${request.nextUrl.origin}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'user',
            content: translationPrompt,
          },
        ],
        // Use the project's configured AI mode
        stream: false,
      }),
    });

    if (!aiResponse.ok) {
      throw new Error(`AI translation failed: ${aiResponse.statusText}`);
    }

    const aiData = await aiResponse.json();
    const translatedContent = aiData.message?.content || aiData.content || '';

    if (!translatedContent.trim()) {
      throw new Error('AI returned empty translation');
    }

    // Determine target file path
    const targetDir = path.join(CONTENT_DIR, targetLang);
    const targetPath = path.join(targetDir, fileName);

    // Ensure target directory exists
    await fs.mkdir(targetDir, { recursive: true });

    // Write translated content
    await fs.writeFile(targetPath, translatedContent, 'utf-8');

    return NextResponse.json({
      success: true,
      sourceFile: fileName,
      targetLanguage: targetLang,
      targetPath: targetPath.replace(process.cwd(), ''),
      characterCount: {
        source: sourceContent.length,
        translated: translatedContent.length,
      },
    });
  } catch (error) {
    console.error('Translation error:', error);
    return NextResponse.json(
      { 
        error: 'Translation failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}