import { motion } from 'framer-motion';
import { NavLink as Nav } from 'react-router-dom';
import { Code2, Palette, Rocket } from 'lucide-react';
import Scene3D from './Scene3D';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0 opacity-50">
        <Scene3D />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 text-center sm:pt-24 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              <span className="block">Perkenalkan Dirimu</span>
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Kepada Dunia
              </span>
            </h1>
            
            <p className="mx-auto mt-6 max-w-lg text-xl text-gray-300 sm:max-w-3xl">
              Kami membantu memperkenalkan dirimu kepada dunia melalui website
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 flex justify-center gap-6"
          >
            <a
              href="#pricing"
              className="rounded-full bg-yellow-500 px-8 py-3 text-lg font-semibold text-black transition-all hover:bg-yellow-400"
            >
              Order Now!
            </a>
            <Nav
            to={'/portofolio'}
            className="rounded-full border-2 border-yellow-500 px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-yellow-500/10"
            >
              Our Work
            </Nav>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-lg">
              <Code2 className="mx-auto h-12 w-12 text-yellow-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">Web Development</h3>
              <p className="mt-2 text-gray-300">Kami membuat website modern dan responsif yang mencerminkan identitas unik bisnis Anda.</p>
            </div>
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-lg">
              <Palette className="mx-auto h-12 w-12 text-yellow-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">Undangan Digital</h3>
              <p className="mt-2 text-gray-300">Solusi undangan digital yang elegan dan interaktif untuk momen spesial Anda.</p>
            </div>
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-lg">
              <Rocket className="mx-auto h-12 w-12 text-yellow-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">Graphic Design</h3>
              <p className="mt-2 text-gray-300">Desain grafis kreatif yang memberikan sentuhan profesional pada brand Anda.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}