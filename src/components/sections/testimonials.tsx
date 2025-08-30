'use client';

import { Star } from 'lucide-react';
import React from 'react';

const Testimonials = () => {
  // Hardcoded data based on the design instructions and screenshot for this specific testimonial
  const currentTestimonial = {
    quote: "Incredible speed and quality. The team understood our vision perfectly and executed flawlessly within the tight deadline.",
    name: "Pravin Mehta",
    title: "CEO, GrowthCo",
  };
  
  // The active slide index for the pagination dots
  const activeIndex = 1; 

  return (
    <section id="testimonials" className="py-24 bg-gray-900/50">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-display text-3xl font-bold text-primary md:text-5xl uppercase">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto font-body text-lg text-text-secondary">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with BuildSumo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-background-navy rounded-xl border border-border p-8 text-center shadow-lg md:p-12">
            <div className="flex justify-center mb-6 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-primary fill-primary" />
              ))}
            </div>
            <blockquote className="mb-8 font-display text-2xl font-medium text-primary">
              &quot;{currentTestimonial.quote}&quot;
            </blockquote>
            <div>
              <div className="mb-1 font-display text-xl font-semibold text-primary">
                {currentTestimonial.name}
              </div>
              <div className="font-body text-sm text-text-secondary">
                {currentTestimonial.title}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(3)].map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary' : 'bg-muted'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;