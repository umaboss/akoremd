import FinalCTA from '@/components/FinalCTA';
import PageHero from '@/components/PageHero';
import HowItWorksPageContent from '@/components/HowItWorksPageContent';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata('howItWorks');

export default function HowItWorksPage() {
  return (
    <>
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
    </>
  );
}
