import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is a hardware wallet and why do I need one?",
    answer: "A hardware wallet is a physical device that securely stores the private keys to your cryptocurrencies offline, protecting them from online threats like hacking and malware. You need one because it provides significantly better security than software wallets or exchange storage, especially for long-term holdings or large amounts."
  },
  {
    question: "How does Trezor compare to other hardware wallets?",
    answer: "Trezor stands out with its fully open-source firmware (allowing security experts to verify its integrity), intuitive user interface, and comprehensive security features. Our devices are designed with both beginners and experts in mind, offering an optimal balance of security and usability."
  },
  {
    question: "What happens if I lose my Trezor device?",
    answer: "If you lose your device, your funds remain safe as long as no one has your PIN. You can recover all your cryptocurrencies using your backup recovery seed phrase on a new Trezor device or other compatible wallets. This is why properly backing up your recovery seed is crucial."
  },
  {
    question: "Which cryptocurrencies does Trezor support?",
    answer: "Trezor supports thousands of cryptocurrencies, including Bitcoin, Ethereum, Litecoin, Cardano, Polkadot, and many more. The list is constantly expanding through regular firmware updates, ensuring compatibility with both established and emerging digital assets."
  },
  {
    question: "Is the setup process difficult for beginners?",
    answer: "Not at all. Trezor is designed with user-friendliness in mind. The setup process is guided step-by-step through our Trezor Suite application, with clear instructions and visual aids. Most users complete the entire setup in under 15 minutes, even with no prior technical knowledge."
  },
  {
    question: "What if Trezor as a company disappears?",
    answer: "Your funds would remain safe. Since Trezor uses open standards and our firmware is open-source, you can always recover your assets using your recovery seed on other compatible wallets. Your cryptocurrencies are stored on the blockchain, not on the company's servers."
  }
];

const FAQItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  index: number;
  inView: boolean;
}> = ({ question, answer, isOpen, toggleOpen, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-foreground/10 last:border-b-0"
    >
      <button
        onClick={toggleOpen}
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none"
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        {isOpen ? (
          <ChevronUp className="text-accent" size={20} />
        ) : (
          <ChevronDown className="text-accent" size={20} />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-foreground/70">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="support" className="py-20 relative overflow-hidden">
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
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Find answers to common questions about Trezor hardware wallets and cryptocurrency security.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg rounded-xl border border-foreground/10 p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
              index={index}
              inView={inView}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-foreground/80 mb-4">Still have questions?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-foreground/10 text-foreground border border-foreground/20 px-8 py-3 rounded-full font-medium text-lg hover:bg-foreground/20 transition-colors"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;