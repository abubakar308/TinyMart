import { Link } from "react-router";

const ProductCard = ({ product }) => {
    return (
      <div key={product.id} className="card w-full sm:w-[200px] bg-base-100 shadow-sm border hover:ease-in transition-all">
      <figure className="px-4 pt-4">
        <img
          src={product.image}

          alt={product.title}
          className="rounded-xl w-full h-32 object-contain"
        />
      </figure>

      <div className="card-body items-center text-center p-4">
        <h3 className="card-title text-sm font-medium text-indigo-600">{product.title}</h3>
        <p className="text-gray-500 text-sm font-semibold">$ {product.price}</p>

        <div className="card-actions mt-2">
          <Link to={`/product/${product.id}`}>
            <button className="btn bg-indigo-200 hover:bg-indigo-500">Add to Cart</button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default ProductCard;