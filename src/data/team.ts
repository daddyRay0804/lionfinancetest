import type { Lang } from "@/lib/i18n";

export type TeamMember = {
  id: string;
  name: string;
  title: Record<Lang, string>;
  bio: Record<Lang, string>;
  fspNumber?: string;
  phone?: string;
  email?: string;
  image?: string;
};

// NOTE: Order matters (used for homepage + some schema.org contact points).
// Requirement: swap the two PERSON CARDS (not just photos).
// Desired order: Gary first, Allan second.
export const teamMembers: TeamMember[] = [
  {
    id: "gary-jiang",
    name: "Gary Jiang",
    title: {
      en: "Director / Mortgage Advisor",
      zh: "总监 / 房贷顾问",
      kr: "디렉터 / 모기지 어드바이저",
    },
    bio: {
      en: "Gary graduated from University of Canterbury (Bachelor of Commerce – Major in Accounting). He worked as a Home Loan Specialist and Business Relationship Manager with ANZ bank for more than 12 years. Gary has extensive experience on Residential Lending, Business/Commercial lending as well as development lending. He is friendly, knowledgeable and passionate, always willing to help his customers to achieve their financial goal.",
      zh: "Gary 毕业于坎特伯雷大学（商学学士，会计专业）。曾在 ANZ 银行担任房屋贷款专员及商业关系经理超过 12 年。在住宅贷款、商业/商业地产贷款以及开发贷款方面经验丰富。为人友善、专业且热情，始终致力于帮助客户实现财务目标。",
      kr: "Gary는 캔터베리 대학교(상학 학사, 회계 전공)를 졸업했습니다. ANZ 은행에서 주택 대출 전문가 및 비즈니스 관계 매니저로 12년 이상 근무했습니다. 주거 대출, 사업자/상업용 대출 및 개발 대출 분야에서 풍부한 경험을 보유하고 있으며, 친절하고 전문적이며 열정적이며 고객의 재정 목표 달성을 돕고자 합니다.",
    },
    fspNumber: "FSP 1002478",
    phone: "022 161 9172",
    email: "gary@lionfinance.co.nz",
    image: "/team/gary.png",
  },
  {
    id: "allan-wu",
    name: "Allan Wu",
    title: {
      en: "Director / Mortgage & Insurance Advisor",
      zh: "总监 / 房贷与保险顾问",
      kr: "디렉터 / 모기지 및 보험 어드바이저",
    },
    bio: {
      en: "With over 11 years of experience at ANZ in both lending and insurance, Allan brings a wealth of industry knowledge and practical expertise to every client interaction. His deep understanding of bank processes and products allows him to provide clear, reliable advice tailored to each client's financial needs. Allan is committed to helping individuals and families make confident, informed decisions about their future.",
      zh: "Allan 在 ANZ 拥有超过 11 年的贷款与保险经验，为每次客户沟通带来丰富的行业知识与实战经验。他对银行流程与产品的深入理解使他能够根据客户财务需求提供清晰、可靠的建议。Allan 致力于帮助个人与家庭对未来做出自信、明智的决策。",
      kr: "Allan은 ANZ에서 대출 및 보험 분야 11년 이상의 경험을 바탕으로 모든 고객 상담에 풍부한 업계 지식과 실무 전문성을 제공합니다. 은행 프로세스와 상품에 대한 깊은 이해로 각 고객의 재정 요구에 맞는 명확하고 신뢰할 수 있는 조언을 합니다. Allan은 개인과 가족이 미래에 대해 확신 있고 정보에 기반한 결정을 내리도록 돕는 데 전념합니다.",
    },
    fspNumber: "FSP 1009101",
    phone: "021 153 1918",
    email: "allan@lionfinance.co.nz",
    image: "/team/allan.png",
  },
  {
    id: "eric-huang",
    name: "Eric Huang",
    title: {
      en: "Social Media & Advertising Specialist",
      zh: "社交媒体与广告专员",
      kr: "소셜 미디어 및 광고 스페셜리스트",
    },
    bio: {
      en: "Eric is Lion Finance's Advertising Specialist with over 10 years' experience in digital sales and social media content creation. He manages the company's key Chinese-language channels, including Xiaohongshu and Facebook, producing bilingual (English & Mandarin) content that helps Chinese-speaking clients in New Zealand better understand home loans, investment lending, and business finance options. Eric combines market insight with data-driven campaign optimisation to improve lead quality and support the advisory team with compliant, accurate messaging.",
      zh: "Eric 是 Lion Finance 的广告专员，拥有超过 10 年数字销售与社交媒体内容创作经验。他负责管理公司的主要中文渠道，包括小红书和 Facebook，并制作英文与普通话双语内容，帮助新西兰华语客户更好地了解房屋贷款、投资贷款和商业融资选择。Eric 将市场洞察与数据驱动的广告优化相结合，提升潜在客户质量，并以合规、准确的信息支持顾问团队。",
      kr: "Eric은 Lion Finance의 광고 스페셜리스트로, 디지털 세일즈와 소셜 미디어 콘텐츠 제작 분야에서 10년 이상의 경험을 보유하고 있습니다. Xiaohongshu와 Facebook을 포함한 회사의 주요 중국어 채널을 관리하며, 뉴질랜드의 중국어권 고객이 주택 대출, 투자 대출, 사업자 금융 옵션을 더 잘 이해할 수 있도록 영어와 중국어 콘텐츠를 제작합니다. Eric은 시장 인사이트와 데이터 기반 캠페인 최적화를 결합해 리드 품질을 높이고, 자문팀이 규정을 준수하는 정확한 메시지를 전달하도록 지원합니다.",
    },
    image: "/team/eric-huang.jpg",
  },
];
