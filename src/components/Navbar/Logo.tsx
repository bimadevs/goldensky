import { NavLink } from 'react-router-dom';

export const Logo = () => {
  return (
    <NavLink 
      to="/" 
      className="group relative flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
    >
      <div className="relative">
        <img 
          src="/images/Logo_GoldenSky.svg" 
          alt="Logo GoldenSky" 
          className="md:h-56 md:w-56 h-40 w-40 transition-all duration-300
            [transform-style:preserve-3d]
            group-hover:[transform:rotateY(10deg)]"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500/20 to-sky-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </NavLink>
  );
}