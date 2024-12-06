import { motion } from 'framer-motion';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
}

export default function TeamMember({ image, name, role }: TeamMemberProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-lg bg-gray-800/50"
    >
      <img
        src={image}
        alt={name}
        className="h-64 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 w-full p-6">
        <h4 className="text-xl font-semibold text-white">{name}</h4>
        <p className="text-yellow-400">{role}</p>
      </div>
    </motion.div>
  );
}