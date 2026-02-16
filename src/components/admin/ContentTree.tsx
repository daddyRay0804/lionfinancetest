'use client';

interface ContentFile {
  path: string;
  name: string;
  language: string;
  content: string;
}

interface ContentTreeProps {
  files: ContentFile[];
  selectedFile: ContentFile | null;
  onSelectFile: (file: ContentFile) => void;
}

export default function ContentTree({ files, selectedFile, onSelectFile }: ContentTreeProps) {
  // Group files by language
  const filesByLanguage: Record<string, ContentFile[]> = {};
  
  files.forEach(file => {
    if (!filesByLanguage[file.language]) {
      filesByLanguage[file.language] = [];
    }
    filesByLanguage[file.language].push(file);
  });

  const languages = ['en', 'zh', 'kr'];

  return (
    <div className="space-y-4">
      {languages.map(language => (
        <div key={language} className="border rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-3 py-2 border-b">
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-700">
                {language.toUpperCase()}
              </span>
              <span className="text-xs text-gray-500">
                {filesByLanguage[language]?.length || 0} files
              </span>
            </div>
          </div>
          
          <div className="divide-y">
            {filesByLanguage[language]?.map(file => (
              <button
                key={file.path}
                onClick={() => onSelectFile(file)}
                className={`w-full text-left px-3 py-2 hover:bg-gray-50 transition-colors ${
                  selectedFile?.path === file.path 
                    ? 'bg-blue-50 border-l-4 border-blue-500' 
                    : ''
                }`}
              >
                <div className="flex items-center">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{file.name}</div>
                    <div className="text-xs text-gray-500 truncate">
                      {file.path.split('/').slice(-2).join('/')}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">
                    {Math.ceil(file.content.length / 1000)}k
                  </div>
                </div>
              </button>
            )) || (
              <div className="px-3 py-4 text-center text-gray-500 text-sm">
                No files in {language} directory
              </div>
            )}
          </div>
        </div>
      ))}
      
      <div className="text-xs text-gray-500 pt-4">
        <p>• Files are stored in <code>content/[lang]/</code></p>
        <p>• Changes are saved to local filesystem</p>
        <p>• Production is read-only (Vercel)</p>
      </div>
    </div>
  );
}