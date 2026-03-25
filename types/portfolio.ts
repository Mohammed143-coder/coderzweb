export interface Portfolio {
  id: number;
  title: string;
  category: string;
  image?: string; // Made optional since we now use live previews
  description: string;
  link: string;
  technologies?: string[];
  isLive?: boolean;
  featured?: boolean;
}