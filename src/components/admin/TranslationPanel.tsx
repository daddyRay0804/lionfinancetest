'use client';

interface ContentFile {
  path: string;
  name: string;
  language: string;
  content: string;
}

interface TranslationPanelProps {
  selectedFile: ContentFile | null;
  onTranslate: (targetLang: 'zh' | 'kr') => Promise<void>;
}

export default function TranslationPanel({ selectedFile, onTranslate }: TranslationPanelProps) {
  const handleTranslate = async (targetLang: 'zh' | 'kr') => {
    if (!selectedFile) {
      alert('Please select a file first');
      return;
    }

    if (selectedFile.language !== 'en') {
      alert('Only English files can be used as source for translation');
      return;
    }

    const confirmed = confirm(
      `This will translate "${selectedFile.name}" from English to ${targetLang.toUpperCase()}.\n\n` +
      "The translation will overwrite any existing content in the target file.\n\n" +
      "Continue?"
    );

    if (confirmed) {
      await onTranslate(targetLang);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Translation</h3>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-800 mb-2">How it works</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Select an English (.en) file</li>
          <li>• Click translate to generate Chinese/Korean</li>
          <li>• Uses project&apos;s LLM (DeepSeek/OpenRouter)</li>
          <li>• Saves to corresponding language directory</li>
        </ul>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Source File
          </label>
          <div className="bg-gray-50 p-3 rounded border text-sm">
            {selectedFile ? (
              <div>
                <div className="font-medium">{selectedFile.name}</div>
                <div className="text-gray-600">
                  Language: {selectedFile.language}
                </div>
              </div>
            ) : (
              <div className="text-gray-500 italic">No file selected</div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Target Languages
          </label>
          <div className="space-y-2">
            <button
              onClick={() => handleTranslate('zh')}
              disabled={!selectedFile || selectedFile.language !== 'en'}
              className={`w-full px-4 py-3 rounded-lg text-left transition-colors ${
                selectedFile && selectedFile.language === 'en'
                  ? 'bg-green-50 border border-green-200 hover:bg-green-100 text-green-800'
                  : 'bg-gray-100 border border-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Chinese (简体中文)</div>
                  <div className="text-sm">Translate to ZH</div>
                </div>
                <span className="text-lg">🇨🇳</span>
              </div>
            </button>

            <button
              onClick={() => handleTranslate('kr')}
              disabled={!selectedFile || selectedFile.language !== 'en'}
              className={`w-full px-4 py-3 rounded-lg text-left transition-colors ${
                selectedFile && selectedFile.language === 'en'
                  ? 'bg-blue-50 border border-blue-200 hover:bg-blue-100 text-blue-800'
                  : 'bg-gray-100 border border-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Korean (한국어)</div>
                  <div className="text-sm">Translate to KR</div>
                </div>
                <span className="text-lg">🇰🇷</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-500 pt-4 border-t">
        <p className="font-medium mb-1">Translation Process:</p>
        <ol className="list-decimal pl-4 space-y-1">
          <li>Reads English markdown content</li>
          <li>Sends to AI chat endpoint with translation prompt</li>
          <li>Parses response and saves to target language file</li>
          <li>Maintains markdown structure and formatting</li>
        </ol>
        <p className="mt-2">
          <span className="font-medium">Note:</span> Production (Vercel) is read-only. 
          Translations only work in local development.
        </p>
      </div>
    </div>
  );
}