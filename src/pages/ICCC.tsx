import { useState } from 'react';
import { FiArrowRight, FiBookmark, FiClock, FiCheck, FiChevronDown, FiChevronUp, FiMail, FiPhone, FiUser, FiStar } from 'react-icons/fi';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const certificationLevels = [
  {
    level: 'Level 1',
    name: 'ICCC Foundation',
    credits: '15 credits',
    duration: '2 Days (Virtual Conference)',
    price: 'Free (entry by application)',
    description: 'A 2-day online program that gives you a sneak peek into the profession of Career Counselling & Guidance, the opportunities in this space, and an overview of the Advanced curriculum.',
    color: 'border-accent',
    bgColor: 'bg-accent/10',
    icon: '🎯',
  },
  {
    level: 'Level 2',
    name: 'ICCC Advanced',
    credits: '65 credits',
    duration: '3 Months (Online)',
    price: 'INR 24,500 (inclusive of taxes)',
    description: 'A 3-month comprehensive program that couples theoretical knowledge with real-world insights in Career Counselling & Guidance to enhance your skill-sets in this domain.',
    color: 'border-info',
    bgColor: 'bg-info/10',
    icon: '📚',
  },
  {
    level: 'Level 3',
    name: 'ICCC Master',
    credits: '50 credits',
    duration: '3 Months (Online)',
    price: 'INR 19,500 (inclusive of taxes)',
    description: 'A 3-months program that includes global perspectives and leads to a certification from the prestigious National Career Development Association (NCDA), USA.',
    color: 'border-success',
    bgColor: 'bg-success/10',
    icon: '🏆',
  },
];

const trainers = [
  {
    name: 'Dr. David Reile',
    title: 'Past President – NCDA, USA',
    credentials: ['30+ years in Career Counselling', 'Ph.D. in Counselling Psychology', 'Executive Coach – CDA, USA'],
  },
  {
    name: 'Prof. Dr. N.K. Chadha',
    title: 'Senior Consultant at UNDP',
    credentials: ['President – Asia Pacific Career Development Association', '35+ years in Psychometrics', 'Ex-HOD, Psychology, University of Delhi'],
  },
  {
    name: 'Peter Reding',
    title: 'Co-Founder, Coach for Life',
    credentials: ['Partner, International Coaching Federation', 'Chairman, Independent Ethics Review Board for ICF', 'MCC, MBA from Pepperdine'],
  },
  {
    name: 'Prikshit Dhanda',
    title: 'Director & CSO at Mindler',
    credentials: ['Harvard University Trained', 'Certified MBTI & FIRO-B Practitioner', 'Mentored 1.5 million+ students'],
  },
  {
    name: 'Dr. Barbara Suddharth',
    title: 'Executive Director – CDA, USA',
    credentials: ['25+ years in Career Counselling', 'Certified Master Trainer', 'Ph.D. in Counselling Psychology'],
  },
  {
    name: 'Prateek Bhargava',
    title: 'Founder & CEO, Mindler',
    credentials: ['Double MBA from ISB & MDI', 'Certified Life & Career Coach', '10+ years in Education Advisory'],
  },
];

const whyEnroll = [
  { icon: '🎯', title: 'Build A Career In Career Counselling', description: 'Attract jobs and target opportunities in the rapidly growing and in-demand field of career counselling.' },
  { icon: '📖', title: 'Gain Mastery Through Practice', description: 'Get hands-on learning through case studies, live projects, assignments and practical exposure.' },
  { icon: '🏫', title: 'Set Up A Holistic Ecosystem', description: 'Create a career guidance setup in your institution with student tracking, rich content, & more.' },
  { icon: '📄', title: 'Enhance Your Resume', description: 'Make your CV stand out through a certification from international career guidance bodies.' },
  { icon: '🎤', title: 'Learn From Industry Leaders', description: 'Benefit from the learning and collective experience of 200+ years of leading industry experts.' },
  { icon: '🚀', title: 'Fulfill Entrepreneurial Aspirations', description: 'Set up your practice with the technological and informational support of an advanced platform.' },
];

const whoEarned = [
  { icon: '👩‍🏫', title: 'School Heads, Teachers and', subtitle: 'Educators' },
  { icon: '🧠', title: 'Counsellors, Psychologists and', subtitle: 'Special Educators' },
  { icon: '💼', title: 'HR Professionals, Life-skills and', subtitle: 'Soft-skills trainers' },
  { icon: '👔', title: 'Engineers, Homemakers and', subtitle: 'Administrators' },
];

const testimonials = [
  {
    name: 'Ms. Ariya R. Nair',
    role: 'Consultant and Career Coach',
    text: 'Pursued something which was on my bucket list for a while! Completed the ICCC Advanced level and I have now been designated as an Internationally Certified Career Coach. A rigorous and much-needed certification program to make a difference.',
  },
  {
    name: 'Natasha Jiwani',
    role: 'Co-Founder & Career Coach - Pathdecoders',
    text: 'The ICCC Advanced Program was an extension to the Foundation Level. Its well-structured and well-organised curriculum gave an edge to my overall skill set. The mentors have immense knowledge and experience.',
  },
  {
    name: 'Hemalatha Elanko',
    role: 'Career Counsellor',
    text: 'The ICCC Advanced program was a well paced and intense learning experience. Every session kept me absorbed and wanting to learn more. The amount of research expected for each assignment was truly phenomenal.',
  },
  {
    name: 'Capt. Jones Alex (Retd)',
    role: 'Indian Navy',
    text: 'ICCC Advanced was a great learning experience. The sessions were very engaging and helpful. Thanks to the Mindler Training Team for meticulously conducting all the sessions and guiding me through the process.',
  },
];

