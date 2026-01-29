import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'أعمالنا', href: '#portfolio' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#181818]/80 shadow-md shadow-amber-500/5 backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-3xl font-bold text-white">
            itarr<span className="text-amber-500">.</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-300 hover:text-amber-500 font-medium transition-colors duration-300">
                {link.name}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-block bg-amber-500 text-gray-900 font-bold py-2 px-6 rounded-md hover:bg-amber-600 transition-colors duration-300">
            اطلب خدمة
          </a>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-[#181818] rounded-lg p-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-300 hover:text-amber-500 font-medium transition-colors duration-300 text-center" onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
               <a href="#contact" className="bg-amber-500 text-gray-900 font-bold py-2 px-6 rounded-md hover:bg-amber-600 transition-colors duration-300 text-center" onClick={() => setIsMenuOpen(false)}>
                اطلب خدمة
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
