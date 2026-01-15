import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Zap, FileText, Radio } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

function AnimatedCounter({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function SpeedBanner() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const metrics = [
    {
      icon: Zap,
      label: t.speedBanner.alerts,
      value: t.speedBanner.alertsTime,
      desc: t.speedBanner.alertsDesc,
      color: 'text-parley-navy',
    },
    {
      icon: FileText,
      label: t.speedBanner.reports,
      value: t.speedBanner.reportsTime,
      desc: t.speedBanner.reportsDesc,
      color: 'text-parley-navy',
    },
    {
      icon: Radio,
      label: t.speedBanner.monitoring,
      value: t.speedBanner.monitoringTime,
      desc: t.speedBanner.monitoringDesc,
      color: 'text-parley-navy',
    },
  ];

  return (
    <section ref={ref} className="bg-gradient-gold py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className="flex items-center justify-center gap-4"
            >
              <div className="bg-parley-navy/10 p-3 rounded-full">
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
              <div>
                <p className="text-parley-navy/70 text-sm font-medium uppercase tracking-wide">
                  {metric.label}
                </p>
                <p className="text-parley-navy text-2xl lg:text-3xl font-bold">
                  {metric.value}
                </p>
                <p className="text-parley-navy/60 text-sm">
                  {metric.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
