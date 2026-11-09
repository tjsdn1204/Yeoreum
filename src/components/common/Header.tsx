import React from 'react';
import { ChevronLeft, Bell, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showActions?: boolean;
  rightAction?: React.ReactNode;
  className?: string;
}

// ⭕ export function Header 형태로 작성되어 있어야 합니다.
export function Header({
  title,
  showBack = false,
  showActions = true,
  rightAction,
  className,
}: HeaderProps) {
  return (
    <header
      className={cn(
        'sticky top-0 z-40 flex h-14 items-center justify-between bg-brand-bg/90 px-4 backdrop-blur-md',
        className
      )}
    >
      <div className="flex items-center gap-2">
        {showBack && (
          <button
            type="button"
            onClick={() => window.history.back()}
            className="rounded-full p-1.5 text-gray-700 hover:bg-black/5"
            aria-label="뒤로가기"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}
        {title ? (
          <h1 className="text-base font-bold text-gray-900">{title}</h1>
        ) : (
          <div className="flex items-center gap-1.5 text-lg font-extrabold text-brand-primary">
            <span>⛰️</span>
            <span>여름</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-1">
        {rightAction}
        {showActions && !rightAction && (
          <>
            <button
              type="button"
              className="rounded-full p-2 text-gray-700 hover:bg-black/5"
              aria-label="알림"
            >
              <Bell className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="rounded-full p-2 text-gray-700 hover:bg-black/5"
              aria-label="마이페이지"
            >
              <User className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
    </header>
  );
}