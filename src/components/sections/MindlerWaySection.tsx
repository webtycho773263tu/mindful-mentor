import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

const steps = [
  {
    title: 'Advanced Assessment & Best-Fit Matches',
    features: [
      '5-D psychometric career assessment: Orientation Style, Interest, Personality, Aptitude and EQ',
      '34 page in-depth career report with personalised development plans',
      'Get your best-fit career recommendations based on 56 evaluation parameters',
    ],
    cta: 'Take Free Demo',
    image: 'assessment',
  },
  {
    title: 'Interactive Career & Stream Activities',
    features: [
      'Evaluate your motivators, work style, and more with interactive activities',
      'Zero-in on your perfect career or stream based on your personal preferences',
      'Ensure a great career that fits your lifestyle and goals',
    ],
    cta: 'Schedule a Call Back',
    image: 'activities',
  },
  {
    title: 'Simulated Virtual Career Internships',
    features: [
      'Deep dive into multiple career options through role play, simulations and experiential videos',
      'Completely online with guided videos by industry experts and simulated live projects',
      'Get a certificate of completion for each completed internship',
    ],
    cta: 'View Program Details',
    image: 'internship',
  },
  {
    title: 'Personalised Guidance from Experts',
    features: [
      'Plan your career, stream/subject combinations, course, college and more through expert guidance',
      'All our career coaches are International Certified Career Coaches who have mentored over 3 Million students',
      'Make the right choice with personalised career counselling and all-round support',
    ],
    cta: 'About Our Team',
    image: 'guidance',
  },
];

const MindlerWaySection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading mb-4">The Mindler Way</h2>
          <p className="text-lg text-muted-foreground">
            A step-by-step approach to tackle every aspect of career selection and planning
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 lg:gap-20 items-center`}
            >
              {/* Content */}
              <div className="flex-1 animate-fade-in">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  {step.title}
                </h3>
                <ul className="space-y-4 mb-8">
                  {step.features.map((feature, i) => (
                    <li key={i} className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
                        <FiCheck className="w-4 h-4 text-success" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="accent-outline" className="group">
                  {step.cta}
                  <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Visual */}
              <div className="flex-1 w-full max-w-lg animate-fade-in">
                <div className="bg-card rounded-2xl shadow-xl border border-border p-6 lg:p-8">
                  {step.image === 'assessment' && <AssessmentVisual />}
                  {step.image === 'activities' && <ActivitiesVisual />}
                  {step.image === 'internship' && <InternshipVisual />}
                  {step.image === 'guidance' && <GuidanceVisual />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Visual Components
const AssessmentVisual = () => (
  <div>
    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
      <div className="w-3 h-3 rounded-full bg-destructive" />
      <div className="w-3 h-3 rounded-full bg-warning" />
      <div className="w-3 h-3 rounded-full bg-success" />
    </div>
    <div className="flex gap-4">
      {/* Sidebar */}
      <div className="w-40 space-y-2">
        <p className="text-xs font-medium text-foreground mb-3">All Assessments</p>
        {['Orientation Style', 'Interest', 'Personality Part-1', 'Personality Part-2', 'Abstract Reasoning', 'Verbal Aptitude'].map((item, i) => (
          <div key={item} className={`flex items-center gap-2 text-xs ${i < 2 ? 'text-success' : 'text-muted-foreground'}`}>
            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${i < 2 ? 'bg-success text-success-foreground' : 'bg-muted'}`}>
              {i < 2 && <FiCheck className="w-3 h-3" />}
            </div>
            {item}
          </div>
        ))}
      </div>
      {/* Main content */}
      <div className="flex-1 bg-muted/30 rounded-lg p-4">
        <div className="h-2 w-3/4 bg-success/30 rounded mb-4">
          <div className="h-2 w-1/2 bg-success rounded" />
        </div>
        <p className="text-xs text-muted-foreground mb-4">I would like to pursue a career where I will be approached for advice and guidance.</p>
        <div className="space-y-2">
          {['Completely Disagree', 'Slightly Disagree', 'Slightly Agree', 'Completely Agree'].map((option) => (
            <div key={option} className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-3 h-3 rounded-full border border-border" />
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ActivitiesVisual = () => (
  <div>
    <p className="text-sm font-medium text-foreground mb-4">My Activities - Typical Day</p>
    <div className="flex gap-4">
      <div className="flex-1 space-y-3">
        {[
          { label: 'At School', hours: 6, color: 'bg-primary' },
          { label: 'Self Study', hours: 1, color: 'bg-success' },
          { label: 'Tuitions', hours: 2, color: 'bg-info' },
          { label: 'Hobbies', hours: 3, color: 'bg-accent' },
          { label: 'Sleeping', hours: 8, color: 'bg-coral' },
        ].map((item) => (
          <div key={item.label} className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">{item.label}</span>
            <div className="flex items-center gap-2">
              <div className="w-24 h-2 bg-muted rounded-full">
                <div className={`h-2 ${item.color} rounded-full`} style={{ width: `${(item.hours / 8) * 100}%` }} />
              </div>
              <span className="text-accent font-medium">{item.hours} Hours</span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-24 h-24 rounded-full border-8 border-primary relative">
        <div className="absolute inset-2 rounded-full border-4 border-success" />
        <div className="absolute inset-4 rounded-full border-4 border-accent" />
      </div>
    </div>
  </div>
);

const InternshipVisual = () => (
  <div className="text-center">
    <div className="w-20 h-20 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
      <span className="text-4xl">🎬</span>
    </div>
    <h4 className="font-semibold text-foreground mb-2">Virtual Internship</h4>
    <p className="text-sm text-muted-foreground mb-4">Experience real-world career scenarios</p>
    <div className="flex justify-center gap-2">
      {['📊', '🎨', '💻', '📈', '🔬'].map((emoji, i) => (
        <div key={i} className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-lg">
          {emoji}
        </div>
      ))}
    </div>
  </div>
);

const GuidanceVisual = () => (
  <div className="flex items-center gap-4">
    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
      <span className="text-4xl">👩‍🏫</span>
    </div>
    <div className="flex-1">
      <h4 className="font-semibold text-foreground mb-1">Expert Career Coach</h4>
      <p className="text-sm text-muted-foreground mb-3">ICCC Certified | 500+ Students Guided</p>
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className="text-warning">★</span>
        ))}
        <span className="text-xs text-muted-foreground ml-2">4.9/5.0</span>
      </div>
    </div>
  </div>
);

export default MindlerWaySection;
