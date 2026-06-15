import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import PageHero from '@/components/PageHero';
import FaqPageContent from '@/components/FaqPageContent';
import FaqJsonLd from '@/components/seo/FaqJsonLd';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata('faq');

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd />
      <Nav />
      <main>
        <PageHero
          eyebrow="FAQ"
          title={
            <>
              Frequently Asked <span className="gt">Questions.</span>
            </>
          }
          subtitle="Straight answers about AkoreMD billing services, pricing, onboarding, and how we support your practice."
        />
        <FaqPageContent />
      </main>
      <FinalCTA />
      <Footer />
    </>
  );
}
