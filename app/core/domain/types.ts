export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'programming' | 'multimedia';
  techStack: string[];
  links: {
    repo: string;
    demo?: string | null;
  };
  imageUrl: string;
}