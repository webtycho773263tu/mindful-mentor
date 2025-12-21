import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Users, 
  TrendingUp, 
  Award, 
  Briefcase, 
  Globe, 
  Headphones,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Target,
  BookOpen
} from "lucide-react";

const PartnerProgram = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Revenue Sharing",
      description: "Earn competitive commissions on every successful counselling session and assessment sold through your network."
    },
    {
      icon: BookOpen,
      title: "Training & Certification",
      description: "Get certified through our ICCC program and access continuous professional development resources."
    },
    {
      icon: Globe,
      title: "Pan-India Network",
      description: "Join India's largest career counselling network with presence across 500+ cities."
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Get 24/7 partner support, marketing materials, and a dedicated relationship manager."
    },
    {
      icon: Award,
      title: "Brand Association",
      description: "Leverage Mindler's trusted brand and credibility to grow your counselling practice."
    },
    {
      icon: Zap,
      title: "Tech Platform Access",
      description: "Use our AI-powered assessment tools, counselling dashboard, and student management system."
    }
  ];

  const partnerTypes = [
    {
      title: "Individual Counsellors",
      description: "Psychologists, educators, and career guidance professionals looking to expand their practice.",
      features: ["Flexible working hours", "Work from anywhere", "Performance incentives", "Certification support"],
      icon: Users
    },
    {
      title: "Educational Institutions",
      description: "Schools, colleges, and coaching centers wanting to offer career counselling to students.",
      features: ["White-label solutions", "Bulk pricing", "Campus placement support", "Custom programs"],
      icon: Briefcase
    },
    {
      title: "Corporate Partners",
      description: "HR consultancies and corporate trainers looking to add career services to their portfolio.",
      features: ["Enterprise solutions", "Employee counselling", "Leadership coaching", "Talent assessment"],
      icon: Target
    }
  ];

  const successMetrics = [
    { value: "500+", label: "Active Partners" },
    { value: "50+", label: "Cities Covered" },
    { value: "₹2Cr+", label: "Partner Earnings" },
    { value: "95%", label: "Partner Satisfaction" }
  ];

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Career Counsellor, Mumbai",
      quote: "Partnering with Mindler transformed my career counselling practice. The tools and support are exceptional.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "School Counsellor, Bangalore",
      quote: "The ICCC certification and Mindler partnership opened new doors for my school's career guidance program.",
      rating: 5
    },
    {
      name: "Anita Desai",
      role: "HR Consultant, Delhi",
      quote: "Adding Mindler's career services to our HR consultancy was the best business decision we made.",
      rating: 5
    }
  ];

  const steps = [
    { step: "01", title: "Apply Online", description: "Fill out the partnership application form with your details and experience." },
    { step: "02", title: "Screening & Interview", description: "Our team reviews your application and conducts a brief interview." },
    { step: "03", title: "Training & Onboarding", description: "Complete our partner training program and get certified." },
    { step: "04", title: "Start Earning", description: "Begin offering Mindler services and earn competitive commissions." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Partner With Mindler
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Join India's Largest 
              <span className="text-primary"> Career Counselling Network</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with Mindler to expand your counselling practice, access cutting-edge tools, 
              and help students across India discover their ideal careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Become a Partner
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{metric.value}</div>
                <div className="text-primary-foreground/80">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Who Can Partner With Us?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We welcome professionals and institutions passionate about shaping student careers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <type.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{type.title}</h3>
                  <p className="text-muted-foreground mb-6">{type.description}</p>
                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Partner Benefits
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to build a successful career counselling practice
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-background p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How to Become a Partner
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Simple 4-step process to join our partner network
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 translate-x-1/2">
                    <ArrowRight className="h-6 w-6 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Partners Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from professionals who have transformed their careers with Mindler
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Careers?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join 500+ professionals who are already helping students discover their ideal careers with Mindler.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnerProgram;
