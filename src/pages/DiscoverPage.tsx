import { SearchBar } from '@/components/common/SearchBar';
import { QuickMenuGrid } from '@/components/discovery/QuickMenuGrid';
import { ShortsSection } from '@/components/discovery/ShortsSection';

export function DiscoverPage() {
  return (
    <div className="min-h-screen bg-[#fdf6ed] pb-12">
      <div className="mx-auto max-w-md space-y-6 px-4 pt-4">
        <SearchBar placeholder="어디로 떠나고 싶으신가요?" />
        <QuickMenuGrid />
        <ShortsSection />
      </div>
    </div>
  );
}