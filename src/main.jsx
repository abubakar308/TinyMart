import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './layout/MainLayout.jsx'
import Home from './pages/Home.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import { CartProvider } from './hooks/useCart.jsx'

createRoot(document.getElementById('root')).render(
<CartProvider>
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path='/product/:id' element={<ProductDetail />} />
    </Route>
  </Routes>
  </BrowserRouter>
</CartProvider>
)
