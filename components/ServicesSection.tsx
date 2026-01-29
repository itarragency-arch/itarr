import React from 'react';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-[#181818] p-8 rounded-lg border border-gray-800 hover:border-amber-500 hover:-translate-y-2 transition-all duration-300">
    <div className="text-amber-500 mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 21a6 6 0 004.773-9.805A4 4 0 0012 4.354a4 4 0 00-3.227 6.84" /></svg>,
      title: 'إدارة حسابات التواصل',
      description: 'نخطط، ننفذ، وندير حضوركم على كافة المنصات الاجتماعية لزيادة التفاعل وبناء مجتمع قوي حول علامتكم التجارية.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>,
      title: 'كتابة المحتوى الإبداعي',
      description: 'نصنع محتوى جذاباً ومبتكراً يخاطب جمهوركم المستهدف ويحقق أهدافكم التسويقية، من المقالات إلى النصوص الإعلانية.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
      title: 'تصميم الجرافيك',
      description: 'نحول أفكاركم إلى تصاميم بصرية مذهلة، من الهويات التجارية الكاملة إلى تصاميم السوشيال ميديا التي تخطف الأنظار.'
    },
     {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: 'الموشن جرافيك',
      description: 'ننتج فيديوهات رسوم متحركة احترافية لشرح خدماتكم أو الترويج لمنتجاتكم بطريقة مبتكرة وجذابة.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>,
      title: 'الحملات الإعلانية المدفوعة',
      description: 'ندير حملاتكم الإعلانية على جوجل ومنصات التواصل الاجتماعي لتحقيق أفضل النتائج والوصول إلى أوسع شريحة من العملاء.'
    },
     {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
      title: 'تصميم المواقع والمتاجر',
      description: 'نصمم ونطور مواقع ويب ومتاجر إلكترونية عصرية وسريعة الاستجابة، تضمن أفضل تجربة استخدام لعملائكم.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">خدماتنا الإبداعية</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">نقدم حلولاً متكاملة لدفع علامتك التجارية نحو الأمام.</p>
          <div className="mt-4 w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
