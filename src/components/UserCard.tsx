import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface UserCardProps {
  title: string;
  description: string;
  image: string;
  onViewMore: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ title, description, image, onViewMore }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden mb-4"
    >
      <div className="flex p-4">
        <div className="shrink-0 mr-3">
          <img
            src={image}
            alt={title}
            className="h-16 w-16 rounded-full object-cover border-2 border-teal-100"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm mb-3">{description}</p>
          <Button 
            label="Ver más" 
            variant="outline" 
            onClick={onViewMore} 
          />
        </div>
      </div>
    </motion.div>
  );
};

export default UserCard;