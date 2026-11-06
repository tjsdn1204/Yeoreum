import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// 자동 생성된 routeTree 가져오기
import { routeTree } from './routeTree.gen'
import './index.css'

// 라우터 인스턴스 생성
const router = createRouter({ routeTree })

// TanStack Router 타입 등록
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)