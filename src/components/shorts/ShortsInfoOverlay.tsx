interface ShortsInfoOverlayProps {
  authorName?: string;
  authorProfile?: string;
  description?: string;
  hashtags?: string[];
}

export function ShortsInfoOverlay({
  authorName = 'travel_ji',
  authorProfile = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
  description = '부산에서 꼭 가봐야 할 바다 열차 코스! 💙 해운대부터 청사포까지 감성 가득한 하루 ✨',
  hashtags = ['#부산여행', '#해변열차', '#청사포', '#당일치기'],
}: ShortsInfoOverlayProps) {
  return (
    <div className="absolute bottom-20 left-4 right-20 z-20 space-y-2 text-left text-white">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full border border-white/40 overflow-hidden">
          <img src={authorProfile} alt={authorName} className="h-full w-full object-cover" />
        </div>
        <span className="text-sm font-bold">{authorName}</span>
        <button
          type="button"
          className="rounded-full border border-white/60 px-2.5 py-0.5 text-[11px] font-semibold hover:bg-white/10"
        >
          팔로우
        </button>
      </div>
      <p className="line-clamp-2 text-xs text-white/90 leading-snug">{description}</p>
      <p className="text-[11px] font-medium text-[#bfd1e0]">{hashtags.join(' ')}</p>
    </div>
  );
}