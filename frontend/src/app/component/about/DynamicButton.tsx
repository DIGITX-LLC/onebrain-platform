import React from 'react';

interface DynamicButtonProps {
  label: string;
  onClick?: () => void;
  size?: string;
  icon?: React.ReactNode;
}

const DynamicButton: React.FC<DynamicButtonProps> = ({ label, onClick, size = 'md', icon }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[linear-gradient(360deg,_hsla(235,68%,64%,1)_0%,_hsla(240,100%,27%,1)_73%)] hover:scale-105 transition-all duration-300 border border-[#656FE2] text-white rounded-full font-medium shadow-md focus:outline-none ${size}`}
    >
      {icon}
      {label}
    </button>
  );
};

export default DynamicButton; 