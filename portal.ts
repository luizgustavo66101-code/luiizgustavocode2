// Portal configuration and constants
export const PORTAL_NAME = 'Portal IA 2025';
export const PORTAL_TAGLINE = 'O Futuro da Inteligencia Artificial';
export const OWNER_NAME = 'Gustavo';
export const OWNER_EMAIL = 'luizgustavo66101@gmail.com';
export const PORTAL_DESCRIPTION = 'Um portal dedicado a explorar e compartilhar conhecimentos sobre Inteligência Artificial';

// Social links
export const SOCIAL_LINKS = {
  github: 'https://github.com/luizgustavo66101-code',
  linkedin: 'https://linkedin.com/in/gustavo',
  twitter: 'https://twitter.com/gustavo',
};

// Portal sections
export const PORTAL_SECTIONS = [
  { id: 'home', name: 'Início', path: '/' },
  { id: 'about', name: 'Sobre', path: '/about' },
  { id: 'blog', name: 'Blog', path: '/blog' },
  { id: 'tools', name: 'Ferramentas IA', path: '/tools' },
  { id: 'contact', name: 'Contato', path: '/contact' },
];

// Theme configuration
export const THEME_CONFIG = {
  primaryColor: '#3B82F6',
  secondaryColor: '#8B5CF6',
  accentColor: '#EC4899',
  darkMode: true,
};

// API configuration
export const API_CONFIG = {
  baseUrl: process.env.VITE_API_URL || 'http://localhost:3000',
  timeout: 10000,
  retries: 3,
};
