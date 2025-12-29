import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Briefcase, 
  GraduationCap, 
  Target, 
  TrendingUp, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight,
  Building2,
  Globe,
  BookOpen,
  Lightbulb
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Graduates = () => {
  const services = [
    {
      icon: Target,
      title: "Career Assessment",
      description: "Comprehensive psychometric tests to identify your strengths, interests, and ideal career paths based on your unique profile.",
    },
    {
      icon: Briefcase,
      title: "Job Placement Support",
      description: "Resume building, interview preparation, and direct connections with top recruiters across industries.",
    },
    {
      icon: GraduationCap,
      title: "Higher Education Guidance",
      description: "Expert advice on master's programs, MBA, and specialized certifications to advance your career.",
    },
    {
      icon: TrendingUp,
      title: "Career Transition",
      description: "Strategic guidance for professionals looking to switch careers or industries with confidence.",
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Explore international career paths, work visas, and overseas education opportunities.",
    },
    {
      icon: Lightbulb,
      title: "Skill Development",
      description: "Identify skill gaps and get personalized recommendations for upskilling and professional growth.",
    },
  ];

  const stats = [
    { number: "50,000+", label: "Graduates Counselled" },
    { number: "85%", label: "Placement Success Rate" },
    { number: "500+", label: "Partner Companies" },
    { number: "40+", label: "Countries Covered" },
  ];

  const industries = [
    "Technology & IT",
    "Finance & Banking",
    "Healthcare",
    "Consulting",
    "Marketing & Sales",
    "Engineering",
    "Education",
    "Media & Entertainment",
  ];

  const process = [
    {
      step: "01",
      title: "Career Assessment",
      description: "Take our comprehensive psychometric tests to understand your personality, interests, and aptitude.",
    },
    {
      step: "02",
      title: "One-on-One Counselling",
      description: "Meet with a certified career counsellor to discuss your aspirations and explore suitable career paths.",
    },
    {
      step: "03",
      title: "Career Roadmap",
      description: "Receive a personalized action plan with clear steps to achieve your career goals.",
    },
    {
      step: "04",
      title: "Placement Support",
      description: "Get ongoing support with job applications, interviews, and negotiations until you land your dream role.",
    },
  ];

  const faqs = [
    {
      question: "Who is this program designed for?",
      answer: "This program is designed for fresh graduates, final year students, and early-career professionals (0-5 years experience) who want clarity on their career path, job placement support, or guidance for higher education.",
    },
    {
      question: "How is this different from campus placement?",
      answer: "Unlike campus placements that focus only on available openings, we provide comprehensive career guidance including personality assessment, industry insights, skill gap analysis, and personalized job matching based on your unique profile and aspirations.",
    },
    {
      question: "What industries do you cover?",
      answer: "We cover all major industries including Technology, Finance, Healthcare, Consulting, Marketing, Engineering, Education, and more. Our network includes 500+ partner companies across 40+ countries.",
    },
    {
      question: "How long does the counselling process take?",
      answer: "The initial assessment and counselling typically takes 2-3 sessions over 1-2 weeks. Placement support is ongoing until you secure your desired position, which usually takes 2-4 months depending on market conditions.",
    },
    {
      question: "Do you help with higher education applications?",
      answer: "Yes! We provide comprehensive support for higher education including program selection, university shortlisting, application assistance, SOP/essay reviews, and interview preparation for MBA, MS, and other graduate programs.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      quote: "Mindler helped me transition from a confused graduate to a confident professional. Their guidance was instrumental in landing my dream job at Google.",
    },
    {
      name: "Rahul Verma",
      role: "Management Consultant at McKinsey",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      quote: "The career assessment revealed strengths I never knew I had. The counsellors guided me perfectly through my MBA applications and consulting interviews.",
    },
    {
      name: "Ananya Krishnan",
      role: "Data Scientist at Amazon",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      quote: "I was stuck in the wrong career for 2 years. Mindler helped me identify my true calling and successfully switch to data science.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              For Graduates & Young Professionals
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Launch Your Career with{" "}
              <span className="text-primary">Expert Guidance</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Navigate the competitive job market with confidence. Get personalized career counselling, 
              job placement support, and higher education guidance from industry experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Talk to a Counsellor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Career Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build a successful career, from self-discovery to job placement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Opportunities Across <span className="text-primary">All Industries</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our extensive network spans across all major industries, giving you access to 
                opportunities that match your skills and aspirations.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{industry}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex items-center gap-4">
                <Building2 className="w-12 h-12 text-primary" />
                <div>
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-muted-foreground">Partner Companies</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop" 
                  alt="Team collaboration"
                  className="rounded-2xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop" 
                  alt="Professional meeting"
                  className="rounded-2xl shadow-lg mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop" 
                  alt="Office workspace"
                  className="rounded-2xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop" 
                  alt="Business presentation"
                  className="rounded-2xl shadow-lg mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Journey to Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach to help you achieve your career goals
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Higher Education Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=500&fit=crop" 
                alt="University campus"
                className="rounded-2xl shadow-xl"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                Higher Education Guidance
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Pursue Your <span className="text-primary">Dream Degree</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're considering an MBA, MS, or specialized certification, 
                we guide you through every step of the application process.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Program selection based on career goals",
                  "University shortlisting and ranking analysis",
                  "SOP and essay review",
                  "Interview preparation",
                  "Scholarship guidance",
                  "Visa and admission support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button size="lg">
                Explore Programs <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from graduates who transformed their careers with our guidance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about our graduate career counselling
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-background rounded-xl px-6 border border-border/50"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Launch Your Career?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join 50,000+ graduates who have achieved their career goals with our expert guidance. 
              Book a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Graduates;
