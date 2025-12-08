import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const footerLinks = {
  'For Students': [
    'Career Counselling Class 8-9',
    'Career Counselling Class 10-12',
    'Career Counselling for Graduates',
    'Virtual Internship Program',
    'Overseas Applications',
    'Liberal Arts Applications',
  ],
  'For Institutions': [
    'Schools Program',
    'MUN Training',
    'Mindler Talks',
    'University Partners',
  ],
  'For Professionals': [
    'ICCC Certification',
    'Partner Program',
    'Career Coaches Network',
  ],
  'Company': [
    'About Us',
    'Our Team',
    'Careers',
    'Contact Us',
    'Privacy Policy',
    'Terms of Service',
  ],
};

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold text-primary-foreground">Mindler</span>
            </a>
            <p className="text-primary-foreground/70 text-sm mb-6">
              Making smart career decisions with AI-enabled guidance tools and expert counsellors.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-primary-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <a href="mailto:hello@mindler.com" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
              <FiMail className="w-4 h-4" />
              <span>hello@mindler.com</span>
            </a>
            <a href="tel:+911234567890" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
              <FiPhone className="w-4 h-4" />
              <span>+91 12345 67890</span>
            </a>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <FiMapPin className="w-4 h-4" />
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Mindler. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
