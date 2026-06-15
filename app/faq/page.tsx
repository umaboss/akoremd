import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import PageHero from '@/components/PageHero';
import FaqPageContent from '@/components/FaqPageContent';

export const metadata: Metadata = {
  title: 'FAQ — AkoreMD',
  description:
    'Frequently asked questions about AkoreMD medical billing services, pricing, HIPAA compliance, software integrations, and onboarding.',
};

export default function FaqPage() {
  return (
    <>
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
