// src/components/common/Chip.tsx
import React from 'react';

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onDelete?: () => void;
}

export function Chip({
  label,
  variant = 'primary',
  onDelete,
  className = '',
  ...props
}: ChipProps) {
  // variant별 Tailwind 스타일 정의
  const variantStyles = {
    primary: 'bg-[#6d96a8] text-white',
    secondary: 'bg-[#fef0c7] text-[#8c6211]',
    outline: 'border border-gray-300 text-gray-700 bg-white',
  };

  return (
    <button
      type="button"
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span>{label}</span>
      {onDelete && (
        <span onClick={onDelete} className="cursor-pointer opacity-70 hover:opacity-100">
          ✕
        </span>
      )}
    </button>
  );
}