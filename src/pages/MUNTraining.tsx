import { useState } from 'react';
import { FiGlobe, FiSearch, FiFileText, FiMessageSquare, FiMic, FiUser, FiUsers, FiAward, FiPlay, FiChevronDown, FiChevronUp, FiPhone, FiMail, FiArrowRight } from 'react-icons/fi';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const trainingAreas = [
  {
    icon: FiGlobe,
    title: 'MUN Fundamentals',
    description: 'A comprehensive overview of the United Nations - its aims, objectives, components and functions to acquaint students with the fundamentals of the MUN.',
  },
  {
    icon: FiSearch,
    title: 'Research',
    description: 'Expert guidance on the art of constructive research - knowing where to look, filtering out relevant information and organizing it into clear, logical and compelling arguments.',
  },
  {
    icon: FiFileText,
    title: 'Resolution Drafting',
    description: 'Rigorous training on the science of building UN legal documents, with a focus on structuring, writing and editing effective clauses, position papers, resolutions, and amendments.',
  },
  {
    icon: FiMessageSquare,
    title: 'Debate and Delegation',
    description: "Strategic guidance to build and perfect delegates' debating skills, covering effective debating techniques, debate direction, argument defense, interjections and diplomacy.",
  },
  {
    icon: FiMic,
    title: 'Speech Writing and Public Speaking',
    description: 'Thorough grounding in one of the most essential aspects of MUNs - speech writing and delivery, with an emphasis on tonality, body language, content presentation and improvisation.',
  },
  {
    icon: FiUser,
    title: 'Self-Presentation',
    description: 'Expert recommendations on dressing, grooming and personality building, to ensure that delegates make the right impression as suitable country representatives at the UN.',
  },
  {
    icon: FiUsers,
    title: 'Debate Conduct',
    description: 'Fostering of leadership skills and teamwork through training on using Rules of Procedure in advances, addressing fellow delegates, and appropriate debate conduct.',
  },
  {
    icon: FiAward,
    title: 'Chairing',
    description: 'Extensive grooming to help committee chairs master their roles - conducting debates, steering and moderating committees, choosing awards and developing the committee charter.',
  },
  {
    icon: FiPlay,
    title: 'Mock MUNs',
    description: 'Mock MUN simulations and drills to get hands-on experience of the MUN setup, along with real-time guidance and precise feedback to translate training into tangible learning.',
  },
];

const faqs = [
  {
    question: 'What is MUN?',
    answer: 'Model United Nations, or MUN, is essentially a simulation of a United Nations conference. It helps students learn about diplomacy, international relations, the United Nations and peaceful conflict resolution, as they represent different countries from across the world. The primary objective of all student delegates is to research on, draft, lobby for, debate and ultimately pass a UN resolution for a topic area (usually a real-world issue) within their committee.',
  },
  {
    question: 'Is the program offline or online?',
    answer: 'The group program at schools is offline. We conduct online programs for individual students who reside outside of Delhi NCR.',
  },
  {
    question: 'How will the Mindler MUN Training program help students?',
    answer: 'The program is designed to acquaint students with all aspects of MUNs, and will cover each element – research, presentation, interjection, documentation and mock simulation in great detail.',
  },
  {
    question: 'Can a student access the program independently?',
    answer: "A MUN conference, though slightly individualistic, is a team activity. Hence it's best to undergo MUN training in a team setting. A significant portion of the training will involve understanding, responding and acting in a group setting, and for that reason the MUN training program, at the moment, is available only for schools.",
  },
  {
    question: 'Is the program open to students from all classes?',
    answer: 'The program is open to all students from Classes 7 through 12.',
  },
  {
    question: 'How long is the training program?',
    answer: 'The training program can vary from 4 hours to 6 hours for a standard session.',
  },
];

const schools = [
  'Delhi Public School',
  'The Shri Ram School',
  'Vasant Valley School',
  'Modern School',
  'Springdales School',
  'Amity International',
];

