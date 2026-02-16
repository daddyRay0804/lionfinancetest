'use client';

import { useState } from 'react';
import { 
  FolderOpen, 
  FileText, 
  Globe, 
  Users, 
  HelpCircle, 
  Briefcase,
  FileQuestion,
  Scale,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

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

// Site structure definition
const SITE_STRUCTURE = [
  {
    id: 'site',
    name: 'Site Content',
    icon: Globe,
    files: ['site.md'],
    description: 'Navigation, footer, product titles'
  },
  {
    id: 'products',
    name: 'Products',
    icon: Briefcase,
    files: [], // Products are in site.md productTitles/productDescriptions
    description: 'Loan products and descriptions'
  },
  {
    id: 'about',
    name: 'About Us',
    icon: Users,
    files: ['about.md'],
    description: 'Company information and values'
  },
  {
    id: 'team',
    name: 'Team',
    icon: Users,
    files: ['team.md'],
    description: 'Team members and profiles'
  },
  {
    id: 'faq',
    name: 'FAQ',
    icon: HelpCircle,
    files: ['faq.md'],
    description: 'Frequently asked questions'
  },
  {
    id: 'testimonials',
    name: 'Testimonials',
    icon: FileText,
    files: ['testimonials.md'],
    description: 'Customer testimonials'
  },
  {
    id: 'legal',
    name: 'Legal Pages',
    icon: Scale,
    files: ['legal-complaints.md', 'legal-disclosure.md', 'terms.md'],
    description: 'Legal documents and compliance'
  }
];

// Language configuration
const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
  { code: 'kr', name: 'Korean', flag: '🇰🇷' }
];

