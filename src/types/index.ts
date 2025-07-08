export interface NavLink {
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string | 'Custom';
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

export interface SocialLink {
  id: string;
  icon: React.ReactNode;
  href: string;
  label: string;
} 