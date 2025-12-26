// src/lib/i18n.ts
export const SUPPORTED_LOCALES = ['en', 'zh', 'fr', 'ko'] as const;
export type AppLocale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: AppLocale = 'en';

// 用于 og:locale (Facebook/OG 使用的地区代码)
export const OG_LOCALE_MAP: Record<AppLocale, string> = {
    en: 'en_US',
    zh: 'zh_CN',
    fr: 'fr_FR',
    ko: 'ko_KR',
};

// 项目站点 URL（生产/本地）
export function getSiteUrl() {
    const prod = process.env.NODE_ENV === 'production';
    const base =
        prod && process.env.NEXT_PUBLIC_WEB_URL
            ? process.env.NEXT_PUBLIC_WEB_URL
            : 'https://www.fomalhautlabs.com';
    return base.replace(/\/$/, ''); // 去掉末尾斜杠，便于拼接
}

// 语言前缀（默认语言不加前缀，其它语言加 /zh /fr）
export function getLocalePrefix(locale: AppLocale) {
    return locale === DEFAULT_LOCALE ? '' : `/${locale}`;
}

// 简单的本地化文案，可按需替换成 next-intl/next-i18next
export const L10N = {
    titleDefault: {
        en: 'Fomalhaut Labs | Make AI Touchable to Everyone',
        zh: 'Fomalhaut Labs | 让 AI 触手可及',
        fr: 'Fomalhaut Labs | Rendre l\'IA accessible à tous',
        ko: 'Fomalhaut Labs | 모두가 AI의 힘을 경험할 수 있도록',
    },
    titleTemplate: {
        // `%s | ...`
        en: '%s | Fomalhaut Labs',
        zh: '%s | Fomalhaut Labs',
        fr: '%s | Fomalhaut Labs',
        ko: '%s | Fomalhaut Labs',
    },
    description: {
        en: "Fomalhaut Labs provides top-tier AI coding abilities (Claude, Codex, Gemini) at affordable prices. Democratizing AI for startups and developers. Products: CS61B & Beyond, Claude IDE, Code I, Code By AI.",
        zh: "Fomalhaut Labs 提供顶级的 AI 编码能力（Claude, Codex, Gemini），价格亲民。致力于为创业团队和开发者普及 AI。旗下产品：CS61B & Beyond, Claude IDE, Code I, Code By AI。",
        fr: "Fomalhaut Labs offre des capacités de codage IA de premier plan (Claude, Codex, Gemini) à des prix abordables. Démocratiser l'IA pour les startups et les développeurs.",
        ko: "Fomalhaut Labs는 합리적인 가격으로 최고 수준의 AI 코딩 능력(Claude, Codex, Gemini)을 제공합니다. 스타트업과 개발자를 위한 AI 대중화.",
    },
    keywords: {
        en: [
            'Fomalhaut Labs', 'Fomalhaut', 'Code By AI', 'Claude IDE', 'CS61B & Beyond', 'Code I',
            'AI coding', 'affordable ai', 'developer tools', 'ai democratization',
            'Claude Sonnet', 'OpenAI Codex', 'Gemini Code'
        ],
        zh: [
            'Fomalhaut Labs', 'Fomalhaut', 'Code By AI', 'Claude IDE', 'CS61B & Beyond', 'Code I',
            'AI 编码', '实惠 AI', '开发者工具', 'AI 普及',
            'Claude Sonnet', 'OpenAI Codex', 'Gemini Code'
        ],
        fr: [
            'Fomalhaut Labs', 'Fomalhaut', 'Code By AI', 'Claude IDE', 'CS61B & Beyond', 'Code I',
            'codage IA', 'IA abordable', 'outils développeur', 'démocratisation de l\'IA'
        ],
        ko: [
            'Fomalhaut Labs', 'Fomalhaut', 'Code By AI', 'Claude IDE', 'CS61B & Beyond', 'Code I',
            'AI 코딩', '저렴한 AI', '개발자 도구', 'AI 대중화'
        ],
    },
    ogTitle: {
        en: 'Fomalhaut Labs | Make AI Touchable to Everyone',
        zh: 'Fomalhaut Labs | 让 AI 触手可及',
        fr: 'Fomalhaut Labs | Rendre l\'IA accessible à tous',
        ko: 'Fomalhaut Labs | 모두가 AI의 힘을 경험할 수 있도록',
    },
    ogDesc: {
        en: 'Fomalhaut Labs democratizes access to powerful AI tools like Claude, Codex, and Gemini. Build faster and smarter with our affordable suite of products.',
        zh: 'Fomalhaut Labs 让 Claude、Codex 和 Gemini 等强大的 AI 工具触手可及。使用我们实惠的产品套件，构建更快、更智能。',
        fr: "Fomalhaut Labs démocratise l'accès à des outils IA puissants comme Claude, Codex et Gemini. Construisez plus vite et plus intelligemment avec notre suite de produits abordables.",
        ko: 'Fomalhaut Labs는 Claude, Codex, Gemini와 같은 강력한 AI 도구에 대한 접근을 대중화합니다. 합리적인 가격의 제품군으로 더 빠르고 스마트하게 구축하세요.',
    },
    twitterTitle: {
        en: 'Fomalhaut Labs | Make AI Touchable to Everyone',
        zh: 'Fomalhaut Labs | 让 AI 触手可及',
        fr: 'Fomalhaut Labs | Rendre l\'IA accessible à tous',
        ko: 'Fomalhaut Labs | 모두가 AI의 힘을 경험할 수 있도록',
    },
    twitterDesc: {
        en: 'Access top-tier AI models for coding at a fraction of the cost. Join Fomalhaut Labs and empower your development journey today.',
        zh: '以极低成本获取顶级 AI 编码模型。立即加入 Fomalhaut Labs，赋能您的开发之旅。',
        fr: "Accédez à des modèles d'IA de premier plan pour le codage à une fraction du coût. Rejoignez Fomalhaut Labs dès aujourd'hui.",
        ko: '비용의 일부만으로 코딩을 위한 최고 수준의 AI 모델에 액세스하세요. 지금 Fomalhaut Labs에 가입하여 개발 여정에 힘을 실어주세요.',
    },
} as const;
