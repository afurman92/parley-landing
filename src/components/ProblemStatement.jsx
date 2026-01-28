import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, Check, Clock, FileSearch, Bell, LayoutDashboard } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function ProblemStatement() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const beforeIcons = [Clock, FileSearch, Bell, LayoutDashboard];
  const afterIcons = [Bell, FileSearch, Clock, LayoutDashboard];

  return (
    <section ref={ref} id="how-it-works" className="py-20 lg:py-28 bg-white dark:bg-dark-bg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-parley-navy dark:text-white mb-4">
            {t.problem.title}
          </h2>
          <p className="text-lg text-parley-slate dark:text-parley-slate/80 max-w-2xl mx-auto">
            {t.problem.subtitle}
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-parley-light-gray dark:bg-dark-surface rounded-2xl p-8 relative overflow-hidden"
          >
            {/* Subtle X pattern in background */}
            <div className="absolute top-4 right-4 opacity-5">
              <X className="w-32 h-32 text-red-500" strokeWidth={1} />
            </div>

            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 rounded-full px-4 py-1.5 mb-6">
                <X className="w-4 h-4" />
                <span className="text-sm font-semibold">{t.problem.before.title}</span>
              </div>

              <ul className="space-y-4">
                {t.problem.before.items.map((item, index) => {
                  const Icon = beforeIcons[index];
                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-500/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-red-500 dark:text-red-400" />
                      </div>
                      <span className="text-parley-navy/80 dark:text-white/80 pt-1">{item}</span>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Visual: Time wasted indicator */}
              <div className="mt-8 pt-6 border-t border-parley-slate/20">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-red-500" />
                  <div className="flex-1">
                    <div className="h-3 bg-red-200 dark:bg-red-500/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '85%' } : {}}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="h-full bg-red-500 rounded-full"
                      />
                    </div>
                  </div>
                  <span className="text-red-600 dark:text-red-400 font-semibold text-sm">10+ hrs/week</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-parley-navy rounded-2xl p-8 relative overflow-hidden"
          >
            {/* Subtle check pattern in background */}
            <div className="absolute top-4 right-4 opacity-10">
              <Check className="w-32 h-32 text-parley-gold" strokeWidth={1} />
            </div>

            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-parley-gold/20 text-parley-gold rounded-full px-4 py-1.5 mb-6">
                <Check className="w-4 h-4" />
                <span className="text-sm font-semibold">{t.problem.after.title}</span>
              </div>

              <ul className="space-y-4">
                {t.problem.after.items.map((item, index) => {
                  const Icon = afterIcons[index];
                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-parley-gold/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-parley-gold" />
                      </div>
                      <span className="text-white/90 pt-1">{item}</span>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Visual: Time saved indicator */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-parley-gold" />
                  <div className="flex-1">
                    <div className="h-3 bg-parley-deep-blue rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '15%' } : {}}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="h-full bg-parley-gold rounded-full"
                      />
                    </div>
                  </div>
                  <span className="text-parley-gold font-semibold text-sm">~1 hr/week</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
