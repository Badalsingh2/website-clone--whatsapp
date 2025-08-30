import Image from 'next/image';

const portfolioItems = [
  {
    title: "E-commerce Platform",
    metric: "67% increase in conversions",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/17fd381e-95d8-4ecf-a9c7-91224d5f0c92-site-in-72hrs-preview-emergentagent-com/assets/images/2tj0wvq6_test1-1.jpg",
    alt: "E-commerce Platform screenshot",
  },
  {
    title: "SaaS Landing Page",
    metric: "85% more sign-ups",
    imageSrc: "https://customer-assets.emergentagent.com/job_d85d0b89-6850-4c3f-bd34-c3a22543f602/artifacts/z65tzel9_test2.jpg",
    alt: "SaaS Landing Page screenshot",
  },
  {
    title: "Travel Website",
    metric: "72% booking increase",
    imageSrc: "https://customer-assets.emergentagent.com/job_d85d0b89-6850-4c3f-bd34-c3a22543f602/artifacts/19l1d0uv_test3.jpg",
    alt: "Travel Website screenshot",
  },
  {
    title: "Food Delivery App",
    metric: "54% more orders",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/17fd381e-95d8-4ecf-a9c7-91224d5f0c92-site-in-72hrs-preview-emergentagent-com/assets/images/415grl4m_test4-4.jpg",
    alt: "Food Delivery App screenshot",
  },
];

const PortfolioCard = ({ title, metric, imageSrc, alt }: typeof portfolioItems[0]) => (
  <div className="group overflow-hidden rounded-xl border border-border bg-background-navy shadow-md transition-all duration-500 hover:scale-105 hover:border-primary/50">
    <div className="relative overflow-hidden">
      <Image
        src={imageSrc}
        alt={alt}
        width={588}
        height={256}
        className="h-64 w-full bg-gray-900 object-contain transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="font-display text-2xl font-medium text-primary mb-2">{title}</h3>
        <div className="inline-block rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
          {metric}
        </div>
      </div>
    </div>
  </div>
);

const PortfolioSection = () => {
  return (
    <section id="our-work" className="bg-gray-900/50 py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-display text-5xl font-bold text-primary">Our Work</h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            See how we've helped businesses like yours achieve remarkable results with conversion-focused websites.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;