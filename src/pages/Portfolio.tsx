import React from 'react';
import { motion } from 'framer-motion';
import { PortofolioGrid } from '../components/PortfolioGrid';

export const Portofolio = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sky-500 to-yellow-500 bg-clip-text text-transparent">
            Our portofolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Jelajahi beragam koleksi proyek kami, yang memamerkan keahlian kami dalam pengembangan web, undangan digital, dan desain grafis.
          </p>
        </motion.div>
        <PortofolioGrid />
      </div>
    </div>
  );
};