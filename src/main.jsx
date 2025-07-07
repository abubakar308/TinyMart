import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './layout/MainLayout.jsx'
import Home from './pages/Home.jsx'
import ProductDetail from './pages/ProductDetail.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path='productdetail' element={<ProductDetail />} />
    </Route>
  </Routes>
  </BrowserRouter>
)
