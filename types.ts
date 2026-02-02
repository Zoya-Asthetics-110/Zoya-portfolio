
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Tool {
  name: string;
  icon: string;
  color: string;
}
