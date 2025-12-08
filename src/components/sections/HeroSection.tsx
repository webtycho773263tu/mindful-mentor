import { FiArrowRight, FiPlay } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-muted" />
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              AI-Powered Career Guidance
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
              Discover Your{' '}
              <span className="text-highlight">Perfect Career</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Make smart decisions with our revolutionary AI-enabled career guidance tools and expert career counsellors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button variant="hero" size="xl" className="group">
                Get Started
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="group">
                <FiPlay className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {['Career Assessment', 'Personalised Guidance', 'Profile Building', 'Virtual Internships', 'College Roadmap'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative z-10">
              {/* Main Card */}
              <div className="bg-card rounded-2xl shadow-xl p-6 md:p-8 border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Career Match Score</h3>
                    <p className="text-sm text-muted-foreground">Based on 56 parameters</p>
                  </div>
                </div>
                
                {/* Sample careers */}
                <div className="space-y-4">
                  {[
                    { career: 'Data Scientist', match: 94, color: 'bg-success' },
                    { career: 'UX Designer', match: 87, color: 'bg-accent' },
                    { career: 'Product Manager', match: 82, color: 'bg-info' },
                  ].map((item) => (
                    <div key={item.career} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-foreground">{item.career}</span>
                        <span className="text-accent font-semibold">{item.match}% Match</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${item.match}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-lg animate-bounce-subtle">
                <span className="font-bold">3M+</span>
                <span className="text-sm ml-1">Students</span>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card border border-border px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                  <span className="text-success">✓</span>
                </div>
                <span className="text-sm font-medium text-foreground">Expert Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