const MUNTraining = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    students: '50-100',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        {/* Yellow accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-warning" />
        
        <div className="relative bg-gradient-to-br from-secondary via-background to-muted min-h-[500px] flex items-center">
          {/* Country signs decoration */}
          <div className="absolute left-8 top-1/4 hidden lg:block">
            <div className="space-y-4">
              {['EGYPT', 'SYRIA', 'CHILE', 'CONGO', 'PERU'].map((country, i) => (
                <div
                  key={country}
                  className="bg-card border border-border px-4 py-2 rounded shadow-sm text-sm font-semibold text-foreground transform"
                  style={{ marginLeft: `${i * 20}px`, transform: `rotate(${(i - 2) * 5}deg)` }}
                >
                  {country}
                </div>
              ))}
            </div>
          </div>

          {/* Speaker illustration placeholder */}
          <div className="absolute right-0 top-20 hidden lg:block">
            <div className="w-80 h-96 flex items-end justify-center">
              <div className="relative">
                {/* UN Podium */}
                <div className="w-32 h-40 bg-info rounded-t-lg flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-4 border-primary-foreground/30 flex items-center justify-center">
                    <FiGlobe className="w-8 h-8 text-primary-foreground/50" />
                  </div>
                </div>
                {/* Microphone */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <div className="w-1 h-12 bg-foreground/30" />
                  <div className="w-4 h-4 bg-foreground/50 rounded-full -ml-1.5" />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
            <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
              <p className="text-accent font-semibold mb-4">MUN Training</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Guide and Inspire the next generation of{' '}
                <span className="text-highlight">MUN Leaders</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Expert-led MUN Training Program for Schools
              </p>
              <Button variant="accent" size="lg" className="group">
                Learn More
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Sticky Nav */}
        <div className="sticky top-16 z-40 bg-card border-b border-border shadow-sm">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-center gap-8 py-4 overflow-x-auto">
              {['About the Program', 'Gallery', 'FAQs', 'Contact Us'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                  className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors whitespace-nowrap"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-the-program" className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="section-heading mb-6">About MUN Training Program</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Model United Nations (MUN) conferences have become a significant part of the co-curricular world at schools and colleges today. An activity driven by extensive knowledge and preparation, MUNs sit at the intersection of professional skills, communication skills and global know-how. With our dedicated MUN training program, students can develop all the skills they need to excel in this domain.
            </p>
          </div>

          <p className="text-center text-muted-foreground mb-12">
            The Mindler MUN Training Program trains students in the following areas:
          </p>

          {/* Training Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingAreas.map((area, index) => (
              <div
                key={area.title}
                className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <area.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="text-center text-xl font-semibold text-foreground mb-8">Schools We Work With</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {schools.map((school) => (
              <div
                key={school}
                className="px-6 py-3 bg-card rounded-lg border border-border text-sm font-medium text-muted-foreground"
              >
                {school}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">and many more...</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="section-heading text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground hover:bg-muted/70 transition-colors cursor-pointer"
              >
                <span className="text-4xl">📸</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="section-heading text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-foreground">{faq.question}</span>
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

      {/* Contact Section */}
      <section id="contact-us" className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to develop MUN leaders at your school?
              </h2>
              <p className="text-primary-foreground/80">
                Fill out the form below and we will get in touch with you.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-12 px-4 rounded-lg bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-12 px-4 rounded-lg bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-12 px-4 rounded-lg bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="text"
                  placeholder="School Name"
                  value={formData.school}
                  onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                  className="w-full h-12 px-4 rounded-lg bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <select
                  value={formData.students}
                  onChange={(e) => setFormData({ ...formData, students: e.target.value })}
                  className="w-full h-12 px-4 rounded-lg bg-primary-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="50-100">50-100 Students</option>
                  <option value="100-250">100-250 Students</option>
                  <option value="250-500">250-500 Students</option>
                  <option value="500-1000">500-1000 Students</option>
                  <option value="1000+">1000+ Students</option>
                </select>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Submit
                </Button>
              </form>

              {/* Contact Info */}
              <div className="flex flex-col items-center justify-center text-center lg:text-left lg:items-start">
                <p className="text-primary-foreground/80 mb-4">Need to speak to us now?</p>
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                  Call us at +91 87449 87449
                </h3>
                <p className="text-primary-foreground/70 mb-6">Monday - Friday, 10 am - 7 pm</p>
                <div className="flex gap-4">
                  <a
                    href="tel:+918744987449"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                  >
                    <FiPhone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="mailto:hello@mindler.com"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                  >
                    <FiMail className="w-5 h-5" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MUNTraining;
