import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Megaphone, Landmark, Briefcase, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const iconMap = [Megaphone, Landmark, Briefcase];
const colorMap = [
  { bg: 'bg-parley-gold/10', icon: 'text-parley-gold', border: 'border-parley-gold/30' },
  { bg: 'bg-parley-blue/10', icon: 'text-parley-blue', border: 'border-parley-blue/30' },
  { bg: 'bg-parley-steel/10', icon: 'text-parley-steel', border: 'border-parley-steel/30' },
];

export default function UseCases() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-parley-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-parley-navy mb-4">
            {t.useCases.title}
          </h2>
          <p className="text-lg text-parley-slate max-w-2xl mx-auto">
            {t.useCases.subtitle}
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {t.useCases.items.map((item, index) => {
            const Icon = iconMap[index];
            const colors = colorMap[index];

            return (
              <motion.div
                key={index}
                role="button"
                tabIndex={0}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-parley-gold focus-visible:ring-offset-2"
                onClick={scrollToContact}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollToContact()}
                aria-label={`${item.title} - ${item.benefit}. Click to request a demo`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-parley-navy mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-parley-slate mb-6">
                  {item.description}
                </p>

                {/* Benefit Badge */}
                <div className={`inline-flex items-center gap-2 ${colors.bg} border ${colors.border} rounded-full px-4 py-2`}>
                  <span className={`text-sm font-medium ${colors.icon}`}>
                    {item.benefit}
                  </span>
                </div>

                {/* Arrow on hover */}
                <div className="mt-6 flex items-center gap-2 text-parley-blue opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
