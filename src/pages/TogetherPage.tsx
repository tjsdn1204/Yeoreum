import { Header } from '@/components/common/Header';
import { Button } from '@/components/common/Button';
import { Users, Share2, UserPlus } from 'lucide-react';

export function TogetherPage() {
  return (
    <div className="min-h-screen bg-[#fdf6ed] pb-12">
      <Header title="함께하는 여행" showBack />

      <div className="mx-auto max-w-md space-y-4 px-4 pt-4">
        <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100 text-center space-y-3">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fef0c7]">
            <Users className="h-6 w-6 text-amber-600" />
          </div>
          <h3 className="text-base font-bold text-gray-800">친구와 함께 일정 짜기</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            초대 링크를 공유하여 일정을 함께 편집하고 여행 동선을 공동 기획해 보세요.
          </p>

          <div className="pt-2 flex gap-2">
            <Button fullWidth size="md" className="flex items-center justify-center gap-1.5">
              <UserPlus className="h-4 w-4" /> 동행 초대하기
            </Button>
            <Button variant="outline" size="md" className="flex items-center justify-center gap-1.5">
              <Share2 className="h-4 w-4" /> 공유
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}