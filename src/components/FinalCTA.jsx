import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Send, MessageCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function FinalCTA() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const subject = encodeURIComponent(`Demo Request from ${data.name} - ${data.organization}`);
    const body = encodeURIComponent(
      `Hello PARLEY Team,\n\n` +
      `I would like to request a demo.\n\n` +
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Organization: ${data.organization}\n` +
      `Role: ${data.role || 'Not specified'}\n\n` +
      `Best regards,\n${data.name}`
    );

    window.location.href = `mailto:hello@daat.cloud?subject=${subject}&body=${body}`;
    reset();
  };

  return (
    <section ref={ref} id="contact" className="py-20 lg:py-28 bg-gradient-navy relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Feather pattern */}
        <motion.div
          className="absolute top-20 left-10 opacity-5"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 80 Q30 60 50 50 Q70 40 90 20 Q70 45 50 55 Q30 65 20 80" stroke="white" strokeWidth="2" fill="none"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10 opacity-5"
          animate={{
            y: [0, 10, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 80 Q30 60 50 50 Q70 40 90 20 Q70 45 50 55 Q30 65 20 80" stroke="white" strokeWidth="2" fill="none"/>
          </svg>
        </motion.div>

        {/* Gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-parley-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t.cta.title}
            </h2>
            <p className="text-lg text-white/70 mb-8">
              {t.cta.subtitle}
            </p>

            {/* Alternative contact */}
            <div className="flex items-center gap-3 text-white/60">
              <MessageCircle className="w-5 h-5" />
              <span>{t.cta.alternative}:</span>
              <a
                href="mailto:hello@daat.cloud"
                className="text-parley-gold hover:text-parley-gold-light transition-colors"
              >
                hello@daat.cloud
              </a>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                    {t.cta.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: true })}
                    className={`w-full bg-white/10 border ${errors.name ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-parley-gold transition-colors`}
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                    {t.cta.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                    className={`w-full bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-parley-gold transition-colors`}
                    placeholder="john@company.com"
                  />
                </div>

                {/* Organization */}
                <div>
                  <label htmlFor="organization" className="block text-white/80 text-sm font-medium mb-2">
                    {t.cta.form.organization}
                  </label>
                  <input
                    type="text"
                    id="organization"
                    {...register('organization', { required: true })}
                    className={`w-full bg-white/10 border ${errors.organization ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-parley-gold transition-colors`}
                    placeholder="Company Inc."
                  />
                </div>

                {/* Role */}
                <div>
                  <label htmlFor="role" className="block text-white/80 text-sm font-medium mb-2">
                    {t.cta.form.role}
                  </label>
                  <input
                    type="text"
                    id="role"
                    {...register('role')}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-parley-gold transition-colors"
                    placeholder="Director of Government Affairs"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-parley-gold hover:bg-parley-gold-light disabled:bg-parley-gold/50 text-parley-navy font-semibold px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      {t.cta.form.submit}
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {/* Privacy note */}
                <p className="text-white/50 text-xs text-center">
                  {t.cta.form.privacy}
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
