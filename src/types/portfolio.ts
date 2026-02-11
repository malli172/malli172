export interface Theme {
    primaryBg: string;
    secondaryBg: string;
    cardBg: string;
    accentPrimary: string;
    accentSecondary: string;
    textPrimary: string;
    textSecondary: string;
    highlight: string;
}

export interface Stats {
    [key: string]: string;
}

export interface FeaturedApp {
    name: string;
    tagline: string;
    icon: string;
    rating?: string;
    testCases?: string;
    coverage?: string;
    downloads?: string;
    activeUsers?: string;
    tags: string[];
    description: string;
}

export interface Service {
    title: string;
    description: string;
    icon: string;
}

export interface SkillItem {
    name: string;
    level: string;
    tagline?: string;
}

export interface SkillCategory {
    category: string;
    items: SkillItem[];
}

export interface Experience {
    position: string;
    subtitle?: string;
    years: string;
    company: string;
    description: string;
}

export interface Education {
    institution: string;
    years: string;
    degree: string;
    score?: string;
}

export interface Testimonial {
    name: string;
    role: string;
    image?: string;
    quoteIcon?: string;
    review: string;
    projectLink?: string;
    appLink?: string;
}

export interface Client {
    logo: string;
    company_name: string;
    reference: string;
}

export interface Achievement {
    title: string;
    date: string;
    icon: string;
    image?: string;
    description: string;
}

export interface Certification {
    title: string;
    issuer?: string;
    date?: string;
}

export interface SocialLinks {
    linkedin?: string;
    github?: string;
    twitter?: string;
}

export interface About {
    intro: string;
    details: string;
}

export interface PortfolioData {
    theme: Theme;
    name: string;
    shortName: string;
    title: string;
    greeting: string;
    tagline: string;
    profilePic?: string;
    email: string;
    location: string;
    stats: Stats;
    featuredApp?: FeaturedApp;
    socialLinks: SocialLinks;
    about: About;
    services?: Service[];
    education: Education[];
    experience: Experience[];
    skills: SkillCategory[];
    testimonials?: Testimonial[];
    clients?: Client[];
    achievements?: Achievement[];
    certifications?: Certification[];
    interests?: string[];
    resumeFile?: string;
    favicon?: string;
}
