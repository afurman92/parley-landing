import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bell, FileText, Calendar, Clock, Check, Zap } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function Features() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="features" className="py-20 lg:py-28 bg-parley-light-gray dark:bg-dark-surface transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-parley-navy dark:text-white mb-4">
            {t.features.sectionTitle}
          </h2>
          <p className="text-lg text-parley-slate dark:text-parley-slate/80 max-w-2xl mx-auto">
            {t.features.sectionSubtitle}
          </p>
        </motion.div>

        {/* Feature 1: Intelligent Alerts - with Gold highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white dark:bg-dark-bg rounded-2xl shadow-lg overflow-hidden border-2 border-parley-gold">
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-parley-gold text-parley-navy text-xs font-bold px-3 py-1 rounded-full">
                    {t.features.alerts.badge}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-parley-navy dark:text-white mb-2">
                  {t.features.alerts.title}
                </h3>
                <p className="text-parley-slate dark:text-parley-slate/80 mb-4">
                  {t.features.alerts.subtitle}
                </p>

                {/* Time highlight */}
                <div className="flex items-center gap-3 bg-parley-gold/10 rounded-lg p-4 mb-6">
                  <Clock className="w-8 h-8 text-parley-gold" />
                  <div>
                    <p className="text-2xl font-bold text-parley-navy dark:text-white">{t.features.alerts.time}</p>
                    <p className="text-sm text-parley-slate">{t.features.alerts.timeDesc}</p>
                  </div>
                </div>

                <p className="text-parley-slate dark:text-parley-slate/80 mb-6">
                  {t.features.alerts.description}
                </p>

                <ul className="space-y-3">
                  {t.features.alerts.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-parley-gold flex-shrink-0" />
                      <span className="text-parley-navy dark:text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Mock */}
              <div className="relative">
                <div className="bg-parley-navy rounded-xl p-6 h-full">
                  {/* Mock Alert */}
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 }}
                      className="bg-parley-deep-blue/50 rounded-lg p-4 border-l-4 border-red-500"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-red-500/20 text-red-400 text-xs font-semibold px-2 py-1 rounded">
                          CRITICAL
                        </span>
                        <span className="text-white/50 text-xs flex items-center gap-1">
                          <Zap className="w-3 h-3" /> 2 min ago
                        </span>
                      </div>
                      <p className="text-white text-sm font-medium">Tax Reform Amendment Filed</p>
                      <p className="text-white/60 text-xs mt-1">Committee hearing scheduled...</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 }}
                      className="bg-parley-deep-blue/50 rounded-lg p-4 border-l-4 border-parley-gold"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-parley-gold/20 text-parley-gold text-xs font-semibold px-2 py-1 rounded">
                          HIGH
                        </span>
                        <span className="text-white/50 text-xs flex items-center gap-1">
                          <Zap className="w-3 h-3" /> 3 min ago
                        </span>
                      </div>
                      <p className="text-white text-sm font-medium">Healthcare Bill Discussion</p>
                      <p className="text-white/60 text-xs mt-1">Senator Johnson mentioned...</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.7 }}
                      className="bg-parley-deep-blue/50 rounded-lg p-4 border-l-4 border-parley-blue"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-parley-blue/20 text-parley-blue text-xs font-semibold px-2 py-1 rounded">
                          MEDIUM
                        </span>
                        <span className="text-white/50 text-xs flex items-center gap-1">
                          <Zap className="w-3 h-3" /> 5 min ago
                        </span>
                      </div>
                      <p className="text-white text-sm font-medium">Energy Policy Update</p>
                      <p className="text-white/60 text-xs mt-1">New provisions added...</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature 2: Synaptic Reports */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-white dark:bg-dark-bg rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              {/* Visual Mock - Left on this one */}
              <div className="relative order-2 lg:order-1">
                <div className="bg-parley-light-gray dark:bg-dark-surface rounded-xl p-6 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-parley-steel" />
                    <span className="text-parley-navy font-semibold">Synaptic Report®</span>
                    <span className="ml-auto text-xs text-parley-slate">15 min ago</span>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-parley-navy text-sm mb-2">Executive Summary</h4>
                      <div className="h-2 bg-parley-slate/20 rounded w-full mb-2" />
                      <div className="h-2 bg-parley-slate/20 rounded w-4/5 mb-2" />
                      <div className="h-2 bg-parley-slate/20 rounded w-3/4" />
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-parley-navy text-sm mb-2">Key Contributors</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-parley-blue/20 rounded-full" />
                        <div className="h-2 bg-parley-slate/20 rounded w-32" />
                        <span className="ml-auto text-xs text-green-600">+85%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-parley-gold/20 rounded-full" />
                        <div className="h-2 bg-parley-slate/20 rounded w-28" />
                        <span className="ml-auto text-xs text-red-600">-12%</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-parley-navy text-sm mb-2">Sentiment Analysis</h4>
                      <div className="flex gap-2">
                        <div className="flex-1 h-4 bg-green-500/70 rounded" />
                        <div className="w-12 h-4 bg-gray-300 rounded" />
                        <div className="w-8 h-4 bg-red-500/70 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-parley-blue/10 text-parley-blue text-xs font-bold px-3 py-1 rounded-full">
                    {t.features.synaptic.badge}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-parley-navy dark:text-white mb-2">
                  {t.features.synaptic.title}
                </h3>
                <p className="text-parley-slate dark:text-parley-slate/80 mb-4">
                  {t.features.synaptic.subtitle}
                </p>

                {/* Time highlight */}
                <div className="flex items-center gap-3 bg-parley-blue/10 rounded-lg p-4 mb-6">
                  <Clock className="w-8 h-8 text-parley-blue" />
                  <div>
                    <p className="text-2xl font-bold text-parley-navy dark:text-white">{t.features.synaptic.time}</p>
                    <p className="text-sm text-parley-slate">{t.features.synaptic.timeDesc}</p>
                  </div>
                </div>

                <p className="text-parley-slate dark:text-parley-slate/80 mb-6">
                  {t.features.synaptic.description}
                </p>

                <ul className="space-y-3">
                  {t.features.synaptic.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-parley-blue flex-shrink-0" />
                      <span className="text-parley-navy dark:text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature 3: Personalized Summaries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-white dark:bg-dark-bg rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-parley-steel/10 text-parley-steel text-xs font-bold px-3 py-1 rounded-full">
                    {t.features.summaries.badge}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-parley-navy dark:text-white mb-2">
                  {t.features.summaries.title}
                </h3>
                <p className="text-parley-slate dark:text-parley-slate/80 mb-6">
                  {t.features.summaries.subtitle}
                </p>

                <p className="text-parley-slate dark:text-parley-slate/80 mb-6">
                  {t.features.summaries.description}
                </p>

                <ul className="space-y-3">
                  {t.features.summaries.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-parley-steel flex-shrink-0" />
                      <span className="text-parley-navy dark:text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Mock */}
              <div className="relative">
                <div className="bg-parley-navy rounded-xl p-6">
                  {/* Mock Email/Summary */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="bg-parley-deep-blue px-4 py-3 flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-white" />
                      <span className="text-white font-medium text-sm">Daily Legislative Summary</span>
                    </div>
                    <div className="p-4 space-y-4">
                      <div>
                        <h4 className="font-bold text-parley-navy text-sm mb-1">The Essentials</h4>
                        <div className="flex gap-2">
                          <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">3 Critical</span>
                          <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded">7 High</span>
                          <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">12 Medium</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-parley-navy text-sm mb-1">Top Issues</h4>
                        <div className="space-y-1">
                          <div className="h-2 bg-parley-slate/20 rounded w-full" />
                          <div className="h-2 bg-parley-slate/20 rounded w-5/6" />
                          <div className="h-2 bg-parley-slate/20 rounded w-4/5" />
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-parley-navy text-sm mb-1">What's Next</h4>
                        <div className="h-2 bg-parley-slate/20 rounded w-3/4" />
                      </div>
                    </div>
                  </div>

                  {/* Frequency options */}
                  <div className="flex justify-center gap-2 mt-4">
                    <span className="bg-parley-gold/20 text-parley-gold text-xs px-3 py-1 rounded-full">Daily</span>
                    <span className="bg-white/10 text-white/60 text-xs px-3 py-1 rounded-full">Weekly</span>
                    <span className="bg-white/10 text-white/60 text-xs px-3 py-1 rounded-full">3x Daily</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
