import FinalCTA from '@/components/FinalCTA';
import PageHero from '@/components/PageHero';
import FeaturesPageContent from '@/components/FeaturesPageContent';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata('features');

export default function FeaturesPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="WHY CHOOSE US"
          title={
            <>
              Why Choose <span className="gt">AkoreMD.</span>
            </>
          }
          subtitle="We are committed to delivering measurable results while maintaining the highest standards of professionalism and compliance."
        />
        <FeaturesPageContent />
      </main>
      <FinalCTA />
    </>
  );
}
