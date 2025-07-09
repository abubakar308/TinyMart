import { Link } from "react-router";
import { useCart } from "../hooks/useCart";

const ProductCard = ({ product }) => {
  const {addToCart} = useCart()
    return (
       <div className="card w-full sm:w-[200px] bg-base-100 shadow-sm border hover:shadow-md transition-all duration-200">
      {/* Entire card clickable for details */}
      <Link to={`/product/${product.id}`}>
        <figure className="px-4 pt-4">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-xl w-full h-32 object-contain"
          />
        </figure>

        <div className="card-body items-center text-center p-4">
          <h3 className="card-title text-sm font-medium text-indigo-600 line-clamp-2">
            {product.title}
          </h3>
          <p className="text-gray-500 text-sm font-semibold">${product.price}</p>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <button
        onClick={() => {
          addToCart(product);
          alert("✅ Product added to cart!");
        }}
        className="btn bg-indigo-400 m-2 hover:bg-indigo-600 text-white transition"
      >
        Add to Cart
      </button>
    </div>
    );
};

export default ProductCard;