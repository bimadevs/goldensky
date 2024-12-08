import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email',
      content: 'bimaj0206@gmail.com',
      link: 'mailto:bimaj0206@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+6282254044783',
      link: 'tel:+6282254044783',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Singkawang, Indonesia',
      link: null,
    },
  ];

  return (
    <div className="space-y-8">
      {contactDetails.map((detail) => (
        <div key={detail.title} className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <detail.icon className="w-6 h-6 text-sky-500" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">{detail.title}</h3>
            {detail.link ? (
              <a
                href={detail.link}
                className="text-gray-300 hover:text-sky-400"
              >
                {detail.content}
              </a>
            ) : (
              <p className="text-gray-300">{detail.content}</p>
            )}
          </div>
        </div>
      ))}

      <div className="mt-8 p-6 bg-gray-800 rounded-xl shadow-lg">
        <h3 className="text-lg font-medium text-white mb-4">Jam Kerja</h3>
        <div className="space-y-2 text-gray-300">
          <p>Setiap hari : 08.00 WIB - 21.00 WIB</p>
        </div>
      </div>
    </div>
  );
};