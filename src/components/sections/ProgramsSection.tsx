import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

const tabs = [
  { id: 'students', label: 'For Students', icon: '🎓' },
  { id: 'institutions', label: 'For Institutions', icon: '🏫' },
  { id: 'professionals', label: 'For Professionals', icon: '👨‍💼' },
];

const programs = {
  students: [
    {
      title: 'Class 8-9',
      subtitle: 'Stream & Subject Selection',
      description: 'Advanced assessment & personalised guidance to help you select the perfect stream and subjects that align you to the right careers.',
      color: 'border-l-accent',
    },
    {
      title: 'Class 10-12',
      subtitle: 'Career Selection & Planning',
      description: 'Expert guidance & 5-dimensional assessment to help you discover your perfect career and choose the right course and college.',
      color: 'border-l-info',
    },
    {
      title: 'Graduates',
      subtitle: 'Career Development',
      description: '5-dimensional assessment & superior guidance to help you discover your perfect career and choose the best next step.',
      color: 'border-l-success',
    },
  ],
  institutions: [
    {
      title: 'In-School Program',
      subtitle: 'Career Guidance Ecosystem',
      description: 'State-of-the-art career guidance platform with advanced assessments, expert counselling, and sophisticated analytics.',
      color: 'border-l-primary',
    },
    {
      title: 'MUN Training',
      subtitle: 'Model United Nations',
      description: 'Expert-led training and comprehensive guidance sessions to help students excel at MUN conferences.',
      color: 'border-l-accent',
    },
    {
      title: 'Mindler Talks',
      subtitle: 'Inspirational Sessions',
      description: 'Career awareness and inspirational talks for students with professionals who have achieved success in their fields.',
      color: 'border-l-info',
    },
  ],
  professionals: [
    {
      title: 'ICCC Certification',
      subtitle: 'International Certified Career Coach',
      description: 'A 3-month program with emphasis on global practices, experiential learning & career guidance tools.',
      color: 'border-l-success',
    },
    {
      title: 'Partner Program',
      subtitle: 'Mindler Partner',
      description: 'World-class assessment platform & tools to help you scale up your career counselling practice.',
      color: 'border-l-accent',
    },
  ],
};

const ProgramsSection = () => {
  const [activeTab, setActiveTab] = useState('students');

  return (
    <section className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-heading mb-4">Our Programs</h2>
          <p className="text-lg text-muted-foreground">
            Personalized, expert services & support for all stakeholders in the career guidance process.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card text-foreground border border-border hover:border-primary/30'
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs[activeTab as keyof typeof programs].map((program, index) => (
            <div
              key={program.title}
              className={`bg-card rounded-2xl p-6 lg:p-8 border-l-4 ${program.color} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full">
                  {program.title}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{program.subtitle}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>
              <Button variant="ghost" className="group p-0 h-auto font-semibold text-primary hover:text-accent">
                View Program Details
                <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
