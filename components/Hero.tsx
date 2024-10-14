"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import GetStartedModal from './GetStartedModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Professional Teleprompter at Your Fingertips
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        Elevate your presentations with our cutting-edge teleprompter application. Seamless, intuitive, and powerful.
      </p>
      <Button size="lg" className="text-lg px-8 py-6" onClick={() => setIsModalOpen(true)}>
        Get Started <ArrowRight className="ml-2" />
      </Button>
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;