const faqs = [
  { question: 'What is the ICCC Foundation Program?', answer: 'The ICCC Foundation is a 2-day virtual conference that introduces you to the profession of Career Counselling & Guidance. It covers the opportunities in this space and provides an overview of the Advanced curriculum.' },
  { question: 'Is this program suited for people without a background in Career Counselling?', answer: 'Yes! The program is designed for professionals from diverse backgrounds. Whether you are a teacher, HR professional, psychologist, or from any other field, you can benefit from this certification.' },
  { question: 'What are the differences between the 3 levels of the ICCC program?', answer: 'Level 1 (Foundation) is a 2-day introduction. Level 2 (Advanced) is a 3-month comprehensive program with in-depth learning. Level 3 (Master) includes global perspectives and NCDA certification from USA.' },
  { question: 'How do I upgrade to Level 2 and Level 3?', answer: 'After completing each level successfully, you will receive information about upgrading to the next level. Each level builds upon the previous one, providing a structured learning path.' },
  { question: 'Is the course completely online?', answer: 'Yes, the entire ICCC program is conducted online through virtual sessions, making it accessible from anywhere in the world.' },
  { question: 'Will I be eligible to counsel students after obtaining the certification?', answer: 'Yes, upon completing the ICCC certification, you will be equipped with the knowledge and skills to provide career counselling. The certification is recognized internationally.' },
];

const ICCC = () => {
  const [email, setEmail] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/80" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                International Certified Career Coach (ICCC)
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8">
                A 3-level credentialing program with emphasis on global best practices, experiential learning & state-of-the-art tools.
              </p>

              {/* Upcoming Cohort Badge */}
              <div className="inline-flex items-center bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-4 py-3 mb-8 border border-primary-foreground/20">
                <div className="mr-4">
                  <span className="text-xs text-primary-foreground/70">Upcoming Cohorts:</span>
                  <div className="font-semibold">Virtual Conference</div>
                </div>
                <div className="text-accent font-semibold">9 Jan - 10 Jan, 2026</div>
              </div>

              {/* Email Form */}
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mb-8">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 px-4 rounded-lg bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button variant="hero" className="h-12">
                  Register For Free
                </Button>
              </form>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">15 Lac</div>
                    <p className="text-sm text-primary-foreground/70">Career Counsellors needed in India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <span className="text-2xl">🏫</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">99%</div>
                    <p className="text-sm text-primary-foreground/70">Schools don't have Career Counsellors</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="aspect-square bg-primary-foreground/10 rounded-xl flex items-center justify-center">
                        <span className="text-4xl">👤</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-primary-foreground font-semibold">70,000+ Certified Coaches</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credentialing Bodies */}
        <div className="bg-background py-8">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8">
              <span className="text-sm text-muted-foreground font-medium">Credentialing Bodies:</span>
              <div className="flex items-center gap-8">
                <div className="font-bold text-primary text-lg">MINDLER</div>
                <div className="font-bold text-foreground">NCDA</div>
                <div className="text-muted-foreground text-sm">Career Development Alliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Levels */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              3-Level Certification Program in Career Counselling & Guidance
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certificationLevels.map((level, index) => (
              <div
                key={level.name}
                className={`bg-card rounded-2xl border-t-4 ${level.color} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${level.bgColor} flex items-center justify-center text-2xl`}>
                      {level.icon}
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground font-medium">{level.level}</span>
                      <h3 className="font-bold text-foreground">{level.name}</h3>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <FiBookmark className="w-4 h-4 text-accent" />
                      {level.credits}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <FiClock className="w-4 h-4 text-accent" />
                      {level.duration}
                    </div>
                  </div>

                  <div className="text-lg font-bold text-accent mb-4">{level.price}</div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {level.description}
                  </p>

                  <Button variant="outline" className="w-full group">
                    Know More
                    <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="accent" size="lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Master Trainers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Master Trainers Anchoring the Program
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainers.map((trainer, index) => (
              <div
                key={trainer.name}
                className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <FiUser className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{trainer.name}</h4>
                    <p className="text-sm text-accent">{trainer.title}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {trainer.credentials.map((credential, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <FiCheck className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      {credential}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Earned */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Who have earned the ICCC certification?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Selected from a pool of highly talented applicants, over 70,000 educators and professionals from diverse backgrounds have earned the ICCC certification since 2018
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whoEarned.map((item, index) => (
              <div key={item.title} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-20 h-20 mx-auto rounded-full bg-card shadow-md flex items-center justify-center text-4xl mb-4">
                  {item.icon}
                </div>
                <p className="text-sm text-foreground font-medium">{item.title}</p>
                <p className="text-sm text-accent font-semibold">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Enroll */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Enroll in ICCC
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyEnroll.map((item, index) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-3xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="hero" size="lg">
              Register For Free
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Testimonials
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-card rounded-2xl p-6 lg:p-8 border border-border shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar key={star} className="w-5 h-5 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <FiUser className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <FiChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                  ) : (
                    <FiChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Have questions about the ICCC program? We're here to help.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <a href="tel:+918744987449" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <FiPhone className="w-5 h-5" />
                +91 87449 87449
              </a>
              <a href="mailto:iccc@mindler.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <FiMail className="w-5 h-5" />
                iccc@mindler.com
              </a>
            </div>

            <Button variant="hero" size="xl">
              Register For Free
              <FiArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ICCC;
