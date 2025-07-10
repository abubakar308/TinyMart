import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useCart } from "../hooks/useCart"; // ✅ Use your hook

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, isInCart } = useCart(); // Access addToCart



  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id.toString() === id);
        setProduct(found);
      });
  }, [id]);

  if (!product) return <p className="text-center text-red-400">Loading...</p>;

  const inCart = isInCart(product.id);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-6">
        {/* Image */}
        <div className="w-full h-64 md:h-80 flex justify-center items-center">
  <img
    src={product.image}
    alt={product.title}
    className="h-full object-contain rounded"
  />
</div>

       {/* Details */}
<div className="flex flex-col justify-center space-y-4">
  <h2 className="text-3xl font-bold text-indigo-700">{product.title}</h2>
  <p className="text-gray-600 text-base leading-relaxed">{product.description}</p>
  
  {/* Additional Info */}
  <p className="text-sm text-gray-500">Brand: <span className="font-medium">{product.brand}</span></p>
  <p className={`text-sm font-medium ${product.availability === "Out of Stock" ? "text-red-500" : "text-green-600"}`}>
    {product.availability}
  </p>

  <p className="text-xl font-semibold text-indigo-600">Price: ${product.price}</p>

 <button
            onClick={() => {
              if (!inCart) {
                addToCart(product);
                alert("✅ Product added to cart!");
              }
            }}
            disabled={inCart || product.availability === "Out of Stock"}
            className={`mt-4 w-fit px-6 py-2 rounded text-white transition ${
              product.availability === "Out of Stock" || inCart
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-500 hover:bg-indigo-600"
            }`}
          >
            {product.availability === "Out of Stock"
              ? "Out of Stock"
              : inCart
              ? "Already in Cart"
              : "Add to Cart"}
          </button>
</div>
      </div>
    </div>
  );
};

export default ProductDetail;
