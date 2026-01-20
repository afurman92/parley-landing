import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Smile,
  GitBranch,
  Search,
  MessageSquare,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const iconMap = [Smile, GitBranch, Search, MessageSquare, TrendingUp, BarChart3];

export default function AdvancedCapabilities() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-parley-light-gray dark:bg-dark-surface transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-parley-navy dark:text-white mb-4">
            {t.capabilities.title}
          </h2>
          <p className="text-lg text-parley-slate dark:text-parley-slate/80 max-w-2xl mx-auto">
            {t.capabilities.subtitle}
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.capabilities.items.map((item, index) => {
            const Icon = iconMap[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-dark-bg rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-parley-steel/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-parley-steel" />
                </div>
                <h3 className="text-lg font-semibold text-parley-navy dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-parley-slate dark:text-parley-slate/80 text-sm">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
