import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import PageHero from '@/components/PageHero';
import FeaturesPageContent from '@/components/FeaturesPageContent';

export const metadata: Metadata = {
  title: 'Features — AkoreMD',
  description:
    'Why healthcare providers choose AkoreMD — dedicated RCM specialists, accurate billing, faster claims, denial management, and HIPAA-compliant support.',
};

export default function FeaturesPage() {
  return (
    <>
      <Nav />
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
      <Footer />
    </>
  );
}
