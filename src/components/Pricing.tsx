import { motion } from 'framer-motion';
import { Check, ShoppingCart } from 'lucide-react';
import AboutScene3D from './AboutScene3D';

export const Pricing = () => {
  const pricingPlans = [
    {
      title: "Pembuatan Website",
      price: "Start from Rp250.000",
      features: [
        "Desain website modern & responsive",
        "Bebas Request dan Revisi Desain",
        "Masuk Pencarian Google",
        "Gratis Hosting",
        "Gratis Domain (my.id, biz.id, web.id)",
      ],
      link: "https://wa.link/v8lwui",
      cta: "Pesan Sekarang",
    },
    {
      title: "Website Undangan",
      price: "Start from Rp.99.000",
      features: [
        "Animation",
        "Mobile resposive",
        "Masuk Pencarian Google",
        "Gratis Hosting",
        "Gratis Domain (my.id, biz.id, web.id)",
      ],
      link: "https://wa.link/xfvgd1",
      cta: "Pesan Sekarang",
    },
    // {
    //   title: "Premium",
    //   price: "Rp5.000.000",
    //   features: [
    //     "Desain website custom",
    //     "Fitur tambahan (form, galeri, dll)",
    //     "Waktu pengerjaan 21 hari",
    //     "Support selama 6 bulan",
    //   ],
    //   cta: "Pesan Sekarang",
    // },
  ];

  return (
    <div id='pricing' className=" relative bg-gray-900 py-24 overflow-hidden">
      <AboutScene3D />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-500 to-yellow-500 bg-clip-text text-transparent mb-4">
            Paket Harga
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan Anda, dan biarkan kami membantu Anda tampil online dengan profesional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
                {plan.title}
              </h3>
              <p className="text-4xl font-bold text-sky-500 mb-4 text-center">
                {plan.price}
              </p>
              <ul className="mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
                    <Check className="w-5 h-5 text-yellow-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href={plan.link} target='__blank'>
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[rgba(255,215,0,.5)] text-white rounded-full hover:bg-[#FFD700] transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                  {plan.cta}
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
