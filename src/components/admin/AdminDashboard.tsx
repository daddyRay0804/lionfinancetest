'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  RefreshCw, 
  Download, 
  Upload, 
  Settings,
  BarChart3,
  FilePlus,
  Languages
} from 'lucide-react';
import ContentTree from './ContentTree';
import MarkdownEditor from './MarkdownEditor';
import TranslationPanel from './TranslationPanel';
import SiteStats from './SiteStats';

interface ContentFile {
  path: string;
  name: string;
  language: string;
  content: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<ContentFile | null>(null);
  const [contentFiles, setContentFiles] = useState<ContentFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    loadContentFiles();
  }, []);

  const loadContentFiles = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/files');
      const files = await response.json();
      setContentFiles(files);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (error) {
      console.error('Failed to load files:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/login');
    router.refresh();
  };

  const handleCreateMissingFiles = async () => {
    if (!confirm('Create missing translation files for all languages? This will copy English content as a template.')) {
      return;
    }

    try {
      const response = await fetch('/api/admin/create-missing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        alert('Missing files created successfully!');
        loadContentFiles();
      } else {
        alert('Failed to create missing files');
      }
    } catch (error) {
      console.error('Create files error:', error);
      alert('Error creating files');
    }
  };

  const handleExportAll = async () => {
    try {
      const response = await fetch('/api/admin/export');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `lionfinance-content-${new Date().toISOString().split('T')[0]}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Export error:', error);
      alert('Error exporting content');
    }
  };

  const handleSave = async (content: string) => {
    if (!selectedFile) return;
    
    setSaving(true);
    try {
      const response = await fetch('/api/admin/files', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          path: selectedFile.path,
          content,
        }),
      });

      if (response.ok) {
        // Update local state
        setContentFiles(prev => prev.map(file => 
          file.path === selectedFile.path 
            ? { ...file, content }
            : file
        ));
        setSelectedFile(prev => prev ? { ...prev, content } : null);
        alert('Saved successfully!');
      } else {
        alert('Failed to save');
      }
    } catch (error) {
      console.error('Save error:', error);
      alert('Error saving file');
    } finally {
      setSaving(false);
    }
  };

  const handleTranslate = async (targetLang: 'zh' | 'kr') => {
    if (!selectedFile) return;
    
    try {
      const response = await fetch('/api/admin/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sourcePath: selectedFile.path,
          targetLang,
        }),
      });

      if (response.ok) {
        alert(`Translation to ${targetLang} started! Check the translated file.`);
        // Reload files to see the new translation
        loadContentFiles();
      } else {
        alert('Translation failed');
      }
    } catch (error) {
      console.error('Translation error:', error);
      alert('Error during translation');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading content files...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Lion Finance CMS</h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>Content Management System</span>
                {lastUpdated && (
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    Last updated: {lastUpdated}
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowStats(!showStats)}
                className="flex items-center space-x-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm"
              >
                <BarChart3 className="w-4 h-4" />
                <span>Stats</span>
              </button>
              <button
                onClick={loadContentFiles}
                disabled={loading}
                className="flex items-center space-x-2 px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded text-sm disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Toolbar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-3">
              <button
                onClick={handleCreateMissingFiles}
                className="flex items-center space-x-2 px-3 py-2 bg-green-100 hover:bg-green-200 text-green-700 rounded text-sm"
              >
                <FilePlus className="w-4 h-4" />
                <span>Create Missing Files</span>
              </button>
              <button
                onClick={handleExportAll}
                className="flex items-center space-x-2 px-3 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded text-sm"
              >
                <Download className="w-4 h-4" />
                <span>Export All</span>
              </button>
              <button
                onClick={() => {
                  const lang = prompt('Enter language code (zh/kr):');
                  if (lang && ['zh', 'kr'].includes(lang)) {
                    handleTranslate(lang as 'zh' | 'kr');
                  }
                }}
                className="flex items-center space-x-2 px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded text-sm"
              >
                <Languages className="w-4 h-4" />
                <span>Quick Translate</span>
              </button>
            </div>
            <div className="text-xs text-gray-500">
              {contentFiles.length} files • {new Set(contentFiles.map(f => f.language)).size} languages
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showStats ? (
          <SiteStats files={contentFiles} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left sidebar - Content tree */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Content Structure</h2>
                  <Settings className="w-4 h-4 text-gray-400" />
                </div>
                <ContentTree 
                  files={contentFiles}
                  selectedFile={selectedFile}
                  onSelectFile={setSelectedFile}
                />
              </div>
            </div>

            {/* Main content - Editor */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow p-4 h-full">
                {selectedFile ? (
                  <>
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h2 className="text-xl font-bold capitalize">{selectedFile.name.replace('-', ' ')}</h2>
                        <div className="flex items-center space-x-3 text-sm text-gray-600">
                          <span className="px-2 py-1 bg-gray-100 rounded">
                            {selectedFile.language.toUpperCase()}
                          </span>
                          <span>•</span>
                          <span className="truncate max-w-xs">
                            {selectedFile.path.split('/').slice(-2).join('/')}
                          </span>
                          <span>•</span>
                          <span>{selectedFile.content.length} chars</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleTranslate('zh')}
                          disabled={selectedFile.language !== 'en'}
                          className={`px-3 py-1 rounded text-sm ${
                            selectedFile.language === 'en'
                              ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          🇨🇳 Translate to Chinese
                        </button>
                        <button
                          onClick={() => handleTranslate('kr')}
                          disabled={selectedFile.language !== 'en'}
                          className={`px-3 py-1 rounded text-sm ${
                            selectedFile.language === 'en'
                              ? 'bg-green-100 text-green-700 hover:bg-green-200'
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          🇰🇷 Translate to Korean
                        </button>
                      </div>
                    </div>
                    <MarkdownEditor
                      content={selectedFile.content}
                      onSave={handleSave}
                      saving={saving}
                    />
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64">
                    <div className="text-center text-gray-500 mb-6">
                      <p className="text-lg font-medium mb-2">Welcome to Lion Finance CMS</p>
                      <p className="text-sm">Select a file from the sidebar to start editing</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-xs text-gray-600 max-w-md">
                      <div className="text-center p-3 bg-gray-50 rounded">
                        <div className="font-medium mb-1">Site Content</div>
                        <div>Navigation, footer, products</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded">
                        <div className="font-medium mb-1">Pages</div>
                        <div>About, Team, FAQ</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded">
                        <div className="font-medium mb-1">Legal</div>
                        <div>Terms, disclosure, complaints</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right sidebar - Translation panel */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-4">
                <TranslationPanel 
                  selectedFile={selectedFile}
                  onTranslate={handleTranslate}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}