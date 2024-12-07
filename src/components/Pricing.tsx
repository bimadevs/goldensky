import { motion } from 'framer-motion';
import { Check, ShoppingCart } from 'lucide-react';
import PricingScene3D from './PricingScene3D';

export const Pricing = () => {
  const plans = [
    {
      name: "Pembuatan Website",
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
      popular : true
    },
    {
      name: "Website Undangan",
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
    //   name: "Premium",
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
    <section id="pricing" className="relative bg-gray-900 py-24 overflow-hidden">
      <PricingScene3D />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple, Transparent <span className="text-yellow-400">Pricing</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative rounded-2xl bg-gray-800/50 p-8 backdrop-blur-lg ${
                plan.popular ? 'ring-2 ring-yellow-400' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-yellow-400 px-3 py-1 text-center text-sm font-semibold text-black">
                  Most Popular
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  {/* <span className="text-4xl font-bold text-yellow-400">$</span> */}
                  <span className="text-5xl font-bold tracking-tight text-white">
                    {plan.price}
                  </span>
                </div>
                <ul className="mt-8 mb-8 space-y-4 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-yellow-400" />
                      <span className="ml-3 text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.div
                onClick={() => {
                  window.open(plan.link, '_blank');
                }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-8 hover:cursor-pointer w-full rounded-full px-4 py-2 text-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-400 text-black hover:from-yellow-400 hover:to-yellow-300'
                      : 'border-2 border-yellow-400 text-white hover:bg-yellow-400/10'
                  }`}
                >
                  Pesan Sekarang
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}