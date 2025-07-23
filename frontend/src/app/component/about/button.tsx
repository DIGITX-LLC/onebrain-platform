import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, className, onClick, disabled }) => (
  <button className={className} onClick={onClick} disabled={disabled}>
    {children}
  </button>
); 