export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills?: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  demo?: string;
  admin?: string;
  github?: string;
  featured?: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}
