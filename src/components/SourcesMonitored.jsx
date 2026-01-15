import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Radio,
  User,
  FileText,
  Calendar,
  Building,
  Shield
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

// Custom X icon (formerly Twitter)
const XIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const iconMap = [Radio, User, FileText, Calendar, XIcon, Building];

export default function SourcesMonitored() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-parley-deep-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {t.sources.title}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t.sources.subtitle}
          </p>
        </motion.div>

        {/* Sources Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mb-12">
          {t.sources.items.map((item, index) => {
            const Icon = iconMap[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 * index }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-1">
                  {item.name}
                </h3>
                <p className="text-white/60 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Compliance Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-medium">
              {t.sources.compliance}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
