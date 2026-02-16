'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ContentTree from './ContentTree';
import MarkdownEditor from './MarkdownEditor';
import TranslationPanel from './TranslationPanel';

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

  useEffect(() => {
    loadContentFiles();
  }, []);

  const loadContentFiles = async () => {
    try {
      const response = await fetch('/api/admin/files');
      const files = await response.json();
      setContentFiles(files);
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
              <p className="text-sm text-gray-600">Content Management System</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left sidebar - Content tree */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold mb-4">Content Files</h2>
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
                      <h2 className="text-xl font-bold">{selectedFile.name}</h2>
                      <p className="text-sm text-gray-600">
                        Language: {selectedFile.language} • Path: {selectedFile.path}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleTranslate('zh')}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200"
                      >
                        Translate to Chinese
                      </button>
                      <button
                        onClick={() => handleTranslate('kr')}
                        className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm hover:bg-green-200"
                      >
                        Translate to Korean
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
                <div className="flex items-center justify-center h-64">
                  <div className="text-center text-gray-500">
                    <p className="text-lg">Select a file from the sidebar to edit</p>
                    <p className="text-sm mt-2">Files are organized by language (en/zh/kr)</p>
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
      </div>
    </div>
  );
}