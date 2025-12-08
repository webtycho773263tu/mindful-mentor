import { FiUsers, FiAward, FiBookOpen, FiGlobe } from 'react-icons/fi';

const stats = [
  {
    icon: FiUsers,
    value: '3 Million',
    label: 'Students Impacted',
    color: 'text-accent',
  },
  {
    icon: FiAward,
    value: '70,000',
    label: 'Educators Certified',
    color: 'text-success',
  },
  {
    icon: FiBookOpen,
    value: '250+',
    label: 'Partner Schools',
    color: 'text-info',
  },
  {
    icon: FiGlobe,
    value: '50+',
    label: 'University Partners',
    color: 'text-primary',
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card shadow-md mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="stat-number mb-2">{stat.value}</div>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Awards Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">
            Awards and Recognition
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              'Department of Science & Technology',
              'Ministry of Commerce, DPIIT',
              'Indian School of Business',
              'HolonIQ Top 100 EdTech',
              'Economic Times Awards',
            ].map((award) => (
              <div
                key={award}
                className="text-center text-sm text-muted-foreground/70 hover:text-muted-foreground transition-colors"
              >
                {award}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
