import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import PageHero from '@/components/PageHero';
import HowItWorksPageContent from '@/components/HowItWorksPageContent';

export const metadata: Metadata = {
  title: 'How It Works — AkoreMD',
  description:
    'Learn how AkoreMD manages your full revenue cycle — onboarding, coding, claims, payment posting, denial management, and technology integrations.',
};

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="HOW IT WORKS"
          title={
            <>
              How It <span className="gt">Works.</span>
            </>
          }
          subtitle="From onboarding through collections, AkoreMD manages every stage of your revenue cycle with measurable processes and transparent reporting."
        />
        <HowItWorksPageContent />
      </main>
      <FinalCTA />
      <Footer />
    </>
  );
}
