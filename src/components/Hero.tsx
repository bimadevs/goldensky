import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <>
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800 dark:from-purple-950 dark:via-blue-950 dark:to-teal-900 opacity-90" />
        <div className="absolute inset-0 bg-[url('/images/bg.avif')] dark:bg-[url('/images/bg-dark.avif')] opacity-20" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
        </div>
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,158,0.2)_50%,transparent_75%)] dark:bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,158,0.1)_50%,transparent_75%)]" />
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-yellow-200 dark:from-cyan-400 dark:to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Perkenalkan Dirimu kepada Dunia
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Kami membantu memperkenalkan dirimu kepada dunia melalui website
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/portfolio"
              className="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
            >
              View Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
           <a href="https://wa.link/9bti5m" target='__blank'>
            <button
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-600 dark:text-cyan-300 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 backdrop-blur-sm"
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
            <div className="w-6 h-6 border-2 border-cyan-400 rounded-full shadow-lg shadow-cyan-500/50" />
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};