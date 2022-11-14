import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
const Home = lazy(() => import("./pages/Home"));




const loading = <h1>Loading</h1>


const router = createBrowserRouter([
  {path: '/', element: <Home />}
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={loading}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
)
