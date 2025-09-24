'use client'
import React from 'react';
import Image from 'next/image';
import { ButtonProps } from '@/utils/types';

interface ExtendedButtonProps extends Partial<ButtonProps> {
  variant?: 'default' | 'joinUs'
  text?: string
}

const Button: React.FC<ExtendedButtonProps> = ({
  id,
  label,
  icon,
  action,
  isHighlighted = false,
  onClick,
  className = '',
  variant = 'default',
  text
}) => {

  // Join Us button variant
  if (variant === 'joinUs') {
    const joinUsClasses = `
      px-4 py-2 sm:px-6 sm:py-3
      border-2 border-[#00B9B9] 
      bg-transparent 
      text-[#00B9B9] 
      font-semibold 
      text-sm sm:text-base
      rounded-full 
      hover:bg-white 
      hover:text-[#00B9B9]
      hover:border-white 
      transition-all 
      duration-300 
      ease-in-out
      focus:outline-none 
      focus:ring-2 
      focus:ring-[#00B9B9] 
      focus:ring-opacity-50
      cursor-pointer
      ${className}
    `;

    return (
      <button
        onClick={() => onClick?.(action || 'joinUs')}
        className={joinUsClasses}
      >
        {text || 'Join Us'}
      </button>
    );
  }

  // Default button variant
  const baseClasses = "px-4 py-1.5 rounded-3xl text-sm font-medium flex items-center space-x-2 transition-colors cursor-pointer";
  const variantClasses = isHighlighted 
    ? "bg-[#00B9B9] hover:bg-white hover:border hover:border-[#00323C] hover:text-[#00323C] text-white"
    : "bg-[#00323C] hover:bg-white hover:border hover:border-[#00323C] hover:text-[#00323C] text-white";
  
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;


  return (
    <button 
      key={id}
      className={combinedClasses}
      onClick={() => onClick?.(action || '')}
    >
      {icon && (
        <Image 
          src={icon} 
          alt={label || ''} 
          width={16} 
          height={16} 
          className="w-4 h-4" 
        />
      )}
      <span>{label}</span>
    </button>
  );
};

export default Button;
