"use client";

import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Settings, Mic, Cloud, Smartphone } from 'lucide-react';

const features = [
  {
    title: 'Comprehensive Customization',
    description: 'Tailor every aspect of your teleprompter experience to your needs.',
    icon: Settings,
  },
  {
    title: 'Speech Recognition',
    description: 'Advanced voice recognition for seamless script synchronization.',
    icon: Mic,
  },
  {
    title: 'Cloud Integration',
    description: 'Access your scripts from anywhere with secure cloud storage.',
    icon: Cloud,
  },
  {
    title: 'Multi-platform Support',
    description: 'Use on any device - desktop, tablet, or smartphone.',
    icon: Smartphone,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <feature.icon className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;