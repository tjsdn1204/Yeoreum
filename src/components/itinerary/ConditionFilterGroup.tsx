import { Chip } from '@/components/common/Chip';

interface ConditionFilterGroupProps {
  location?: string;
  duration?: string;
  people?: string;
}

export function ConditionFilterGroup({
  location = '부산',
  duration = '2박 3일',
  people = '2명',
}: ConditionFilterGroupProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
      <Chip label={`📍 ${location}`} selected />
      <Chip label={`📅 ${duration}`} selected />
      <Chip label={`👥 ${people}`} selected />
    </div>
  );
}