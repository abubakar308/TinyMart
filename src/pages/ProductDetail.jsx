import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('/products.json') // Fetch the whole array
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item.id.toString() === id);
        setProduct(found);
      });
  }, [id]);

  if (!product) return <p className="text-center text-red-400">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-6">
        {/* Image */}
        <div className="h-80 w-80">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain rounded-md shadow-sm p-4"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-bold text-indigo-700">{product.title}</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            {product.description}
          </p>
          <p className="text-xl font-semibold text-indigo-600">Price: ${product.price}</p>

          <button className="mt-4 w-fit px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;