import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChipProps {
  label: string;
  icon?: React.ReactNode;
  selected?: boolean;
  onDelete?: () => void;
  onClick?: () => void;
  className?: string;
}

// ⭕ export function 선언 확인
export function Chip({
  label,
  icon,
  selected = false,
  onDelete,
  onClick,
  className,
}: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all shrink-0',
        selected
          ? 'bg-[#6d96a8] text-white shadow-sm font-semibold'
          : 'bg-white text-gray-700 border border-[#f0e4d6] hover:bg-[#f0e4d6]/50',
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{label}</span>
      {onDelete && (
        <span
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="ml-0.5 rounded-full p-0.5 hover:bg-black/10"
        >
          <X className="h-3 w-3" />
        </span>
      )}
    </button>
  );
}