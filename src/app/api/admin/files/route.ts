import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import fs from 'fs/promises';
import path from 'path';

// Content directory path
const CONTENT_DIR = path.join(process.cwd(), 'content');

// Helper to check authentication
async function checkAuth() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get('admin-auth');
  return authToken?.value === 'authenticated';
}

// GET: List all content files
export async function GET() {
  try {
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const files: Array<{
      path: string;
      name: string;
      language: string;
      content: string;
    }> = [];

    // Read content directory structure
    const languages = ['en', 'zh', 'kr'];
    
    for (const lang of languages) {
      const langDir = path.join(CONTENT_DIR, lang);
      try {
        await fs.access(langDir);
        const entries = await fs.readdir(langDir, { withFileTypes: true });
        
        for (const entry of entries) {
          if (entry.isFile() && entry.name.endsWith('.md')) {
            const filePath = path.join(langDir, entry.name);
            const content = await fs.readFile(filePath, 'utf-8');
            
            files.push({
              path: filePath,
              name: entry.name.replace('.md', ''),
              language: lang,
              content,
            });
          }
        }
      } catch (error) {
        // Language directory doesn't exist yet
        console.log(`Language directory ${lang} not found`);
      }
    }

    return NextResponse.json(files);
  } catch (error) {
    console.error('Error reading files:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT: Update a content file
export async function PUT(request: NextRequest) {
  try {
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { path: filePath, content } = await request.json();

    // Security check: ensure path is within content directory
    const normalizedPath = path.normalize(filePath);
    if (!normalizedPath.startsWith(CONTENT_DIR)) {
      return NextResponse.json(
        { error: 'Invalid file path' },
        { status: 400 }
      );
    }

    // Ensure directory exists
    const dir = path.dirname(normalizedPath);
    await fs.mkdir(dir, { recursive: true });

    // Write file
    await fs.writeFile(normalizedPath, content, 'utf-8');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error writing file:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}