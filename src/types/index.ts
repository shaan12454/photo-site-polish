export type ProjectCategory = 'portraits' | 'landscapes' | 'editorial' | 'architecture' | 'documentary';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  client?: string;
  camera?: string;
  location?: string;
  slug: string;
}

export interface PersonInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  interests: string[];
  projects: { name: string; description: string; url?: string }[];
  education: string;
  location: string;
  email: string;
  discord?: string;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    github?: string;
  };
  portraitImage: string;
}

export type PhotographerInfo = PersonInfo;

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'editorial' | 'commercial' | 'personal';
  message: string;
  timestamp: Date;
}
