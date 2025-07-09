import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import CartSidebar from "../components/CartSidebar";

const MainLayout = () => {
   const [cartOpen, setCartOpen] = useState(false);
    return (
       <div className="min-h-screen flex flex-col bg-indigo-100">
    <header> 
        <Navbar toggleCart={() => setCartOpen(true)} />
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen()} />
    </header>
      <main className="flex-1 container mx-auto p-6">
        <Outlet />
      </main>
    <footer>
        <Footer />
    </footer>
    </div>
    );
};

export default MainLayout;