import { motion } from 'framer-motion';
import { StatsCard } from '../components/StatsCard';
import { stats } from '../data/about';

export const About = () => {
  return (
    <>
      <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sky-500 to-yellow-500 bg-clip-text text-transparent">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Kami adalah tim desainer dan developer yang bersemangat dan berdedikasi untuk menciptakan pengalaman digital yang luar biasa.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="font-['Cinzel'] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-center items-center">
            {stats.map((stat) => (
              <StatsCard key={stat.id} stat={stat} />
            ))}
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-16 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Untuk memberdayakan bisnis dan individu dengan solusi digital inovatif yang memberikan dampak berkelanjutan.
              Kami percaya pada penciptaan desain yang tidak hanya terlihat indah tetapi juga bermanfaat.
            </p>
          </motion.div>

          {/* Team Section */}
          {/* <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
};