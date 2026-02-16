'use client';

import { BarChart3, FileText, Globe, Users, HelpCircle, Briefcase, Scale } from 'lucide-react';

interface ContentFile {
  path: string;
  name: string;
  language: string;
  content: string;
}

interface SiteStatsProps {
  files: ContentFile[];
}

const SITE_STRUCTURE = [
  { id: 'site', name: 'Site Content', icon: Globe, files: ['site.md'] },
  { id: 'about', name: 'About Us', icon: Users, files: ['about.md'] },
  { id: 'team', name: 'Team', icon: Users, files: ['team.md'] },
  { id: 'faq', name: 'FAQ', icon: HelpCircle, files: ['faq.md'] },
  { id: 'testimonials', name: 'Testimonials', icon: FileText, files: ['testimonials.md'] },
  { id: 'legal', name: 'Legal Pages', icon: Scale, files: ['legal-complaints.md', 'legal-disclosure.md', 'terms.md'] }
];

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
  { code: 'kr', name: 'Korean', flag: '🇰🇷' }
];

export default function SiteStats({ files }: SiteStatsProps) {
  // Calculate statistics
  const totalFiles = files.length;
  const totalCharacters = files.reduce((sum, file) => sum + file.content.length, 0);
  const avgFileSize = totalFiles > 0 ? Math.round(totalCharacters / totalFiles) : 0;

  // Group files by language
  const filesByLanguage: Record<string, ContentFile[]> = {};
  files.forEach(file => {
    if (!filesByLanguage[file.language]) {
      filesByLanguage[file.language] = [];
    }
    filesByLanguage[file.language].push(file);
  });

  // Group files by type
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

  // Calculate translation completeness
  const languageStats = LANGUAGES.map(lang => {
    const langFiles = filesByLanguage[lang.code] || [];
    const totalSections = SITE_STRUCTURE.reduce((count, section) => 
      count + section.files.length, 0
    );
    const percentage = Math.round((langFiles.length / totalSections) * 100);
    
    return {
      ...lang,
      fileCount: langFiles.length,
      totalSections,
      percentage,
      status: percentage === 100 ? 'complete' : 
              percentage >= 50 ? 'partial' : 
              percentage > 0 ? 'started' : 'empty'
    };
  });

  // Calculate section completeness
  const sectionStats = SITE_STRUCTURE.map(section => {
    const sectionFiles = filesByType[section.id] || [];
    const percentage = Math.round((sectionFiles.length / LANGUAGES.length) * 100);
    
    return {
      ...section,
      fileCount: sectionFiles.length,
      totalLanguages: LANGUAGES.length,
      percentage,
      status: percentage === 100 ? 'complete' : 
              percentage >= 50 ? 'partial' : 
              percentage > 0 ? 'started' : 'empty'
    };
  });

  // Find largest and smallest files
  const sortedBySize = [...files].sort((a, b) => b.content.length - a.content.length);
  const largestFile = sortedBySize[0];
  const smallestFile = sortedBySize[sortedBySize.length - 1];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Content Statistics</h2>
          </div>
          <div className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-blue-700 font-medium mb-1">Total Files</div>
            <div className="text-3xl font-bold text-blue-900">{totalFiles}</div>
            <div className="text-xs text-blue-600 mt-1">across {LANGUAGES.length} languages</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-sm text-green-700 font-medium mb-1">Total Characters</div>
            <div className="text-3xl font-bold text-green-900">
              {(totalCharacters / 1000).toFixed(1)}k
            </div>
            <div className="text-xs text-green-600 mt-1">~{Math.round(totalCharacters / 2000)} pages</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-sm text-purple-700 font-medium mb-1">Avg File Size</div>
            <div className="text-3xl font-bold text-purple-900">
              {(avgFileSize / 1000).toFixed(1)}k
            </div>
            <div className="text-xs text-purple-600 mt-1">characters per file</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="text-sm text-yellow-700 font-medium mb-1">Completion</div>
            <div className="text-3xl font-bold text-yellow-900">
              {Math.round(
                (files.length / (SITE_STRUCTURE.reduce((sum, s) => sum + s.files.length, 0) * LANGUAGES.length)) * 100
              )}%
            </div>
            <div className="text-xs text-yellow-600 mt-1">of all translations</div>
          </div>
        </div>

        {/* Language Progress */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Translation Progress by Language</h3>
          <div className="space-y-4">
            {languageStats.map(lang => (
              <div key={lang.code} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{lang.flag}</span>
                    <div>
                      <div className="font-medium">{lang.name}</div>
                      <div className="text-sm text-gray-500">
                        {lang.fileCount}/{lang.totalSections} files
                      </div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    lang.status === 'complete' ? 'bg-green-100 text-green-800' :
                    lang.status === 'partial' ? 'bg-yellow-100 text-yellow-800' :
                    lang.status === 'started' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {lang.percentage}% complete
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      lang.status === 'complete' ? 'bg-green-500' :
                      lang.status === 'partial' ? 'bg-yellow-500' :
                      lang.status === 'started' ? 'bg-blue-500' :
                      'bg-gray-300'
                    }`}
                    style={{ width: `${lang.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Progress */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Content Section Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectionStats.map(section => {
              const Icon = section.icon;
              return (
                <div key={section.id} className="bg-white border rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="font-medium">{section.name}</div>
                      <div className="text-sm text-gray-500">
                        {section.fileCount}/{section.totalLanguages} languages
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                    <div 
                      className={`h-2 rounded-full ${
                        section.status === 'complete' ? 'bg-green-500' :
                        section.status === 'partial' ? 'bg-yellow-500' :
                        section.status === 'started' ? 'bg-blue-500' :
                        'bg-gray-300'
                      }`}
                      style={{ width: `${section.percentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 text-right">
                    {section.percentage}% complete
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* File Size Analysis */}
        <div>
          <h3 className="text-lg font-semibold mb-4">File Size Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-medium mb-3">Largest File</h4>
              {largestFile && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{largestFile.name}</div>
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                      {largestFile.language.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {largestFile.content.length.toLocaleString()} characters
                  </div>
                  <div className="text-xs text-gray-500 truncate">
                    {largestFile.path}
                  </div>
                </div>
              )}
            </div>
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-medium mb-3">Smallest File</h4>
              {smallestFile && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{smallestFile.name}</div>
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                      {smallestFile.language.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {smallestFile.content.length.toLocaleString()} characters
                  </div>
                  <div className="text-xs text-gray-500 truncate">
                    {smallestFile.path}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-8 pt-6 border-t">
          <h4 className="font-medium mb-3">Summary</h4>
          <div className="text-sm text-gray-600 space-y-2">
            <p>• The site contains {totalFiles} content files across {LANGUAGES.length} languages.</p>
            <p>• {languageStats.filter(l => l.status === 'complete').length} languages are fully translated.</p>
            <p>• {sectionStats.filter(s => s.status === 'complete').length} sections are available in all languages.</p>
            <p>• Total content size is approximately {(totalCharacters / 2000).toFixed(1)} standard pages.</p>
          </div>
        </div>
      </div>
    </div>
  );
}