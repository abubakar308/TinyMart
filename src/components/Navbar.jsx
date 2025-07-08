import { BsCart } from "react-icons/bs";
import { Link } from "react-router";

const Navbar = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold text-indigo-600">TinyMart</Link>
      </div>
      <div className="flex gap-4">
        <Link to="/" className="btn btn-sm btn-ghost">Home</Link>
        <Link to="/cart" className="btn btn-sm btn-outline btn-primary">
        <BsCart />
        </Link>
      </div>
    </div>
    );
};

export default Navbar;