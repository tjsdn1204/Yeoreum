import { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';

export function ShortsActionStack() {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="absolute right-4 bottom-28 z-20 flex flex-col items-center gap-5 text-white">
      <button
        type="button"
        onClick={() => setIsLiked(!isLiked)}
        className="flex flex-col items-center gap-1"
      >
        <Heart className={`h-7 w-7 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`} />
        <span className="text-xs font-semibold">3.2만</span>
      </button>

      <button type="button" className="flex flex-col items-center gap-1">
        <MessageCircle className="h-7 w-7 text-white" />
        <span className="text-xs font-semibold">452</span>
      </button>

      <button type="button" className="flex flex-col items-center gap-1">
        <Share2 className="h-7 w-7 text-white" />
        <span className="text-xs font-semibold">공유</span>
      </button>

      <button
        type="button"
        onClick={() => setIsBookmarked(!isBookmarked)}
        className="flex flex-col items-center gap-1"
      >
        <Bookmark className={`h-7 w-7 ${isBookmarked ? 'fill-white' : ''}`} />
        <span className="text-xs font-semibold">저장</span>
      </button>
    </div>
  );
}