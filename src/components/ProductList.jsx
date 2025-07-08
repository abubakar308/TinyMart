import { useEffect, useState } from "react";
import { Link } from "react-router";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("/products.json")
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
        })
    })
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
       <div key={product.id} className="card w-80 bg-base-100 shadow-md border hover:shadow-xl transition-all">
      <figure className="px-6 pt-6">
        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt={product.title} className="rounded-xl h-40 object-contain" />
      </figure>

      <div className="card-body text-center items-center">
        <h3 className="card-title text-indigo-600 text-lg">{product.title}</h3>
        <p className="text-gray-500 font-semibold">৳ {product.price}</p>
        <p className="text-sm text-gray-400">{product.description.slice(0, 60)}...</p>

        <div className="card-actions mt-4">
          <Link to={`/product/${product.id}`}>
            <button className="btn btn-primary btn-sm">Add to Cart</button>
          </Link>
        </div>
      </div>
    </div>
      ))}
    </div>
    );
};

export default ProductList;