import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Features />
      <HowItWorks />
      <Newsletter />
    </div>
  );
}