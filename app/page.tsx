import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import TrustBand from '@/components/TrustBand';
import Services from '@/components/Services';
import Features from '@/components/Features';
import WhoWeAre from '@/components/WhoWeAre';
import HowItWorks from '@/components/HowItWorks';
import PayoutCycles from '@/components/PayoutCycles';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBand />
        <Services />
        <Features />
        <WhoWeAre />
        <HowItWorks />
        <PayoutCycles />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
