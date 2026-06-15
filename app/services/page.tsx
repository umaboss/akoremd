import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import PageHero from '@/components/PageHero';
import FullServicesContent from '@/components/FullServicesContent';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata('services');

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
