import { getAuthor } from "@/lib/genAuthor"

export interface researchPostData {
  id?: string;

  title: string;
  excerpt?: string;

  author: string;
  authorRole?: string;
  authorBio?: string;

  date: string;
  dateModified?: string;

  readTime?: string;

  category: string;
  tags?: string[];

  image?: string;
  imageAlt?: string;

  featured?: boolean;

  focusKeyword?: string;
  secondaryKeywords?: string[];

  metaTitle?: string;
  metaDescription?: string;

  canonicalUrl?: string;

  content: string;

  faqSchema?: string;
  articleSchema?: string;
  breadcrumbSchema?: string;

  relatedPosts?: string[];

  citations?: {
    source: string;
    url: string;
  }[];

  eeat?: {
    reviewedBy?: string;
    expertise?: string[];
    lastReviewed?: string;
  };
}

export const researchData: Record<string, researchPostData> = {

 
}