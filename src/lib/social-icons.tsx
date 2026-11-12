import {
  Github,
  Linkedin,
  Mail,
  Phone,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Email: Mail,
  Phone: Phone,
};

export function getSocialIcon(label: string): LucideIcon {
  return iconMap[label] ?? Mail;
}
