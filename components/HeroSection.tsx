import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-[#121212]" style={{backgroundImage: 'radial-gradient(circle at top right, rgba(245, 158, 11, 0.08), transparent 40%), radial-gradient(circle at bottom left, rgba(245, 158, 11, 0.08), transparent 40%)'}}>
        <div className="container mx-auto px-6 z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-white animate-fade-in-down" style={{animationDelay: '0.2s'}}>
                نصنع <span className="text-amber-500">الإبداع الرقمي</span> الذي يلهم
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-300 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                وكالة متكاملة لخدمات التسويق الرقمي، نساعدك على تحقيق أهدافك وبناء حضور قوي لعلامتك التجارية.
            </p>
            <a href="#services" className="bg-amber-500 text-gray-900 font-bold py-3 px-10 rounded-md text-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/20 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                اكتشف خدماتنا
            </a>
        </div>
    </section>
  );
};

export default HeroSection;
