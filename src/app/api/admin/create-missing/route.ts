import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';

// Content directory path
const CONTENT_DIR = path.join(process.cwd(), 'content');

// Site structure definition
const SITE_FILES = [
  'site.md',
  'about.md',
  'team.md',
  'faq.md',
  'testimonials.md',
  'legal-complaints.md',
  'legal-disclosure.md',
  'terms.md'
];

const LANGUAGES = ['en', 'zh', 'kr'];

// Helper to check authentication
async function checkAuth() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get('admin-auth');
  return authToken?.value === 'authenticated';
}

// Template content for different file types
const TEMPLATES: Record<string, string> = {
  'site.md': `# site.md - [LANG] content

This file contains structured content for the Lion Finance website.
Edit the JSON block below to update the content.

\`\`\`json
{
  "siteName": {
    "en": "Lion Finance",
    "zh": "Lion Finance",
    "kr": "Lion Finance"
  },
  "siteTagline": {
    "en": "Trusted mortgage and loan broker in New Zealand",
    "zh": "新西兰值得信赖的房贷与贷款经纪",
    "kr": "뉴질랜드 신뢰할 수 있는 모기지 및 대출 브로커"
  },
  "nav": {
    "home": {
      "en": "Home",
      "zh": "首页",
      "kr": "홈"
    },
    "products": {
      "en": "Products",
      "zh": "产品",
      "kr": "상품"
    },
    "about": {
      "en": "About",
      "zh": "关于",
      "kr": "소개"
    },
    "team": {
      "en": "Team",
      "zh": "团队",
      "kr": "팀"
    },
    "faq": {
      "en": "FAQ",
      "zh": "常见问题",
      "kr": "FAQ"
    },
    "contact": {
      "en": "Contact",
      "zh": "联系",
      "kr": "연락처"
    }
  }
}
\`\`\`

*Last updated: ${new Date().toISOString()}*`,

  'about.md': `# about.md - [LANG] content

About page content for Lion Finance.

\`\`\`json
{
  "title": {
    "en": "About Lion Finance",
    "zh": "关于 Lion Finance",
    "kr": "Lion Finance 소개"
  },
  "description": {
    "en": "We are a trusted mortgage and loan brokerage serving clients across New Zealand.",
    "zh": "我们是新西兰值得信赖的房贷与贷款经纪，服务全国客户。",
    "kr": "우리는 뉴질랜드 전역의 고객에게 서비스를 제공하는 신뢰할 수 있는 모기지 및 대출 브로커입니다."
  }
}
\`\`\`

*Last updated: ${new Date().toISOString()}*`,

  'team.md': `# team.md - [LANG] content

Team member information for Lion Finance.

\`\`\`json
{
  "title": {
    "en": "Our Team",
    "zh": "我们的团队",
    "kr": "우리 팀"
  },
  "description": {
    "en": "Meet our experienced team of mortgage advisors and loan specialists.",
    "zh": "认识我们经验丰富的房贷顾问和贷款专家团队。",
    "kr": "경험 많은 모기지 상담사 및 대출 전문가 팀을 만나보세요."
  },
  "members": []
}
\`\`\`

*Last updated: ${new Date().toISOString()}*`,

  'faq.md': `# faq.md - [LANG] content

Frequently Asked Questions for Lion Finance.

\`\`\`json
[
  {
    "q": {
      "en": "What services do you offer?",
      "zh": "你们提供哪些服务？",
      "kr": "어떤 서비스를 제공하나요?"
    },
    "a": {
      "en": "We offer home loans, construction loans, business loans, refinancing, and more.",
      "zh": "我们提供房屋贷款、建筑贷款、商业贷款、再融资等服务。",
      "kr": "주택 대출, 건축 대출, 사업자 대출, 재융자 등을 제공합니다."
    }
  }
]
\`\`\`

*Last updated: ${new Date().toISOString()}*`,

  'testimonials.md': `# testimonials.md - [LANG] content

Customer testimonials for Lion Finance.

\`\`\`json
[
  {
    "name": "John Smith",
    "role": "Home Buyer",
    "content": {
      "en": "Great service! Helped me get the best mortgage rate.",
      "zh": "服务很棒！帮我拿到了最优的房贷利率。",
      "kr": "훌륭한 서비스! 최고의 모기지 금리를 얻을 수 있게 도와주셨어요."
    },
    "rating": 5
  }
]
\`\`\`

*Last updated: ${new Date().toISOString()}*`,

  'legal-complaints.md': `# legal-complaints.md - [LANG] content

Complaints process for Lion Finance.

\`\`\`json
{
  "title": {
    "en": "Complaints Process",
    "zh": "投诉流程",
    "kr": "불만 처리 절차"
  },
  "content": {
    "en": "If you have a complaint about our services, please contact us at complaints@lionfinance.co.nz",
    "zh": "如果您对我们的服务有投诉，请通过 complaints@lionfinance.co.nz 联系我们",
    "kr": "저희 서비스에 대한 불만이 있으시면 complaints@lionfinance.co.nz로 연락해 주세요"
  }
}
\`\`\`

*Last updated: ${new Date().toISOString()}*`,

  'legal-disclosure.md': `# legal-disclosure.md - [LANG] content

Disclosure statement for Lion Finance.

\`\`\`json
{
  "title": {
    "en": "Disclosure Statement",
    "zh": "披露声明",
    "kr": "공개 성명서"
  },
  "content": {
    "en": "Lion Finance is a registered financial service provider.",
    "zh": "Lion Finance 是注册金融服务提供商。",
    "kr": "Lion Finance는 등록된 금융 서비스 제공자입니다."
  }
}
\`\`\`

*Last updated: ${new Date().toISOString()}*`,

  'terms.md': `# terms.md - [LANG] content

Terms of use for Lion Finance website.

\`\`\`json
{
  "title": {
    "en": "Terms of Use",
    "zh": "使用条款",
    "kr": "이용 약관"
  },
  "content": {
    "en": "By using this website, you agree to our terms and conditions.",
    "zh": "使用本网站即表示您同意我们的条款和条件。",
    "kr": "이 웹사이트를 사용함으로써 귀하는 저희 약관 및 조건에 동의하는 것입니다."
  }
}
\`\`\`

*Last updated: ${new Date().toISOString()}*`
};

