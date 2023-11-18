type Category = 'News' | 'Tips' | 'Tutorials' | 'Offers';

export type Post = {
  id: number;
  author: string;
  title: string;
  subtitle: string;
  image: string;
  category: Category;
  text: string;
  isActive: boolean;
  keywords: string;
  date: string;
};
