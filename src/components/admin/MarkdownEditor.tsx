'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownEditorProps {
  content: string;
  onSave: (content: string) => Promise<void>;
  saving: boolean;
}

export default function MarkdownEditor({ content, onSave, saving }: MarkdownEditorProps) {
  const [editedContent, setEditedContent] = useState(content);
  const [viewMode, setViewMode] = useState<'edit' | 'preview' | 'split'>('split');
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    setEditedContent(content);
    setHasChanges(false);
  }, [content]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedContent(e.target.value);
    setHasChanges(e.target.value !== content);
  };

  const handleSave = async () => {
    await onSave(editedContent);
    setHasChanges(false);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="flex justify-between items-center mb-4 border-b pb-2">
        <div className="flex space-x-2">
          <button
            onClick={() => setViewMode('edit')}
            className={`px-3 py-1 text-sm rounded ${
              viewMode === 'edit' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Edit
          </button>
          <button
            onClick={() => setViewMode('preview')}
            className={`px-3 py-1 text-sm rounded ${
              viewMode === 'preview' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setViewMode('split')}
            className={`px-3 py-1 text-sm rounded ${
              viewMode === 'split' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Split View
          </button>
        </div>
        
        <div className="flex items-center space-x-3">
          {hasChanges && (
            <span className="text-sm text-yellow-600">
              • Unsaved changes
            </span>
          )}
          <button
            onClick={handleSave}
            disabled={!hasChanges || saving}
            className={`px-4 py-2 text-sm font-medium rounded ${
              hasChanges && !saving
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      {/* Editor/Preview Area */}
      <div className="flex-1 overflow-hidden">
        {viewMode === 'edit' && (
          <textarea
            value={editedContent}
            onChange={handleChange}
            className="w-full h-full p-4 font-mono text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Write your markdown here..."
            spellCheck="false"
          />
        )}

        {viewMode === 'preview' && (
          <div className="h-full overflow-auto p-4 border rounded-lg bg-gray-50">
            <div className="prose prose-sm max-w-none">
              <ReactMarkdown>{editedContent}</ReactMarkdown>
            </div>
          </div>
        )}

        {viewMode === 'split' && (
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-3 py-1 border-b text-sm font-medium">
                Editor
              </div>
              <textarea
                value={editedContent}
                onChange={handleChange}
                className="w-full h-full p-4 font-mono text-sm focus:outline-none resize-none"
                placeholder="Write your markdown here..."
                spellCheck="false"
              />
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-3 py-1 border-b text-sm font-medium">
                Preview
              </div>
              <div className="h-full overflow-auto p-4">
                <div className="prose prose-sm max-w-none">
                  <ReactMarkdown>{editedContent}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t text-xs text-gray-500">
        <div className="flex justify-between">
          <div>
            <span className="font-medium">Markdown Tips:</span>
            <span className="ml-2">
              # Header • **Bold** • *Italic* • [Link](url) • - List
            </span>
          </div>
          <div>
            Characters: {editedContent.length} • Lines: {editedContent.split('\n').length}
          </div>
        </div>
      </div>
    </div>
  );
}