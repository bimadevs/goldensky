import { Service } from '../types';
import { Code, Palette, PenTool } from 'lucide-react';

export const services: Service[] = [
  {
    id: '1',
    title: 'Website Development',
    description: 'Kami membuat website modern dan responsif yang mencerminkan identitas unik bisnis Anda.',
    icon: 'Code',
    features: [
      'Responsive Design',
      'Custom Development',
      'SEO Optimization',
      'Performance Tuning'
    ],
    price: 'Starting at $2,999'
  },
  {
    id: '2',
    title: 'Digital Invitations',
    description: 'Interactive digital invitations that leave lasting impressions',
    icon: 'PenTool',
    features: [
      'Custom Animations',
      'RSVP Integration',
      'Mobile Responsive',
      'Analytics Tracking'
    ],
    price: 'Starting at $499'
  },
  {
    id: '3',
    title: 'Graphic Design',
    description: 'Visual designs that tell your brand story',
    icon: 'Palette',
    features: [
      'Brand Identity',
      'Marketing Materials',
      'Social Media Assets',
      'Print Design'
    ],
    price: 'Starting at $799'
  }
];