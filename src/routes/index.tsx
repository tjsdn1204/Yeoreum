import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-gray-800">여름 홈 (발견)</h1>
      <p className="mt-2 text-sm text-gray-600">
        여행 숏폼을 발견하고 일정을 만들어보세요!
      </p>
    </div>
  );
}