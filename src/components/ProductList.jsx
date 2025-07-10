import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const [products, setProducts] = useState([]);

   useEffect(() => {
  fetch("/products.json")
    .then(res => res.json())
    .then(data => {
      setProducts(data);
    });
}, []);
    return (
       <div className="flex flex-wrap gap-4">
  {products.map(product => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
    );
};

export default ProductList;