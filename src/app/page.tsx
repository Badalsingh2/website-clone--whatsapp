import Navigation from '@/components/sections/navigation';
import HeroSection from '@/components/sections/hero';
import PortfolioSection from '@/components/sections/portfolio';
import ProcessSection from '@/components/sections/process';
import Testimonials from '@/components/sections/testimonials';
import CtaSection from '@/components/sections/cta';
import Footer from '@/components/sections/footer';
import FloatingWhatsapp from '@/components/sections/floating-whatsapp';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background-dark to-background-navy">
      <Navigation />
      <main>
        <HeroSection />
        <PortfolioSection />
        <ProcessSection />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}