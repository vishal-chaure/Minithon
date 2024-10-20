// src/components/ui/Tooltip.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function TooltipProvider({ children }) {
  return <div>{children}</div>;
}

export function Tooltip({ children }) {
  return <div className="relative">{children}</div>;
}

export function TooltipTrigger({ asChild, children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-block cursor-pointer"
    >
      {children}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <TooltipContent />
        </motion.div>
      )}
    </div>
  );
}

export function TooltipContent({ children }) {
  return (
    <div className="absolute top-0 left-full ml-2 px-3 py-2 text-xs bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded shadow-lg">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M12 18h0a2 2 0 01-2-2v-4a2 2 0 012-2 2 2 0 012 2v4a2 2 0 01-2 2zm-1 0h0"
          />
        </svg>
        {children || "This is a tooltip!"}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-400 rounded blur-sm opacity-30"></div>
    </div>
  );
}
