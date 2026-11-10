import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { Header } from '@/components/common/Header';
import { MOCK_PLACES } from '@/constants/places';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

export function MapPage() {
  const defaultCenter = { lat: 35.1796, lng: 129.0756 };

  return (
    <div className="relative flex h-screen w-full flex-col bg-[#fdf6ed]">
      <Header title="내 지도 탐색" showBack />

      <div className="relative flex-1 w-full h-full">
        {GOOGLE_MAPS_API_KEY ? (
          <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
            <Map
              defaultCenter={defaultCenter}
              defaultZoom={13}
              mapId="YOUR_MAP_ID"
              gestureHandling="greedy"
              disableDefaultUI={false}
            >
              {MOCK_PLACES.map((place) => (
                <AdvancedMarker
                  key={place.id}
                  position={{ lat: place.lat, lng: place.lng }}
                >
                  <Pin
                    background="#6d96a8"
                    borderColor="#ffffff"
                    glyphColor="#ffffff"
                  />
                </AdvancedMarker>
              ))}
            </Map>
          </APIProvider>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#f0e4d6] max-w-xs">
              <span className="text-3xl">🗺️</span>
              <h3 className="mt-2 text-sm font-bold text-gray-800">
                구글 지도 더미 바인딩 상태
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                .env.local 파일에 VITE_GOOGLE_MAPS_API_KEY를 입력하면
                실시간 핀 마커가 연동됩니다.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}