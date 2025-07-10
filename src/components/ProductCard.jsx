import { Link } from "react-router";
import { useCart } from "../hooks/useCart";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const {addToCart, isInCart} = useCart();
  const inCart = isInCart(product.id);

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
          if (!inCart) {
            addToCart(product);
            Swal.fire({
  position: "top-center",
  icon: "success",
  title: "Product Added to cart",
  showConfirmButton: false,
  timer: 1500
});
          }
        }}
        disabled={inCart}
        className={`btn m-2 ${inCart ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-400 hover:bg-indigo-600"}`}
      >
        {inCart ? "Already in Cart" : "Add to Cart"}
      </button>
    </div>
    );
};

export default ProductCard;