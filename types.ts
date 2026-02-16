
export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  techStack: string[];
  link?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}
