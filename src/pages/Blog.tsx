import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Mengapa Website Penting untuk Bisnis Anda?',
      excerpt:
        'Temukan bagaimana website dapat meningkatkan visibilitas dan profesionalitas bisnis Anda di era digital.',
      image: '/images/blog-1.jpg',
      date: 'November 25, 2024',
    },
    {
      id: 2,
      title: 'Desain Grafis Modern untuk Branding yang Kuat',
      excerpt:
        'Pelajari tren desain grafis terbaru yang dapat membuat merek Anda menonjol di pasar.',
      image: '/images/blog-2.jpg',
      date: 'November 15, 2024',
    },
    {
      id: 3,
      title: 'Cara Membuat Undangan Digital yang Elegan',
      excerpt:
        'Langkah-langkah praktis untuk menciptakan undangan digital yang mengesankan untuk acara spesial Anda.',
      image: '/images/blog-3.jpg',
      date: 'November 5, 2024',
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-sky-500 to-yellow-500 bg-clip-text text-transparent">
            Blog Kami
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            Jelajahi artikel menarik seputar desain, teknologi, dan pengembangan website.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-sky-500 dark:text-yellow-400 font-semibold hover:underline"
                  >
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
