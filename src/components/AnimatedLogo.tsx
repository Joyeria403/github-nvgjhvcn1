import React from 'react';
import { motion } from 'framer-motion';
import { Coins } from 'lucide-react';

const AnimatedLogo: React.FC = () => {
  return (
    <motion.div
      className="flex items-center justify-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.5,
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="relative">
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 10, 0],
            y: [0, -5, 0, -5, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          className="bg-gradient-to-r from-amber-400 to-yellow-500 w-12 h-12 rounded-full flex items-center justify-center"
        >
          <Coins size={26} className="text-white" />
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          className="absolute inset-0 bg-yellow-400 rounded-full filter blur-md -z-10"
        />
      </div>
    </motion.div>
  );
};

export default AnimatedLogo;