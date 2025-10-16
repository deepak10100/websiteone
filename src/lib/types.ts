export type NavLink = {
  href: string;
  label: string;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  pricingTiers: PricingTier[];
  faq: FaqItem[];
};

export type PricingTier = {
  name: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
  createdAt: string;
  published: boolean;
};
