import React from 'react';
import { motion } from 'framer-motion';
import type { Stat } from '../types';

export const StatsCard = ({ stat }: { stat: Stat }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg"
    >
      <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900 rounded-lg flex items-center justify-center mx-auto mb-4">
        <stat.icon className="w-6 h-6 text-sky-500" />
      </div>
      <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
      <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
    </motion.div>
  );
};