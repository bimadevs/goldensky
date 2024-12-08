import { NavLink } from './NavLink';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  navItems: Array<{ label: string; path: string }>;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, navItems, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-full left-0 right-0 z-50 backdrop-blur-lg bg-gray-900/90 border-b border-gray-800"
        >
          <nav className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} onClick={onClose}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}