import { ArrowRight, Star } from "lucide-react";
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="bg-[#1a1c1b] pt-[120px] pb-[80px]"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 
            className="font-display font-bold text-primary mb-6 text-[96px] leading-[1.1] text-balance"
          >
            GET A HIGH-CONVERTING WEBSITE — DELIVERED IN 72 HOURS
          </h1>
          <p 
            className="text-2xl text-text-secondary mb-12 max-w-2xl"
          >
            Professional websites that convert visitors into customers. No waiting months. No endless revisions. Just results.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
            <Link
              href="#our-work"
              className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 px-8 py-4 text-base"
            >
              OUR WORK
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#testimonials"
              className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-primary text-primary shadow hover:bg-primary hover:text-primary-foreground px-8 py-4 text-base"
            >
              TESTIMONIALS
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 fill-primary text-primary" />
              <span className="text-sm font-medium text-gray-400">150+ HAPPY CLIENTS</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600" />
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-400">72-HOUR GUARANTEE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;