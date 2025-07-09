import { BsCart } from "react-icons/bs";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router";

const Navbar = ({ toggleCart }) => {
  const { cartItems } = useCart();

  // ✅ Calculate total item of items in cart
  const totalItem = cartItems?.reduce((sum, item) => sum + item.quantity, 0);

  return (
   <div className="bg-white shadow">
  <nav className="container mx-auto flex justify-between items-center px-4 py-3">
    <div className="text-xl font-bold text-indigo-600">
      TinyMart
    </div>

    {/* Links */}
    <div className="flex gap-4 items-center">
      <Link to="/" className="btn btn-sm btn-ghost">Home</Link>
      <button onClick={toggleCart} className="btn btn-sm btn-outline btn-primary relative">
        <BsCart className="text-xl" />
        {totalItem > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {totalItem}
          </span>
        )}
      </button>
    </div>
  </nav>
</div>
  );
};

export default Navbar;
