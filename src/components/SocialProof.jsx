import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function SocialProof() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-parley-navy mb-4">
            {t.testimonial.title}
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-parley-light-gray rounded-2xl p-8 lg:p-12 relative">
            {/* Quote mark */}
            <div className="absolute top-8 left-8 lg:top-12 lg:left-12">
              <Quote className="w-12 h-12 text-parley-gold/30" />
            </div>

            {/* Quote */}
            <blockquote className="relative z-10 text-xl lg:text-2xl text-parley-navy font-medium leading-relaxed mb-8 pl-8 lg:pl-16">
              "{t.testimonial.quote}"
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center gap-4 pl-8 lg:pl-16">
              {/* Logo placeholder */}
              <div className="w-16 h-16 bg-parley-navy rounded-xl flex items-center justify-center text-white font-bold text-xl">
                CIJA
              </div>
              <div>
                <p className="font-bold text-parley-navy text-lg">
                  {t.testimonial.author}
                </p>
                <p className="text-parley-slate">
                  {t.testimonial.role}
                </p>
                <p className="text-parley-slate/70 text-sm flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3" />
                  {t.testimonial.location}
                </p>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-parley-gold/5 rounded-tl-full" />
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 mt-12 opacity-60"
          aria-hidden="true"
        >
          {/* Placeholder logos for future clients */}
          <div className="h-8 w-24 bg-parley-slate/20 rounded" />
          <div className="h-8 w-32 bg-parley-slate/20 rounded" />
          <div className="h-8 w-28 bg-parley-slate/20 rounded" />
          <div className="h-8 w-24 bg-parley-slate/20 rounded" />
        </motion.div>
      </div>
    </section>
  );
}
