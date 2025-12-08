import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { FiArrowRight, FiCheck, FiPlay, FiBookOpen, FiUsers, FiBriefcase, FiMonitor } from 'react-icons/fi';

const highlights = [
  {
    icon: FiBookOpen,
    title: 'Stream Selection',
    description: 'Humanities, Science or Commerce - pick the right stream for you based on your interests & aptitude',
  },
  {
    icon: FiMonitor,
    title: 'Career Options',
    description: 'Learn in detail about all the career options available for your chosen stream and subject combinations',
  },
  {
    icon: FiUsers,
    title: 'Profile Building',
    description: 'Build a holistic profile aligned to your career interests & ambitions with guidance from expert coaches',
  },
  {
    icon: FiBriefcase,
    title: 'Virtual Internships',
    description: 'Deep dive into your preferred career domains through virtual career simulations & internships',
  },
];

const pricingPlans = [
  {
    name: 'Preview',
    price: 'Free',
    badge: 'Try Free',
    description: 'Take the first of the 4-part assessment and speak to experts to start your stream planning journey.',
    features: [
      'Orientation Style Assessment',
      'Orientation Call',
      'Career Library Access',
      'Career Blog & Newsletter',
    ],
    cta: 'Take Free Demo',
    variant: 'outline' as const,
    popular: false,
  },
  {
    name: 'Learn',
    price: '₹2,400',
    badge: 'Basic',
    description: 'Comprehensive stream assessment to help you find your perfect stream.',
    features: [
      '4-Dimensional Assessment',
      'Top 2 Stream Recommendations',
      '25-Page Stream Report',
      'Career Library Access',
      'Career Blog & Newsletter',
      'Stream & Subject Selection',
    ],
    cta: 'Buy Now',
    variant: 'accent' as const,
    popular: false,
  },
  {
    name: 'Explore',
    price: '₹11,400',
    badge: 'Recommended',
    description: 'Expert guidance and assessment to choose your stream & subject combinations.',
    features: [
      '4-Dimensional Assessment',
      'Top 2 Stream Recommendations',
      '25-Page Stream Report',
      'Career Library Access',
      '3 Counselling Sessions',
      'Stream & Subject Selection',
      'Career Path Planning',
      'Online Query Support',
    ],
    cta: 'Buy Now',
    variant: 'hero' as const,
    popular: true,
  },
];

const processSteps = [
  {
    title: 'Advanced Assessment & Best-Fit Matches',
    description: 'Learn about your strengths and interests with our 4-dimensional assessment and 25-page stream report.',
    cta: 'Take Free Demo',
    image: '📊',
    reverse: false,
  },
  {
    title: 'Interactive Career & Stream Activities',
    description: 'Evaluate your academics, work style, aptitude and subject compatibility to identify your perfect stream.',
    cta: 'Schedule a Call Back',
    image: '🎯',
    reverse: true,
  },
  {
    title: 'Simulated Virtual Career Internships',
    description: 'Explore multiple career options through role play, simulations and experiential videos with our Virtual Internship Program.',
    cta: 'View Program Details',
    image: '💼',
    reverse: false,
  },
  {
    title: 'Personalised Guidance from Experts',
    description: 'Finalise your stream and subjects and build a customised career plan with help from our career experts.',
    cta: 'About Our Team',
    image: '👨‍🏫',
    reverse: true,
  },
];

const Class89 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-info/5 via-background to-accent/5" />
          <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-info/20 to-transparent" />
          
          {/* Decorative shapes */}
          <div className="absolute top-40 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-info/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Career Counselling Programs
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
                  Class <span className="text-highlight">8-9</span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
                  Stream & Subject Selection
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                  Get ahead of the curve and build a solid foundation for your career with the right stream and subject choices.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Button variant="hero" size="xl" className="group">
                    Get Started
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="xl" className="group">
                    <FiPlay className="w-5 h-5" />
                    Take Free Demo
                  </Button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start text-sm text-muted-foreground">
                  {['Career & Subject Assessment', 'Personalised Guidance', 'Profile Building', 'Virtual Internships', 'Subject & Career Mapping'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-muted rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hero Illustration */}
              <div className="relative hidden lg:block">
                <div className="relative w-full aspect-square max-w-lg mx-auto">
                  {/* Boat illustration placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-info/30 to-teal/20 rounded-3xl" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-info/40 rounded-b-3xl" />
                  
                  {/* Student character */}
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-8xl">
                    🚣
                  </div>
                  
                  {/* Mountain goal */}
                  <div className="absolute top-8 right-8 text-6xl">
                    ⛰️🚩
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="text-center text-primary-foreground animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-foreground/10 mb-4">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <p className="text-sm leading-relaxed opacity-90">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-heading mb-4">How it Works</h2>
              <p className="text-lg text-muted-foreground">
                A step-by-step approach to help you select the perfect stream and subjects
              </p>
            </div>

            <div className="space-y-20">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className={`flex flex-col ${step.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
                >
                  {/* Content */}
                  <div className="flex-1 animate-fade-in">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{step.description}</p>
                    <Button variant="accent-outline" className="group">
                      {step.cta}
                      <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Visual */}
                  <div className="flex-1 w-full max-w-md">
                    <div className="bg-card rounded-2xl shadow-xl border border-border p-8 text-center">
                      <div className="text-8xl mb-4">{step.image}</div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-full animate-pulse"
                          style={{ width: `${70 + index * 10}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-heading mb-4">Choose Your Plan</h2>
              <p className="text-lg text-muted-foreground">
                Select the program that best fits your needs and budget
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative bg-card rounded-2xl p-6 lg:p-8 border ${
                    plan.popular ? 'border-accent shadow-xl scale-105' : 'border-border shadow-sm'
                  } transition-all duration-300 hover:shadow-lg animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full mb-3">
                      {plan.badge}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-foreground mb-2">{plan.price}</div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
                          <FiCheck className="w-3 h-3 text-success" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant={plan.variant} className="w-full">
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to discover your perfect stream?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Take the first step towards a successful career. Start with our free Orientation Style assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" className="group">
                  Take Free Demo
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="hero-outline" size="xl">
                  Talk to Expert
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Class89;