export default function ContentTree({ files, selectedFile, onSelectFile }: ContentTreeProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    site: true,
    about: true,
    team: true,
    faq: true
  });

  const [viewMode, setViewMode] = useState<'structure' | 'language'>('structure');

  // Group files by language for language view
  const filesByLanguage: Record<string, ContentFile[]> = {};
  files.forEach(file => {
    if (!filesByLanguage[file.language]) {
      filesByLanguage[file.language] = [];
    }
    filesByLanguage[file.language].push(file);
  });

  // Group files by type for structure view
  const filesByType: Record<string, ContentFile[]> = {};
  files.forEach(file => {
    SITE_STRUCTURE.forEach(section => {
      if (section.files.includes(file.name + '.md')) {
        if (!filesByType[section.id]) {
          filesByType[section.id] = [];
        }
        filesByType[section.id].push(file);
      }
    });
  });

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const getFileIcon = (fileName: string) => {
    if (fileName.includes('legal-')) return Scale;
    if (fileName.includes('terms')) return Scale;
    return FileText;
  };

  const getLanguageStatus = (langCode: string) => {
    const langFiles = filesByLanguage[langCode] || [];
    const totalSections = SITE_STRUCTURE.reduce((count, section) => 
      count + section.files.length, 0
    );
    
    const translatedCount = langFiles.length;
    const percentage = Math.round((translatedCount / totalSections) * 100);
    
    let status = 'empty';
    if (percentage === 100) status = 'complete';
    else if (percentage > 50) status = 'partial';
    else if (percentage > 0) status = 'started';
    
    return { translatedCount, totalSections, percentage, status };
  };

  return (
    <div className="space-y-4">
      {/* View Mode Toggle */}
      <div className="flex border rounded-lg overflow-hidden">
        <button
          onClick={() => setViewMode('structure')}
          className={`flex-1 py-2 text-sm font-medium ${
            viewMode === 'structure'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          By Structure
        </button>
        <button
          onClick={() => setViewMode('language')}
          className={`flex-1 py-2 text-sm font-medium ${
            viewMode === 'language'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          By Language
        </button>
      </div>

      {viewMode === 'structure' ? (
        /* Structure View */
        <div className="space-y-2">
          {SITE_STRUCTURE.map(section => {
            const sectionFiles = filesByType[section.id] || [];
            const isExpanded = expandedSections[section.id];
            const Icon = section.icon;
            
            return (
              <div key={section.id} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between px-3 py-2 bg-gray-50 hover:bg-gray-100 border-b"
                >
                  <div className="flex items-center space-x-2">
                    <Icon className="w-4 h-4 text-gray-600" />
                    <span className="font-medium text-gray-900">{section.name}</span>
                    <span className="text-xs text-gray-500">
                      ({sectionFiles.length}/{LANGUAGES.length} languages)
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">{section.description}</span>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-500" />
                    )}
                  </div>
                </button>
                
                {isExpanded && (
                  <div className="divide-y">
                    {LANGUAGES.map(lang => {
                      const file = sectionFiles.find(f => f.language === lang.code);
                      const FileIcon = file ? getFileIcon(file.name) : FileText;
                      
                      return (
                        <button
                          key={`${section.id}-${lang.code}`}
                          onClick={() => file && onSelectFile(file)}
                          disabled={!file}
                          className={`w-full text-left px-3 py-2 hover:bg-gray-50 transition-colors flex items-center justify-between ${
                            selectedFile?.path === file?.path
                              ? 'bg-blue-50 border-l-4 border-blue-500'
                              : ''
                          } ${!file ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          <div className="flex items-center space-x-2">
                            <FileIcon className="w-4 h-4 text-gray-500" />
                            <span className="font-medium text-gray-900">
                              {lang.flag} {lang.name}
                            </span>
                            {!file && (
                              <span className="text-xs text-gray-400 italic">(Not created)</span>
                            )}
                          </div>
                          {file && (
                            <div className="text-xs text-gray-500">
                              {Math.ceil(file.content.length / 1000)}k
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        /* Language View */
        <div className="space-y-2">
          {LANGUAGES.map(lang => {
            const langFiles = filesByLanguage[lang.code] || [];
            const status = getLanguageStatus(lang.code);
            const isExpanded = expandedSections[`lang-${lang.code}`];
            
            return (
              <div key={lang.code} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(`lang-${lang.code}`)}
                  className="w-full flex items-center justify-between px-3 py-2 bg-gray-50 hover:bg-gray-100 border-b"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{lang.flag}</span>
                    <div>
                      <div className="font-medium text-gray-900">{lang.name}</div>
                      <div className="text-xs text-gray-500">
                        {status.translatedCount}/{status.totalSections} files
                        {status.percentage > 0 && ` • ${status.percentage}% complete`}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {/* Status indicator */}
                    <div className={`w-3 h-3 rounded-full ${
                      status.status === 'complete' ? 'bg-green-500' :
                      status.status === 'partial' ? 'bg-yellow-500' :
                      status.status === 'started' ? 'bg-blue-500' :
                      'bg-gray-300'
                    }`} />
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-500" />
                    )}
                  </div>
                </button>
                
                {isExpanded && (
                  <div className="divide-y">
                    {SITE_STRUCTURE.map(section => {
                      const file = langFiles.find(f => 
                        section.files.includes(f.name + '.md')
                      );
                      const Icon = section.icon;
                      
                      return (
                        <button
                          key={`${lang.code}-${section.id}`}
                          onClick={() => file && onSelectFile(file)}
                          disabled={!file}
                          className={`w-full text-left px-3 py-2 hover:bg-gray-50 transition-colors flex items-center justify-between ${
                            selectedFile?.path === file?.path
                              ? 'bg-blue-50 border-l-4 border-blue-500'
                              : ''
                          } ${!file ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          <div className="flex items-center space-x-2">
                            <Icon className="w-4 h-4 text-gray-500" />
                            <span className="font-medium text-gray-900">{section.name}</span>
                            {!file && (
                              <span className="text-xs text-gray-400 italic">(Missing)</span>
                            )}
                          </div>
                          {file && (
                            <div className="text-xs text-gray-500">
                              {Math.ceil(file.content.length / 1000)}k
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Stats Footer */}
      <div className="pt-4 border-t text-xs text-gray-500">
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>Complete (100%)</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <span>Partial (50-99%)</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span>Started (1-49%)</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-gray-300" />
            <span>Empty (0%)</span>
          </div>
        </div>
        <p className="mt-2">
          <span className="font-medium">Total:</span> {files.length} files across {LANGUAGES.length} languages
        </p>
      </div>
    </div>
  );
}