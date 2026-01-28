import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  UserCircle,
  MessageSquare,
  TrendingUp,
  History,
  Target,
  Users
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function StakeholderProfiles() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: MessageSquare, color: 'text-parley-gold', bg: 'bg-parley-gold/20' },
    { icon: TrendingUp, color: 'text-parley-blue', bg: 'bg-parley-blue/20' },
    { icon: History, color: 'text-parley-steel', bg: 'bg-parley-steel/20' },
    { icon: Target, color: 'text-green-500', bg: 'bg-green-500/20' },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Real Dashboard Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="relative"
          >
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-parley-slate/20">
              {/* Screenshot with blur overlay on top-left for client logo */}
              <div className="relative">
                <img
                  src="/dashboard-screenshot.png"
                  alt="Parliamentary Profile Dashboard"
                  className="w-full h-auto"
                />
                {/* Blur overlay for client logo area (top-left corner) */}
                <div
                  className="absolute top-0 left-0 w-32 h-12 backdrop-blur-xl bg-white/50"
                  style={{ borderBottomRightRadius: '8px' }}
                />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-parley-navy text-white font-bold px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              <span className="text-sm">338 MPs</span>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-parley-gold/20 border border-parley-gold/30 rounded-full px-4 py-1.5 mb-6">
              <UserCircle className="w-4 h-4 text-parley-gold" />
              <span className="text-parley-gold text-sm font-medium">
                {t.stakeholder?.badge || 'Stakeholder Intelligence'}
              </span>
            </div>

            <h2 className="font-display text-3xl lg:text-4xl font-bold text-parley-navy mb-4">
              {t.stakeholder?.title || 'Know Every Political Actor'}
            </h2>

            <p className="text-lg text-parley-slate mb-8">
              {t.stakeholder?.subtitle || 'Track individual legislators, their declarations, voting patterns, and evolving positions over time. Understand WHO says WHAT and how their stance changes.'}
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {(t.stakeholder?.features || [
                { title: 'Complete Declaration History', desc: 'Every parliamentary statement and interjection tracked' },
                { title: 'Position Evolution', desc: 'See how stances shift from "review" to "implement"' },
                { title: 'Social Media Integration', desc: 'X posts linked to official statements' },
                { title: 'Interest Mapping', desc: 'Identify which topics each legislator prioritizes' },
              ]).map((feature, index) => {
                const IconComponent = features[index]?.icon || MessageSquare;
                const color = features[index]?.color || 'text-parley-gold';
                const bg = features[index]?.bg || 'bg-parley-gold/20';

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className={`flex-shrink-0 w-10 h-10 ${bg} rounded-lg flex items-center justify-center`}>
                      <IconComponent className={`w-5 h-5 ${color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-parley-navy">{feature.title}</h4>
                      <p className="text-parley-slate text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
