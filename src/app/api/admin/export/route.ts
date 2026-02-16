import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import fs from 'fs/promises';
import fsSync from 'fs';
import path from 'path';
import archiver from 'archiver';

export const dynamic = 'force-dynamic';

// Content directory path
const CONTENT_DIR = path.join(process.cwd(), 'content');

// Helper to check authentication
async function checkAuth() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get('admin-auth');
  return authToken?.value === 'authenticated';
}

export async function GET() {
  try {
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check if content directory exists
    try {
      await fs.access(CONTENT_DIR);
    } catch {
      return NextResponse.json(
        { error: 'Content directory not found' },
        { status: 404 }
      );
    }

    // Create a temporary directory for the zip file
    const tempDir = path.join(process.cwd(), 'tmp');
    await fs.mkdir(tempDir, { recursive: true });
    
    const zipFileName = `lionfinance-content-${new Date().toISOString().split('T')[0]}.zip`;
    const zipFilePath = path.join(tempDir, zipFileName);

    // Create a write stream for the zip file
    const output = fsSync.createWriteStream(zipFilePath);
    const archive = archiver('zip', {
      zlib: { level: 9 } // Maximum compression
    });

    // Handle archive events
    archive.on('error', (err) => {
      throw err;
    });

    // Pipe archive data to the file
    archive.pipe(output);

    // Add content directory to archive
    archive.directory(CONTENT_DIR, 'content');

    // Add README file with export information
    const readmeContent = `# Lion Finance Content Export

Export Date: ${new Date().toISOString()}
Total Files: ${await countFiles(CONTENT_DIR)}

## Directory Structure
content/
├── en/          # English content
├── zh/          # Chinese content
└── kr/          # Korean content

## File Types
- site.md              # Site navigation, footer, product info
- about.md             # About page content
- team.md              # Team member information
- faq.md               # Frequently asked questions
- testimonials.md      # Customer testimonials
- legal-complaints.md  # Complaints process
- legal-disclosure.md  # Disclosure statement
- terms.md            # Terms of use

## Format
All files use JSON-in-markdown format:
\`\`\`markdown
# filename.md - Language content

\`\`\`json
{
  "key": {
    "en": "English text",
    "zh": "Chinese text",
    "kr": "Korean text"
  }
}
\`\`\`
\`\`\`

## Import Instructions
1. Extract this zip file
2. Place the 'content' directory in your project root
3. The system will automatically load the content

## Notes
- This export is for backup and migration purposes
- Files are in UTF-8 encoding
- JSON structure must be preserved for proper parsing
`;

    archive.append(readmeContent, { name: 'README.md' });

    // Add metadata file
    const metadata = {
      exportDate: new Date().toISOString(),
      project: 'Lion Finance',
      version: '1.0',
      contentStructure: {
        languages: ['en', 'zh', 'kr'],
        files: [
          'site.md',
          'about.md',
          'team.md',
          'faq.md',
          'testimonials.md',
          'legal-complaints.md',
          'legal-disclosure.md',
          'terms.md'
        ]
      }
    };

    archive.append(JSON.stringify(metadata, null, 2), { name: 'metadata.json' });

    // Finalize the archive
    await archive.finalize();

    // Wait for the file to be written
    await new Promise<void>((resolve, reject) => {
      output.on('close', () => resolve());
      output.on('error', reject);
    });

    // Read the zip file
    const zipBuffer = await fs.readFile(zipFilePath);

    // Clean up temporary file
    await fs.unlink(zipFilePath);

    // Return the zip file
    return new NextResponse(zipBuffer, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${zipFileName}"`,
        'Content-Length': zipBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('Export error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to export content',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Helper function to count files in directory
async function countFiles(dirPath: string): Promise<number> {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    let count = 0;
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        count += await countFiles(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        count++;
      }
    }
    
    return count;
  } catch {
    return 0;
  }
}