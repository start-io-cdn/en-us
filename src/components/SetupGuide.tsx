import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Box, CheckCircle, Zap, Shield, Key, Download } from 'lucide-react';

const setupSteps = [
  {
    icon: <Box size={24} />,
    title: "Unbox Your Device",
    description: "Carefully unpack your Trezor device and verify all components are included in the package.",
    image: "https://images.unsplash.com/photo-1612630741022-b29ec8624cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: <Download size={24} />,
    title: "Install Trezor Suite",
    description: "Download and install the Trezor Suite application from our official website to manage your device.",
    image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: <Zap size={24} />,
    title: "Connect Your Device",
    description: "Connect your Trezor to your computer using the provided USB cable and follow the on-screen instructions.",
    image: "https://images.unsplash.com/photo-1563770660941-10a63607692e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: <Shield size={24} />,
    title: "Create a PIN",
    description: "Set up a secure PIN code to protect your device from unauthorized physical access.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: <Key size={24} />,
    title: "Backup Recovery Seed",
    description: "Write down your recovery seed phrase on the provided recovery card and store it in a secure location.",
    image: "https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: <CheckCircle size={24} />,
    title: "Start Using Trezor",
    description: "Your device is now ready to use. Begin managing your cryptocurrencies with complete security and control.",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
];

const SetupGuide: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="setup" className="py-20 relative overflow-hidden">
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
            Simple <span className="gradient-text">Setup</span> Process
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Getting started with your Trezor device is straightforward. Follow these simple steps to secure your digital assets in minutes.
          </p>
        </motion.div>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="pb-12"
        >
          {setupSteps.map((step, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg rounded-xl border border-foreground/10 overflow-hidden h-full"
              >
                <div className="relative h-48">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-background">
                    {step.icon}
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center text-foreground font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-medium text-lg glow"
          >
            View Detailed Guide
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SetupGuide;