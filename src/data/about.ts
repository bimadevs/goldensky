import { TeamMember, Stat } from '../types';
import { Users, Award, Clock, Globe, PanelTop, Heart } from 'lucide-react';

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Creative Director',
    bio: 'With over 10 years of experience in design, Sarah leads our creative team with passion and innovation.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Lead Developer',
    bio: 'Michael brings technical excellence and creative problem-solving to every project.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    role: 'UI/UX Designer',
    bio: 'Emma specializes in creating intuitive and beautiful user experiences.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600',
    linkedin: '#',
    twitter: '#'
  }
];

export const stats: Stat[] = [
  {
    id: '1',
    label: 'Happy Clients',
    value: '100+',
    icon: Users
  },
  // {
  //   id: '2',
  //   label: 'Awards Won',
  //   value: '15',
  //   icon: Award
  // },
  {
    id: '2',
    label: 'Years Experience',
    value: '1+',
    icon: Clock
  },
  {
    id: '3',
    label: `People Love's`,
    value: '100+',
    icon: Heart
  }
];