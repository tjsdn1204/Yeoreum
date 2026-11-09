import React from 'react';
import { cn } from '@/lib/utils';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function BottomSheet({
  isOpen,
  onClose,
  title,
  children,
  className,
}: BottomSheetProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center md:hidden">
      {/* 딤 배경 */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />
      {/* 슬라이드 시트 */}
      <div
        className={cn(
          'relative z-10 w-full max-w-md rounded-t-3xl bg-white p-6 shadow-xl transition-transform',
          className
        )}
      >
        <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-gray-300" />
        {title && <h3 className="mb-4 text-lg font-bold text-gray-900">{title}</h3>}
        {children}
      </div>
    </div>
  );
}