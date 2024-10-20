// src/components/ui/Input.jsx
import React from 'react';

export function Input({ id, name, type, value, onChange, placeholder }) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
    />
  );
}
