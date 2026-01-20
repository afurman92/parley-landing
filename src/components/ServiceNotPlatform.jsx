import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, Check, Award, Users, Shield } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function ServiceNotPlatform() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white dark:bg-dark-bg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-parley-navy dark:text-white mb-4">
            {t.service.title}
          </h2>
          <p className="text-lg text-parley-slate dark:text-parley-slate/80 max-w-2xl mx-auto">
            {t.service.subtitle}
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-parley-slate dark:text-parley-slate/80 max-w-3xl mx-auto mb-12"
        >
          {t.service.description}
        </motion.p>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {/* Platform Column */}
          <div className="bg-parley-light-gray dark:bg-dark-surface rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-parley-slate/20 rounded-full mb-4">
                <X className="w-6 h-6 text-parley-slate" />
              </div>
              <h3 className="text-xl font-bold text-parley-navy dark:text-white">
                {t.service.comparison.platform.title}
              </h3>
            </div>

            <ul className="space-y-4">
              {t.service.comparison.platform.items.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-parley-slate/20 rounded-full flex items-center justify-center">
                    <X className="w-3 h-3 text-parley-slate" />
                  </div>
                  <span className="text-parley-slate">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* PARLEY Column */}
          <div className="bg-parley-navy rounded-2xl p-8 relative overflow-hidden">
            {/* Gold corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-parley-gold/10 rounded-bl-full" />

            <div className="relative text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-parley-gold/20 rounded-full mb-4">
                <Check className="w-6 h-6 text-parley-gold" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {t.service.comparison.parley.title}
              </h3>
            </div>

            <ul className="relative space-y-4">
              {t.service.comparison.parley.items.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-parley-gold/20 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-parley-gold" />
                  </div>
                  <span className="text-white/90">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Years */}
          <div className="bg-parley-light-gray dark:bg-dark-surface rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-parley-gold/20 rounded-full mb-4">
              <Award className="w-6 h-6 text-parley-gold" />
            </div>
            <p className="text-4xl font-bold text-parley-navy dark:text-white mb-1">{t.service.stats.years}</p>
            <p className="text-parley-slate">{t.service.stats.yearsLabel}</p>
          </div>

          {/* Clients */}
          <div className="bg-parley-light-gray dark:bg-dark-surface rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-parley-blue/20 rounded-full mb-4">
              <Users className="w-6 h-6 text-parley-blue" />
            </div>
            <p className="text-4xl font-bold text-parley-navy dark:text-white mb-1">{t.service.stats.clients}</p>
            <p className="text-parley-slate">{t.service.stats.clientsLabel}</p>
          </div>

          {/* Compliance */}
          <div className="bg-parley-light-gray dark:bg-dark-surface rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-4xl font-bold text-parley-navy dark:text-white mb-1">{t.service.stats.compliance}</p>
            <p className="text-parley-slate">{t.service.stats.complianceLabel}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
