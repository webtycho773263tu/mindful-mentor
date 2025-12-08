import { FiArrowRight, FiMail } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const CTASection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
  };

  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Discover Your Perfect Career?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Take the first step towards your dream career. Enter your email to take the Orientation Style test for free.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
            <div className="flex-1 relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-14 pl-12 pr-4 rounded-xl bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <Button type="submit" variant="hero" size="xl" className="group">
              Get Started
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-success">✓</span>
              Free Assessment
            </div>
            <div className="flex items-center gap-2">
              <span className="text-success">✓</span>
              No Credit Card Required
            </div>
            <div className="flex items-center gap-2">
              <span className="text-success">✓</span>
              Instant Results
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
