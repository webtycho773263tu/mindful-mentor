import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Class 12 Student',
    location: 'Delhi, India',
    image: '👩‍🎓',
    rating: 5,
    text: "Mindler's career assessment was an eye-opener for me. I was confused between engineering and design, but the detailed report helped me understand my true interests lie in UX Design. Now I'm pursuing my dream!",
  },
  {
    name: 'Rahul Verma',
    role: 'Parent',
    location: 'Mumbai, India',
    image: '👨',
    rating: 5,
    text: "As a parent, I was worried about my son's career choice. The counsellors at Mindler not only guided him but also included us in the process. Their scientific approach gave us confidence in the decision.",
  },
  {
    name: 'Dr. Anita Patel',
    role: 'School Counsellor',
    location: 'Bangalore, India',
    image: '👩‍💼',
    rating: 5,
    text: "The ICCC certification transformed my career counselling practice. The platform provides comprehensive tools that make counselling sessions more effective and data-driven.",
  },
  {
    name: 'Arjun Nair',
    role: 'College Graduate',
    location: 'Chennai, India',
    image: '🧑‍💼',
    rating: 5,
    text: "After my graduation, I was lost about my career direction. Mindler's career assessment and expert guidance helped me identify my strengths and land my dream job in product management!",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading mb-4">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground">
            Thousands of students, parents, and educators trust Mindler for career guidance
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 fill-warning text-warning" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                {testimonial.text}
              </p>

              {/* Location */}
              <p className="text-xs text-muted-foreground/70 mt-4">{testimonial.location}</p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-3xl">
                {testimonials[currentIndex].image}
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
              </div>
            </div>

            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <FiStar key={i} className="w-5 h-5 fill-warning text-warning" />
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              {testimonials[currentIndex].text}
            </p>

            <p className="text-sm text-muted-foreground/70">{testimonials[currentIndex].location}</p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentIndex ? 'bg-accent' : 'bg-border'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
