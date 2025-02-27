import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Key } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 grid-pattern relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background/50 to-background z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <span className="text-accent font-medium">The Future of Crypto Security</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Begin Your <span className="gradient-text">Secure</span> Crypto Journey
            </motion.h1>
            
            <motion.p 
              className="text-lg text-foreground/80 mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Welcome to Trezor.io/start, your gateway to the most secure cryptocurrency management experience. Take control of your digital assets with military-grade protection.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-medium text-lg glow"
              >
                Start Setup
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-foreground/10 text-foreground border border-foreground/20 px-8 py-3 rounded-full font-medium text-lg hover:bg-foreground/20 transition-colors"
              >
                Watch Tutorial
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
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
                className="relative bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg p-8 rounded-2xl border border-foreground/10 animate-float"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center glow">
                  <ShieldCheck className="text-background" size={24} />
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Trezor hardware wallet" 
                  className="w-full h-auto rounded-lg mb-6 shadow-lg"
                />
                
                <h3 className="text-xl font-bold mb-4">Trezor Model T</h3>
                
                <div className="space-y-4">
                  {[
                    { icon: <ShieldCheck size={20} />, text: "Military-grade encryption" },
                    { icon: <Lock size={20} />, text: "Offline private keys" },
                    { icon: <Key size={20} />, text: "Intuitive setup process" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                    >
                      <div className="text-accent">{item.icon}</div>
                      <p className="text-foreground/90">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;