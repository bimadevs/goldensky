import { motion } from 'framer-motion';

const stats = [
  { id: 1, name: 'Projects Completed', value: '10+' },
  { id: 2, name: 'Happy Clients', value: '10+' },
  { id: 3, name: 'Years Experience', value: '1+' },
  { id: 4, name: 'Team Members', value: '10+' },
];

export default function Stats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mt-20 rounded-2xl bg-gray-800/50 py-12 backdrop-blur-lg"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-8 gap-x-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              whileHover={{ scale: 1.05 }}
              className="mx-auto flex max-w-xs flex-col"
            >
              <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-yellow-400">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </motion.div>
  );
}