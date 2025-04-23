import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  to,
  variant = 'primary',
  fullWidth = false,
  icon,
}) => {
  const baseClasses = `
    flex items-center justify-center rounded-lg px-5 py-3 font-medium 
    transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2
    ${fullWidth ? 'w-full' : 'inline-flex'}
  `;

  const variants = {
    primary: `bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500`,
    secondary: `bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500`,
    outline: `border-2 border-teal-600 text-teal-600 hover:bg-teal-50 focus:ring-teal-500`,
  };

  const buttonContent = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  };

  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link
          to={to}
          className={`${baseClasses} ${variants[variant]}`}
        >
          {buttonContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]}`}
      {...motionProps}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;