import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors duration-300">
    {children}
  </a>
);

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-gray-400 hover:text-amber-500 transition-colors duration-300 block mb-2">{children}</a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#181818] text-gray-400 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-center md:text-right">
            <div>
                <h3 className="text-xl font-bold text-white mb-4">itarr<span className="text-amber-500">.</span></h3>
                <p className="text-sm leading-relaxed">وكالة إبداعية متخصصة في تقديم حلول التسويق الرقمي التي تساعد العلامات التجارية على النمو والازدهار.</p>
            </div>
            <div>
                <h3 className="text-lg font-bold text-white mb-4">روابط سريعة</h3>
                <nav>
                    <FooterLink href="#about">من نحن</FooterLink>
                    <FooterLink href="#services">خدماتنا</FooterLink>
                    <FooterLink href="#portfolio">أعمالنا</FooterLink>
                    <FooterLink href="#contact">تواصل معنا</FooterLink>
                </nav>
            </div>
             <div>
                <h3 className="text-lg font-bold text-white mb-4">تواصل معنا</h3>
                <p className="mb-2">الرياض، المملكة العربية السعودية</p>
                <p className="mb-2">info@itarr.com</p>
                <p>+966 12 345 6789</p>
            </div>
            <div>
                <h3 className="text-lg font-bold text-white mb-4">تابعنا</h3>
                 <div className="flex space-x-6 justify-center md:justify-end">
                    <SocialIcon href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" /></svg>
                    </SocialIcon>
                    <SocialIcon href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.295 1.624 4.418 3.953 4.884-.544.148-1.12.18-1.72.1-1.025 2.16 3.928 3.28 6.5 3.325-1.712 1.34-3.952 2.16-6.233 2.16-.42 0-.833-.024-1.24-.073 2.193 1.425 4.833 2.25 7.623 2.25 9.223 0 14.129-7.79 13.568-14.417.959-.69 1.788-1.56 2.457-2.548z" /></svg>
                    </SocialIcon>
                    <SocialIcon href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </SocialIcon>
                </div>
            </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} itarr. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
