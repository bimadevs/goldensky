import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, PenTool } from 'lucide-react';
import type { Service } from '../types';

const icons = {
  Code,
  Palette,
  PenTool,
};

export const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = icons[service.icon as keyof typeof icons];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900 rounded-lg flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-sky-500" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
      <ul className="space-y-2 mb-6">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-sky-500 rounded-full" />
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <p className="text-lg font-semibold text-sky-500">{service.price}</p>
    </motion.div>
  );
};