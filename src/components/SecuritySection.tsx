import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

const SecuritySection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const securityPoints = [
    {
      icon: <Shield className="text-accent" size={24} />,
      title: "Secure Element Chip",
      description: "Our devices utilize a dedicated security chip that keeps your private keys isolated and protected."
    },
    {
      icon: <Lock className="text-accent" size={24} />,
      title: "Offline Transaction Signing",
      description: "All transactions are signed offline, ensuring your private keys never touch an internet-connected device."
    },
    {
      icon: <Eye className="text-accent" size={24} />,
      title: "Open-Source Transparency",
      description: "Our firmware is fully open-source, allowing security experts worldwide to verify its integrity."
    },
    {
      icon: <AlertTriangle className="text-accent" size={24} />,
      title: "Anti-Tampering Measures",
      description: "Physical tampering detection ensures you'll know if your device has been compromised."
    }
  ];

  return (
    <section id="security" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            ref={ref}
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Uncompromising <span className="gradient-text">Security</span>
            </h2>
            
            <p className="text-lg text-foreground/80 mb-8">
              In the evolving landscape of digital threats, Trezor stands as your fortress against potential vulnerabilities. Our multi-layered security approach ensures your assets remain protected under all circumstances.
            </p>
            
            <div className="space-y-6">
              {securityPoints.map((point, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="mt-1">{point.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                    <p className="text-foreground/70">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 7, repeat: Infinity }}
              />
              
              <motion.div
                className="relative bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg p-8 rounded-2xl border border-foreground/10"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center glow">
                  <Shield className="text-background" size={24} />
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Trezor security visualization" 
                  className="w-full h-auto rounded-lg mb-6 shadow-lg"
                />
                
                <h3 className="text-xl font-bold mb-4">Security Comparison</h3>
                
                <div className="space-y-4">
                  <div className="bg-foreground/5 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Trezor Hardware Wallet</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-4 h-4 rounded-full bg-accent"></div>
                        ))}
                      </div>
                    </div>
                    <div className="w-full bg-foreground/10 rounded-full h-2">
                      <motion.div 
                        className="bg-accent h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: '95%' } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div className="bg-foreground/5 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Software Wallets</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-4 h-4 rounded-full bg-foreground/30"></div>
                        ))}
                      </div>
                    </div>
                    <div className="w-full bg-foreground/10 rounded-full h-2">
                      <motion.div 
                        className="bg-foreground/30 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: '40%' } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div className="bg-foreground/5 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Exchange Storage</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-4 h-4 rounded-full bg-foreground/20"></div>
                        ))}
                      </div>
                    </div>
                    <div className="w-full bg-foreground/10 rounded-full h-2">
                      <motion.div 
                        className="bg-foreground/20 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: '20%' } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;