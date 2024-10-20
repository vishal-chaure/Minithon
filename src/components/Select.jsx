import React from 'react';

export const Select = ({ value, onValueChange, children }) => {
  return (
    <div className="select">
      <select value={value} onChange={(e) => onValueChange(e.target.value)}>
        {children}
      </select>
    </div>
  );
};

export const SelectTrigger = ({ className, children }) => (
  <div className={`select-trigger ${className}`}>{children}</div>
);

export const SelectContent = ({ children }) => (
  <div className="select-content">{children}</div>
);

export const SelectItem = ({ value, children }) => (
  <option value={value}>{children}</option>
);

export const SelectValue = ({ placeholder }) => (
  <option disabled value="">{placeholder}</option>
);
