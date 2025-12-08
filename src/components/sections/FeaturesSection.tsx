import { FiTarget, FiMonitor, FiAward, FiBriefcase, FiUsers, FiTrendingUp } from 'react-icons/fi';

const features = [
  {
    icon: FiTarget,
    title: 'Best-Fit Career Discovery',
    description: 'Enable students to identify their best-fit career with our world-class career assessment and personalised guidance.',
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: FiMonitor,
    title: 'Virtual Career Simulations',
    description: 'Empower students to learn about the professional world with virtual career simulations and exhaustive career library.',
    color: 'bg-info/10 text-info',
  },
  {
    icon: FiAward,
    title: 'College Application Support',
    description: "Pave student's way to their dream college with end-to-end college application guidance and scholarship opportunities.",
    color: 'bg-success/10 text-success',
  },
  {
    icon: FiBriefcase,
    title: 'Career Guidance Ecosystem',
    description: 'Enable schools in creating a career guidance ecosystem in sync with the vision of New Education Policy.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: FiUsers,
    title: 'Certified Career Coaches',
    description: 'Empower educators to become International Certified Career Coaches and build a career in career guidance.',
    color: 'bg-warning/10 text-warning',
  },
  {
    icon: FiTrendingUp,
    title: 'Technology-Driven Solutions',
    description: 'Revolutionary assessment platform and technology driven career guidance solutions for educators.',
    color: 'bg-coral/10 text-coral',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading mb-4">
            Shaping the Career Guidance Landscape
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive career guidance solutions for students, parents, educators and schools
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 lg:p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.color} mb-5 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
