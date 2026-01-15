import { LanguageProvider } from './hooks/useLanguage';
import Header from './components/Header';
import Hero from './components/Hero';
import SpeedBanner from './components/SpeedBanner';
import ProblemStatement from './components/ProblemStatement';
import Features from './components/Features';
import StakeholderProfiles from './components/StakeholderProfiles';
import ServiceNotPlatform from './components/ServiceNotPlatform';
import AdvancedCapabilities from './components/AdvancedCapabilities';
import SourcesMonitored from './components/SourcesMonitored';
import SocialProof from './components/SocialProof';
import UseCases from './components/UseCases';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <SpeedBanner />
          <ProblemStatement />
          <Features />
          <StakeholderProfiles />
          <ServiceNotPlatform />
          <AdvancedCapabilities />
          <SourcesMonitored />
          {/* <SocialProof /> */}
          <UseCases />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
