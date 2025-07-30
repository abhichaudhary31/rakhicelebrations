
import React from 'react';
import Icon from './Icon';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: Menu Icon */}
          <button className="text-brand-dark hover:text-brand-primary">
            <Icon name="menu" className="w-6 h-6" />
          </button>

          {/* Center: Logo */}
          <h1 className="text-2xl font-serif font-bold text-brand-primary tracking-wider">
            Rakhi
          </h1>

          {/* Right: Action Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-brand-dark hover:text-brand-primary">
              <Icon name="search" className="w-6 h-6" />
            </button>
            <button className="text-brand-dark hover:text-brand-primary relative">
              <Icon name="heart" className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-secondary text-white text-xs">2</span>
            </button>
            <button className="text-brand-dark hover:text-brand-primary relative">
              <Icon name="shopping-bag" className="w-6 h-6" />
               <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-secondary text-white text-xs">3</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
