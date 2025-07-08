import { Link } from "react-router";

const ProductCard = ({ product }) => {
    return (
      <div key={product.id} className="card w-[200px] bg-base-100 shadow-sm border hover:shadow-md transition-all">
      <figure className="px-4 pt-4">
        <img
          src={product.image}
          alt={product.title}
          className="rounded-xl h-32 object-contain"
        />
      </figure>

      <div className="card-body items-center text-center p-4">
        <h3 className="card-title text-sm font-medium text-indigo-600">{product.title}</h3>
        <p className="text-gray-500 text-sm font-semibold">৳ {product.price}</p>

        <div className="card-actions mt-2">
          <Link to={`/product/${product.id}`}>
            <button className="btn btn-sm hover:btn-primary">Add to Cart</button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default ProductCard;