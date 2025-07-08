import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import CartSidebar from "../components/CartSidebar";

const MainLayout = () => {
   const [cartOpen, setCartOpen] = useState(false);
    return (
       <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-100/20 to-white">
    <header> 
        <Navbar toggleCart={() => setCartOpen(true)} />
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet /> {/* This renders the matched route's component */}
      </main>
    <footer>
        <Footer />
    </footer>
    </div>
    );
};

export default MainLayout;