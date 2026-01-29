import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API
    alert(`شكراً لك، ${formData.name}! تم استلام رسالتك بنجاح.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">تواصل معنا</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">هل لديك مشروع؟ نحن هنا للمساعدة. املأ النموذج وسنعاود الاتصال بك.</p>
          <div className="mt-4 w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">الاسم</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="اسمك الكامل"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:ring-amber-500 focus:border-amber-500 transition-shadow duration-300 shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">البريد الإلكتروني</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="بريدك الإلكتروني"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:ring-amber-500 focus:border-amber-500 transition-shadow duration-300 shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">رسالتك</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="كيف يمكننا مساعدتك؟"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:ring-amber-500 focus:border-amber-500 transition-shadow duration-300 shadow-sm"
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-amber-500 text-gray-900 font-bold py-3 px-10 rounded-md text-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/20">
                أرسل الرسالة
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
