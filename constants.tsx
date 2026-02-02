
import { Project, Service, Tool } from './types';
import React from 'react';
import { 
  Palette, 
  Code, 
  Layout, 
  FileText, 
  Smartphone, 
  Instagram
} from 'lucide-react';

export const COLORS = {
  background: '#1C1C1C',
  panel: '#2A2A2A',
  primary: '#6C5B7B',
  secondary: '#355C7D',
  highlight: '#F8B195',
  textPrimary: '#EAEAEA',
  textSecondary: '#B0B0B0'
};

export const SERVICES: Service[] = [
  {
    title: 'Logo Design',
    description: 'Crafting unique visual identities that stand the test of time.',
    icon: 'Palette'
  },
  {
    title: 'Web Development',
    description: 'Building premium, high-performance web applications with React.',
    icon: 'Code'
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive interfaces for superior user experiences.',
    icon: 'Layout'
  },
  {
    title: 'Branding',
    description: 'Holistic brand strategy and visual communication for luxury brands.',
    icon: 'Smartphone'
  },
  {
    title: 'Poster Design',
    description: 'Impactful cinematic and commercial poster art.',
    icon: 'FileText'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Zoya Aesthetics',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    description: 'A complete visual overhaul for a premium aesthetic studio.'
  },
  {
    id: '2',
    title: 'Nova App',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop',
    description: 'A minimalist lifestyle and wellness tracking application.'
  },
  {
    id: '3',
    title: 'Midnight Gallery',
    category: 'Poster Design',
    image: 'https://images.unsplash.com/photo-1561070791-26c11d204a3d?q=80&w=1935&auto=format&fit=crop',
    description: 'Exhibition posters for a contemporary art showcase.'
  },
  {
    id: '4',
    title: 'Nexus Web',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    description: 'An interactive portfolio platform for creative professionals.'
  }
];

export const TOOLS: Tool[] = [
  { name: 'Adobe Photoshop', icon: 'Ps', color: '#31A8FF' },
  { name: 'Figma', icon: 'Fg', color: '#F24E1E' },
  { name: 'Adobe Illustrator', icon: 'Ai', color: '#FF9A00' },
  { name: 'Tailwind CSS', icon: 'Tw', color: '#06B6D4' },
  { name: 'React', icon: 'Re', color: '#61DAFB' }
];
