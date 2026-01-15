import { motion } from 'framer-motion';
import { Play, ArrowRight, Award } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-navy overflow-hidden pt-16 lg:pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-parley-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-parley-gold/10 rounded-full blur-3xl" />

        {/* Animated feather element */}
        <motion.div
          className="absolute top-1/3 right-1/4 opacity-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 80 Q30 60 50 50 Q70 40 90 20 Q70 45 50 55 Q30 65 20 80" stroke="white" strokeWidth="2" fill="none"/>
            <path d="M25 75 Q35 58 50 50 Q65 42 85 25" stroke="white" strokeWidth="1" fill="none" opacity="0.5"/>
          </svg>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-parley-gold/20 border border-parley-gold/30 rounded-full px-4 py-1.5 mb-6"
            >
              <Award className="w-4 h-4 text-parley-gold" />
              <span className="text-parley-gold text-sm font-medium">{t.hero.badge}</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {t.hero.headline}
              <br />
              <span className="text-parley-gold">{t.hero.headlineAccent}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-white/70 mb-8 max-w-xl">
              {t.hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 bg-parley-gold hover:bg-parley-gold-light text-parley-navy font-semibold px-8 py-4 rounded-lg transition-all"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(184, 152, 95, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                {t.hero.cta}
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('features')}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/20 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-5 h-5" />
                {t.hero.ctaSecondary}
              </motion.button>
            </div>

            {/* Trust indicator */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-white/50 text-sm"
            >
              {t.hero.trustedBy}
            </motion.p>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Mock Dashboard */}
            <div className="relative bg-parley-deep-blue/50 backdrop-blur-sm rounded-2xl border border-white/10 p-4 shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-green-400 text-xs font-medium">LIVE</span>
                </div>
              </div>

              {/* Mock Alert Card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-parley-navy/50 rounded-lg p-4 mb-3 border-l-4 border-parley-gold"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="bg-parley-gold/20 text-parley-gold text-xs font-semibold px-2 py-1 rounded">
                    HIGH PRIORITY
                  </span>
                  <span className="text-white/50 text-xs">2 min ago</span>
                </div>
                <p className="text-white text-sm font-medium mb-1">Healthcare Reform Bill Mentioned</p>
                <p className="text-white/60 text-xs">Senator Martinez referenced your tracked keywords during committee session...</p>
              </motion.div>

              {/* Mock Stats Row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-parley-navy/30 rounded-lg p-3 text-center">
                  <p className="text-parley-gold text-xl font-bold">47</p>
                  <p className="text-white/50 text-xs">Alerts Today</p>
                </div>
                <div className="bg-parley-navy/30 rounded-lg p-3 text-center">
                  <p className="text-parley-blue text-xl font-bold">12</p>
                  <p className="text-white/50 text-xs">Reports</p>
                </div>
                <div className="bg-parley-navy/30 rounded-lg p-3 text-center">
                  <p className="text-green-400 text-xl font-bold">98%</p>
                  <p className="text-white/50 text-xs">Accuracy</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-4 -left-4 bg-parley-gold text-parley-navy font-bold px-4 py-2 rounded-lg shadow-lg"
            >
              <span className="text-2xl">2-3</span>
              <span className="text-sm ml-1">min</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
