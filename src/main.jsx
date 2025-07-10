import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './layout/MainLayout.jsx'
import Home from './pages/Home.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import { CartProvider } from './hooks/useCart.jsx'
import Cart from './pages/Cart.jsx'
import Error from './pages/Error.jsx'

createRoot(document.getElementById('root')).render(
<CartProvider>
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path='cart' element={<Cart />} />
    <Route path='/product/:id' element={<ProductDetail />} />
    </Route>
    <Route path="*" element={<Error />} />
  </Routes>
  </BrowserRouter>
</CartProvider>
)