export async function POST() {
  try {
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const createdFiles: string[] = [];
    const skippedFiles: string[] = [];

    // For each language and file, check if it exists and create if missing
    for (const lang of LANGUAGES) {
      const langDir = path.join(CONTENT_DIR, lang);
      
      // Create language directory if it doesn't exist
      try {
        await fs.mkdir(langDir, { recursive: true });
      } catch (error) {
        console.error(`Error creating directory ${langDir}:`, error);
      }

      for (const fileName of SITE_FILES) {
        const filePath = path.join(langDir, fileName);
        
        try {
          // Check if file exists
          await fs.access(filePath);
          skippedFiles.push(filePath);
        } catch {
          // File doesn't exist, create it
          try {
            let template = TEMPLATES[fileName] || TEMPLATES['site.md'];
            
            // Replace [LANG] placeholder with actual language
            template = template.replace(/\[LANG\]/g, lang.toUpperCase());
            
            await fs.writeFile(filePath, template, 'utf-8');
            createdFiles.push(filePath);
          } catch (writeError) {
            console.error(`Error creating file ${filePath}:`, writeError);
          }
        }
      }
    }

    return NextResponse.json({
      success: true,
      summary: {
        created: createdFiles.length,
        skipped: skippedFiles.length,
        total: createdFiles.length + skippedFiles.length
      },
      createdFiles: createdFiles.map(p => p.replace(process.cwd(), '')),
      skippedFiles: skippedFiles.map(p => p.replace(process.cwd(), ''))
    });
  } catch (error) {
    console.error('Create missing files error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to create missing files',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}