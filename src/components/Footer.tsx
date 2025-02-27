import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Twitter, Facebook, Instagram, Youtube, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-foreground/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <ShieldCheck className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold gradient-text">Trezor.io</span>
            </div>
            <p className="text-foreground/70 mb-6">
              The original hardware wallet. Secure your cryptocurrencies with the most trusted brand in the industry.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Facebook, Instagram, Youtube, Github].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, color: '#00E5FF' }}
                  className="text-foreground/70 hover:text-accent transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              {['Trezor Model T', 'Trezor Model One', 'Trezor Suite', 'Accessories', 'Compare Models'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {['Blog', 'Support Center', 'User Manual', 'Security', 'Developers'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Press', 'Contact', 'Partners'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Trezor. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Privacy Policy', 'Terms of Service', 'Shipping Policy', 'Refund Policy'].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-foreground/60 text-sm hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;