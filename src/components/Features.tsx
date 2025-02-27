import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, Lock, RefreshCw, Zap, Fingerprint, Wallet } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Advanced Security",
    description: "Military-grade encryption protects your assets from even the most sophisticated attacks."
  },
  {
    icon: <Lock size={24} />,
    title: "Offline Storage",
    description: "Your private keys never leave the device, keeping them safe from online threats."
  },
  {
    icon: <RefreshCw size={24} />,
    title: "Easy Recovery",
    description: "Backup and restore your wallet with a simple recovery seed phrase system."
  },
  {
    icon: <Zap size={24} />,
    title: "Fast Setup",
    description: "Get started in minutes with our intuitive and streamlined setup process."
  },
  {
    icon: <Fingerprint size={24} />,
    title: "PIN Protection",
    description: "Secure access to your device with a customizable PIN code system."
  },
  {
    icon: <Wallet size={24} />,
    title: "Multi-Currency",
    description: "Support for thousands of cryptocurrencies and tokens in one secure device."
  }
];

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}> = ({ icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg p-6 rounded-xl border border-foreground/10 hover:border-accent/30 transition-all duration-300"
      whileHover={{ y: -10, boxShadow: '0 10px 30px -15px rgba(0, 229, 255, 0.3)' }}
    >
      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cutting-Edge <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover why Trezor is the preferred choice for securing digital assets with our industry-leading technology and user-friendly design.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;