import React from 'react';

export const Input = ({
  name,
  placeholder,
  type = 'text',
  value,
  handleChange,
}) => {
  return (
    <input
      id={name}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};