// Form Types
export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

// Component Props Types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardProps {
  title: string;
  description: string;
  icon?: React.ComponentType<any>;
  className?: string;
}

// Animation Types
export interface AnimationProps {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
  className?: string;
}

// Data Types
export interface TestimonialType {
  author: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQType {
  question: string;
  answer: string;
} 