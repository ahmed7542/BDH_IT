import { LucideIcon } from 'lucide-react';

export interface QuickFixItem {
  id: string;
  title: string;
  icon: LucideIcon;
  description?: string;
}

export interface NavLink {
  label: string;
  href: string;
}