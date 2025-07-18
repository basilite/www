import { QuickLink } from "./nav";

export interface Feature {
    icon: string;
    title: string;
    description: string;
}

export interface SiteConfig {
    /** Current version of the documentation/project */
    version: string;

    /** Main title of the documentation site */
    title: string;

    /** Detailed description of the project/documentation */
    description: string;

    /** GitHub repository URL */
    github: string;

    /** NPM package name */
    npm: string;

    /** Array of quick navigation links */
    quickLinks: QuickLink[];

    /** Path to the main logo (light theme) */
    logo: string;

    /** Path to the dark theme logo (optional) */
    logoDark?: string;

    /** Path to the site favicon */
    favicon: string;
}