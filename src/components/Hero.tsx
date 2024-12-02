import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-yellow-50 dark:from-gray-900 dark:to-gray-800" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-500 to-yellow-500 bg-clip-text text-transparent">
            Perkenalkan Dirimu kepada Dunia
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Kami membantu memperkenalkan dirimu kepada dunia melalui website
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/portfolio"
              className="group flex items-center gap-2 px-8 py-3 bg-[rgba(255,215,0,.5)] text-white rounded-full hover:bg-[#FFD700] transition-colors"
            >
              View Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
           <a href="/#pricing">
            <button
              className="px-8 py-3 border-2 border-sky-500 text-sky-500 dark:text-sky-400 rounded-full hover:bg-sky-500 hover:text-white transition-colors"
            >
              Order Now !
            </button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce p-2">
            <div className="w-6 h-6 border-2 border-sky-500 rounded-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};