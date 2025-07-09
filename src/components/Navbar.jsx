import { BsCart } from "react-icons/bs";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router";

const Navbar = ({ toggleCart }) => {
  const { cartItems } = useCart();

  // ✅ Calculate total item of items in cart
  const totalItem = cartItems?.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold text-indigo-600">TinyMart</Link>
      </div>

      <div className="flex gap-4 items-center">
        <Link to="/" className="btn btn-sm btn-ghost">Home</Link>

        {/* ✅ Cart Icon Button with Quantity Badge */}
        <button
          onClick={toggleCart}
          className="btn btn-sm btn-outline btn-primary relative"
          aria-label="Open Cart"
        >
          <BsCart className="text-xl" />
          
          {totalItem > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalItem}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
