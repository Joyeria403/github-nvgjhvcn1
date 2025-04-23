import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PageContainerProps {
  title: string;
  description?: string;
  image?: string;
  showBackButton?: boolean;
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({
  title,
  description,
  image,
  showBackButton = false,
  children,
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center w-full px-4 py-6 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mx-auto"
      >
        {showBackButton && (
          <button
            onClick={() => navigate(-1)}
            className="mb-4 flex items-center text-teal-600 hover:text-teal-800 transition-colors"
          >
            <ArrowLeft size={20} className="mr-1" />
            <span>Volver</span>
          </button>
        )}
        
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-6">
          {image && (
            <div className="flex justify-center py-6 bg-gradient-to-r from-teal-500 to-teal-600">
              <img src={image} alt="" className="h-32 w-32 object-contain" />
            </div>
          )}
          
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
            {description && <p className="text-gray-600 mb-6">{description}</p>}
            
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PageContainer;