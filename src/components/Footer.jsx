import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function Footer() {
  const { t } = useLanguage();

  // Define links with URLs - Resources section points to daat.cloud/blog
  const footerSections = [
    {
      title: t.footer.product.title,
      links: t.footer.product.links.map(label => ({ label, url: '#' }))
    },
    {
      title: t.footer.resources.title,
      links: [
        { label: t.footer.resources.links[0], url: 'https://daat.cloud/blog/case-studies' }, // Case Studies
        { label: t.footer.resources.links[1], url: 'https://daat.cloud/blog' }, // Blog
        { label: t.footer.resources.links[2], url: 'https://daat.cloud/blog/resources' }, // Documentation/Resources
        { label: t.footer.resources.links[3], url: 'mailto:hello@daat.cloud' }, // Support
      ]
    },
    {
      title: t.footer.company.title,
      links: [
        { label: t.footer.company.links[0], url: 'https://daat.cloud' }, // About DAAT
        { label: t.footer.company.links[1], url: '#' }, // Careers
        { label: t.footer.company.links[2], url: '#contact' }, // Contact
        { label: t.footer.company.links[3], url: '#' }, // Press
      ]
    },
    {
      title: t.footer.legal.title,
      links: t.footer.legal.links.map(label => ({ label, url: '#' }))
    },
  ];

  return (
    <footer className="bg-parley-deep-blue pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and tagline */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <a href="/" className="inline-block mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-parley-gold rounded">
              <img
                src="/logo-white.png"
                alt="PARLEY - Go to homepage"
                className="h-8 w-auto"
              />
            </a>
            <p className="text-white/60 text-sm mb-4">
              {t.footer.tagline}
            </p>
            <a
              href={`mailto:${t.footer.contact}`}
              className="inline-flex items-center gap-2 text-parley-gold hover:text-parley-gold-light transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              {t.footer.contact}
            </a>
          </div>

          {/* Link Columns */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-white/40 text-sm">
                {t.footer.copyright}
              </p>
              <span className="text-white/20">|</span>
              <a href="https://daat.cloud" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <img
                  src="/daat-white.png"
                  alt="DAAT"
                  className="h-5 w-auto"
                />
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Follow us on X (formerly Twitter)"
                className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-parley-gold"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Connect with us on LinkedIn"
                className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-parley-gold"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
