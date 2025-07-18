export interface NavItem {
    title: string;
    href?: string;
    disabled?: boolean;
    external?: boolean;
    icon?: string;
    label?: string;
    items?: NavItem[];
};

export interface SocialLink {
    title: string;
    href: string;
    icon: keyof Icons;
}

export interface Icons {
    twitter: string;
    github: string;
    instagram: string;
    youtube: string;
    tiktok: string;
}


export interface QuickLink {
    title: string;
    href: string;
}