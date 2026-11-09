import { useLocation, Outlet } from '@tanstack/react-router';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';

export function MainLayout() {
  const location = useLocation();

  // 숏폼 풀스크린 뷰 등 헤더/푸터를 숨겨야 하는 라우트 예외 처리
  const isFullScreen = location.pathname.startsWith('/place/');

  return (
    <div className="relative min-h-screen bg-brand-bg text-gray-900">
      {/* 1. 상단 헤더 */}
      {!isFullScreen && <Header />}

      {/* 2. 메인 콘텐츠 영역 */}
      <main
        className={`mx-auto max-w-md ${
          !isFullScreen ? 'pb-20' : ''
        } md:max-w-7xl md:p-6 md:pb-0`}
      >
        <Outlet />
      </main>

      {/* 3. 모바일 하단 푸터 (5개 탭 바) */}
      {!isFullScreen && <Footer />}
    </div>
  );
}