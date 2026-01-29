import React from 'react';

const ClientsSection: React.FC = () => {
  const clients = [
    'Client A',
    'شريكنا ب',
    'Client C',
    'العميل د',
    'Client E',
  ];

  return (
    <section id="clients" className="py-16 bg-[#181818]">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-gray-400 mb-8">
          شركاء النجاح الذين نعتز بهم
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-12 sm:gap-x-16 gap-y-6">
          {clients.map((client, index) => (
            <span key={index} className="text-2xl font-bold text-gray-500 opacity-70 hover:opacity-100 hover:text-gray-400 transition-all duration-300 cursor-pointer">
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
