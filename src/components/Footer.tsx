import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Description */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">Golden Sky Design</h3>
            <p className="text-gray-400">
              Kami menyediakan layanan pembuatan website, undangan digital, dan desain grafis berkualitas tinggi untuk
              membantu memperkenalkan bisnis Anda ke dunia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-yellow-500 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-yellow-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-yellow-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              {/* <li>
                <Link to="/pricing" className="hover:text-yellow-400 transition-colors">
                  Pricing
                </Link>
              </li> */}
              {/* <li>
                <Link to="/blog" className="hover:text-yellow-400 transition-colors">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link to="/contact" className="hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold text-yellow-500 mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-yellow-500" />
                <a href="mailto:bimaj0206@gmail.com" className="hover:text-yellow-400 transition-colors">
                  bimaj0206@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-yellow-500" />
                <span>+62 812-3456-7890</span>
              </li>
            </ul>
            <div className="mt-4 flex gap-4">
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a> */}
              {/* <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a> */}
              <a
                href="https://www.instagram.com/golden_sky_design?igsh=MXoyMDN4eGd0NDl0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Golden Sky Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
