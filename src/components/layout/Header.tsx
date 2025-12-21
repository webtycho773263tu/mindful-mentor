import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown, FiPhone } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

const navItems = [
  {
    label: 'For Students',
    hasDropdown: true,
    items: [
      { label: 'Class 8-9', href: '/career-counselling-for-class-8-and-9' },
      { label: 'Class 10-12', href: '#' },
      { label: 'Graduates', href: '#' },
    ],
  },
  {
    label: 'For Institutions',
    hasDropdown: true,
    items: [
      { label: 'Schools', href: '#' },
      { label: 'MUN Training', href: '/mun-training-program' },
      { label: 'Universities', href: '#' },
    ],
  },
  {
    label: 'For Professionals',
    hasDropdown: true,
    items: [
      { label: 'ICCC Certification', href: '/iccc' },
      { label: 'Partner Program', href: '/partner-program' },
    ],
  },
  { label: 'Resources', hasDropdown: false },
  { label: 'About Us', hasDropdown: false },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold text-primary">Mindler</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors">
                  {item.label}
                  {item.hasDropdown && <FiChevronDown className="w-4 h-4" />}
                </button>

                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-card rounded-lg shadow-lg border border-border py-2 animate-fade-in">
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-muted/50 transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+911234567890"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
            >
              <FiPhone className="w-4 h-4" />
              <span>+91 12345 67890</span>
            </a>
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button variant="accent" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-down">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="px-4 py-2 text-foreground hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4 px-4">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
                <Button variant="accent" className="w-full">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
