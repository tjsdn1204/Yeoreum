import React from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = '가고 싶은 여행지를 검색해보세요',
  className,
}: SearchBarProps) {
  return (
    <div className={cn('relative flex items-center w-full', className)}>
      <Search className="absolute left-4 h-4 w-4 text-gray-400 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-11 w-full rounded-full bg-brand-surface/60 pl-11 pr-4 text-sm text-gray-900 placeholder:text-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
      />
    </div>
  );
}