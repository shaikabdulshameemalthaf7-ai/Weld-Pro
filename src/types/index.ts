export type ProjectCategory = 
  | 'all' 
  | 'gates' 
  | 'railings' 
  | 'structures' 
  | 'furniture' 
  | 'industrial';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  clientType: 'Residential' | 'Commercial' | 'Industrial';
  image: string;
  description: string;
  fullDetails?: string;
  specs: {
    material: string;
    process: string;
    finish: string;
    timeline: string;
  };
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  shortDesc: string;
  badge: string;
  features: string[];
  materials: string[];
  suitableFor: string;
}

export interface BeforeAfterPair {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  details: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}
