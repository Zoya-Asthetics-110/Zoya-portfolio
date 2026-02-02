
import React, { useState, useEffect, startTransition } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      startTransition(() => {
        setIsScrolled(window.scrollY > 50);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-black tracking-tighter text-[#EAEAEA] font-montserrat uppercase">
          Z<span className="text-[#F8B195]">OYA</span>
        </a>

        <ul className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href}
                className="text-sm font-medium text-[#B0B0B0] hover:text-[#F8B195] transition-colors duration-300 tracking-widest uppercase"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button className="text-[#EAEAEA]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
