"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-5xl font-bold text-primary mb-8 leading-[1.2]">
            Ready to Get Started?
          </h2>
          <p className="font-body text-lg text-text-secondary mb-12 max-w-3xl mx-auto">
            Join 150+ businesses that have transformed their online presence
            with BuildSumo. Get your high-converting website delivered in just
            72 hours.
          </p>
          <Button asChild size="lg" className="text-lg px-12 py-7 h-auto rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
            <Link href="#">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;