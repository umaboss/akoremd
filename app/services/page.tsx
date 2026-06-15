import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import PageHero from '@/components/PageHero';
import FullServicesContent from '@/components/FullServicesContent';

export const metadata: Metadata = {
  title: 'Services — AkoreMD',
  description:
    'Complete medical billing services — scheduling, eligibility, coding, claims, payment posting, denial management, AR follow-up, credentialing, and more.',
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="OUR SERVICES"
          title={
            <>
              Our Complete <span className="gt">Services.</span>
            </>
          }
          subtitle="Full-service medical billing and revenue cycle support — from front office through credentialing, denial management, and patient billing."
        />
        <FullServicesContent />
      </main>
      <FinalCTA />
      <Footer />
    </>
  );
}
