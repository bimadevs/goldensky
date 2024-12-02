export interface Project {
  id: string;
  title: string;
  category: 'web' | 'undangan' | 'graphic';
  image: string;
  description: string;
  technologies?: string[];
  link?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  icon: any;
}