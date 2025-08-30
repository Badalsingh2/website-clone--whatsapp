import React from 'react';

const processSteps = [
  {
    number: '01',
    title: 'Brief',
    description: 'Share your vision, goals, and requirements with our team',
  },
  {
    number: '02',
    title: 'Build',
    description: 'We design and develop your conversion-focused website',
  },
  {
    number: '03',
    title: 'Launch',
    description: 'Review, approve, and launch your new website',
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-primary">How It Works</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Our streamlined process ensures you get a high-quality, conversion-optimized website in just 72 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto">
                {step.number}
              </div>
              <h3 className="text-2xl font-medium mb-4 text-primary">{step.title}</h3>
              <p className="text-base text-text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;