import React from 'react';

const PortfolioItem: React.FC<{ imageUrl: string; category: string }> = ({ imageUrl, category }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg shadow-black/30 aspect-square">
    <img
      src={imageUrl}
      alt={`Portfolio work for ${category}`}
      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      width="600"
      height="600"
      loading="lazy"
      decoding="async"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
      <p className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{category}</p>
    </div>
  </div>
);

const PortfolioSection: React.FC = () => {
  const portfolioItems = [
    { imageUrl: 'https://picsum.photos/seed/design1/600/600', category: 'هوية بصرية' },
    { imageUrl: 'https://picsum.photos/seed/social2/600/600', category: 'تصاميم سوشيال ميديا' },
    { imageUrl: 'https://picsum.photos/seed/web3/600/600', category: 'تصميم مواقع' },
    { imageUrl: 'https://picsum.photos/seed/post4/600/600', category: 'موشن جرافيك' },
    { imageUrl: 'https://picsum.photos/seed/logo5/600/600', category: 'إعلانات ممولة' },
    { imageUrl: 'https://picsum.photos/seed/campaign6/600/600', category: 'كتابة محتوى' },
  ];

  return (
    <section id="portfolio" className="py-20 bg-[#181818]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">من أعمالنا</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">نظرة على بعض المشاريع التي نفخر بها.</p>
          <div className="mt-4 w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
