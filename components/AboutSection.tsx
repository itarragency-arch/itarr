import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#181818]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2">
            <img
              src="https://picsum.photos/seed/team/800/600"
              alt="فريق itarr"
              className="rounded-lg shadow-2xl shadow-amber-500/10 w-full h-auto"
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-extrabold text-white mb-4">من نحن؟</h2>
            <div className="mb-6 w-24 h-1 bg-amber-500"></div>
            <p className="text-gray-300 mb-4 text-lg leading-relaxed">
              <strong>itarr</strong> هي شريكك نحو النجاح الرقمي. نحن وكالة تسويق إلكتروني متخصصة في صناعة المحتوى الإبداعي والتصاميم الجذابة التي تترك أثراً.
            </p>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
             رؤيتنا هي أن نكون الخيار الأول للشركات الطموحة التي تسعى للتميز في العالم الرقمي، من خلال تقديم حلول مبتكرة ونتائج ملموسة.
            </p>
             <a href="#contact" className="border border-amber-500 text-amber-500 font-bold py-3 px-8 rounded-md hover:bg-amber-500 hover:text-gray-900 transition-colors duration-300">
                تحدث مع خبير
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
