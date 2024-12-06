import { NavLink as RouterNavLink } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const NavLink = ({ to, children, onClick }: NavLinkProps) => {
  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          'relative px-4 py-2 font-medium transition-all duration-300 hover:text-[#FFD700]',
          'before:absolute before:inset-0 before:h-full before:w-full before:rounded-lg',
          'before:transform before:transition-all before:duration-300 before:content-[""]',
          'hover:before:scale-105 hover:before:bg-white/5',
          'dark:text-[#FFD700]',
          isActive
            ? 'text-[#FFD700] dark:text-[#FFD700] before:bg-white/10 dark:before:bg-white/5'
            : 'text-gray-700 dark:text-gray-300'
        )
      }
    >
      <span className="relative z-10">{children}</span>
    </RouterNavLink>
  );
}