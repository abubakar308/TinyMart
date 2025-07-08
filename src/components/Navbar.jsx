import { BsCart } from "react-icons/bs";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router";

const Navbar = ({ toggleCart }) => {
  const { cartItems } = useCart();

  // Calculate total quantity
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold text-indigo-600">TinyMart</Link>
      </div>

      <div className="flex gap-4 items-center">
        <Link to="/" className="btn btn-sm btn-ghost">Home</Link>

        {/* Cart Icon with badge */}
        <button onClick={toggleCart} className="btn btn-sm btn-outline btn-primary relative">
          <BsCart className="text-xl" />
          {totalQty > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalQty}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
