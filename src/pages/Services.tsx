import { motion } from 'framer-motion';
import { Code, Palette, PenTool } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Kami membuat website modern dan responsif yang mencerminkan identitas unik bisnis Anda.",
      icon: <Code className="text-yellow-500 w-10 h-10" />,
    },
    {
      title: "Digital Invitations",
      description:
        "Solusi undangan digital yang elegan dan interaktif untuk momen spesial Anda.",
      icon: <Palette className="text-sky-500 w-10 h-10" />,
    },
    {
      title: "Graphic Design",
      description:
        "Desain grafis kreatif yang memberikan sentuhan profesional pada brand Anda.",
      icon: <PenTool className="text-gray-500 w-10 h-10" />,
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-yellow-50 to-sky-100 dark:from-gray-800 dark:to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-500 to-yellow-500 bg-clip-text text-transparent mb-4">
            Layanan Kami
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Jelajahi layanan terbaik kami untuk memenuhi kebutuhan digital Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
