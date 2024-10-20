// src/components/ui/Button.jsx
import React from 'react';

export function Button({ children, onClick, disabled, variant }) {
  const variantClass = variant === 'outline' ? 'border-2 border-blue-500 text-blue-500' : 'bg-blue-500 text-white';
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`py-2 px-4 rounded ${variantClass} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
}
