import { createRootRoute, Outlet, Link, useNavigate, useLocation } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Home, Search, Plus, Calendar, User, Compass, MapPin, Bookmark, Users } from 'lucide-react';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const navigate = useNavigate();
  const location = useLocation();

  // 하단 모바일 푸터를 숨길 서브 페이지 경로들 정의
  const hideFooterPaths = ['/ai-itinerary', '/map', '/itinerary', '/together'];
  const isSubPage = hideFooterPaths.some((path) => location.pathname.startsWith(path));

  return (
    <div className="min-h-screen w-full bg-[#fdf6ed] flex flex-col md:flex-row selection:bg-[#6d96a8] selection:text-white">
      
      {/* 💻 데스크톱 전용 좌측 사이드바 */}
      <aside className="hidden md:flex flex-col w-72 border-r border-[#eadcd0] p-6 bg-[#f7efe6] justify-between sticky top-0 h-screen shadow-sm">
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">여름 <span className="text-[#6d96a8]">&lt;SUMMER&gt;</span></h1>
            <p className="text-xs text-gray-500 mt-1">취향 공유 & 숏폼 여행 플랫폼</p>
          </div>

          <nav className="space-y-2">
            <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold text-gray-600 hover:bg-[#6d96a8] hover:text-white transition-all [&.active]:bg-[#6d96a8] [&.active]:text-white shadow-sm">
              <Compass className="w-5 h-5" /><span>발견</span>
            </Link>
            <Link to="/ai-itinerary" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold text-gray-600 hover:bg-[#6d96a8] hover:text-white transition-all [&.active]:bg-[#6d96a8] [&.active]:text-white shadow-sm">
              <Calendar className="w-5 h-5" /><span>AI 일정</span>
            </Link>
            <Link to="/map" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold text-gray-600 hover:bg-[#6d96a8] hover:text-white transition-all [&.active]:bg-[#6d96a8] [&.active]:text-white shadow-sm">
              <MapPin className="w-5 h-5" /><span>지도</span>
            </Link>
            <Link to="/itinerary" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold text-gray-600 hover:bg-[#6d96a8] hover:text-white transition-all [&.active]:bg-[#6d96a8] [&.active]:text-white shadow-sm">
              <Bookmark className="w-5 h-5" /><span>보관함</span>
            </Link>
            <Link to="/together" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold text-gray-600 hover:bg-[#6d96a8] hover:text-white transition-all [&.active]:bg-[#6d96a8] [&.active]:text-white shadow-sm">
              <Users className="w-5 h-5" /><span>함께</span>
            </Link>
          </nav>
        </div>

        <div className="text-xs text-gray-400 p-2">
          <p>© 2026 Yeoreum Project.</p>
        </div>
      </aside>

      {/* 우측 메인 콘텐츠 영역 (서브페이지일 때는 하단 패딩을 줄여서 공간 확보) */}
      <main className={`flex-1 min-h-screen ${isSubPage ? 'pb-12 md:pb-0' : 'pb-24 md:pb-0'} overflow-y-auto bg-[#fdf6ed]`}>
        <Outlet />
      </main>

      {/* 📱 모바일 전용 하단 고정 내비게이션 바 (메인 홈에서만 노출되도록 제어) */}
      {!isSubPage && (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 py-2 flex justify-around items-center z-50 shadow-lg">
          <Link to="/" className="flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all [&.active]:bg-[#fef0c7] [&.active]:text-amber-800 text-gray-400">
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-0.5">홈</span>
          </Link>
          <Link to="/map" className="flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all [&.active]:bg-[#fef0c7] [&.active]:text-amber-800 text-gray-400">
            <Search className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-0.5">탐색</span>
          </Link>
          <button
            type="button"
            onClick={() => navigate({ to: '/ai-itinerary' })}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[#6d96a8] text-white shadow-md transition-transform active:scale-95 -mt-4 ring-4 ring-white"
          >
            <Plus className="w-6 h-6" />
          </button>
          <Link to="/itinerary" className="flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all [&.active]:bg-[#fef0c7] [&.active]:text-amber-800 text-gray-400">
            <Calendar className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-0.5">내 여행</span>
          </Link>
          <Link to="/together" className="flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all [&.active]:bg-[#fef0c7] [&.active]:text-amber-800 text-gray-400">
            <User className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-0.5">마이</span>
          </Link>
        </nav>
      )}

      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </div>
  );
}