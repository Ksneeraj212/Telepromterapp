"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const steps = [
  {
    title: 'Sign Up',
    content: 'Create your account in just a few clicks and get instant access to our teleprompter app.',
  },
  {
    title: 'Upload Your Script',
    content: 'Easily upload or type in your script. Our app supports various file formats for your convenience.',
  },
  {
    title: 'Customize Settings',
    content: 'Adjust scroll speed, font size, and other settings to match your presentation style.',
  },
  {
    title: 'Start Presenting',
    content: 'Hit the start button and begin your presentation with confidence, knowing your script is right there with you.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{step.title}</AccordionTrigger>
            <AccordionContent>{step.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default HowItWorks;