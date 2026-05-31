import React from 'react';
import Hero from './Hero';
import Features from './Features';
import ScrollReveal from '../ScrollReveal';

export default function About() {
  return (
    <>
      <ScrollReveal delay={100}>
        <Hero />
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <Features />
      </ScrollReveal>
    </>
  );
}