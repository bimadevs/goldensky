import { motion } from 'framer-motion';
import { Award, Users, Target, Zap } from 'lucide-react';
import Stats from './Stats';
import AboutScene3D from './AboutScene3D';
import TeamMember from './ThemeToggle';

export default function AboutUs() {
  return (
    <section id="about" className="relative bg-gray-900 py-24 overflow-hidden">
      <AboutScene3D />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About <span className="text-yellow-400">Golden Sky</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            We're passionate about creating exceptional digital experiences that help businesses thrive in the modern world.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="rounded-xl bg-gray-800/50 p-6 text-center backdrop-blur-lg"
          >
            <Award className="mx-auto h-12 w-12 text-yellow-400" />
            <h3 className="mt-4 text-xl font-semibold text-white">Excellence</h3>
            <p className="mt-2 text-gray-300">Committed to delivering outstanding results</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="rounded-xl bg-gray-800/50 p-6 text-center backdrop-blur-lg"
          >
            <Users className="mx-auto h-12 w-12 text-yellow-400" />
            <h3 className="mt-4 text-xl font-semibold text-white">Collaboration</h3>
            <p className="mt-2 text-gray-300">Working together to achieve your goals</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="rounded-xl bg-gray-800/50 p-6 text-center backdrop-blur-lg"
          >
            <Target className="mx-auto h-12 w-12 text-yellow-400" />
            <h3 className="mt-4 text-xl font-semibold text-white">Innovation</h3>
            <p className="mt-2 text-gray-300">Pushing boundaries in web development</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="rounded-xl bg-gray-800/50 p-6 text-center backdrop-blur-lg"
          >
            <Zap className="mx-auto h-12 w-12 text-yellow-400" />
            <h3 className="mt-4 text-xl font-semibold text-white">Speed</h3>
            <p className="mt-2 text-gray-300">Fast delivery without compromising quality</p>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <Stats />

        {/* Team Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <h3 className="text-center text-2xl font-bold text-white">Meet Our Team</h3>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <TeamMember
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400"
              name="Sarah Johnson"
              role="Lead Designer"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
              name="David Chen"
              role="Senior Developer"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400"
              name="Emily Rodriguez"
              role="Project Manager"
            />
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}