import { useEffect, useState } from "react";
import { Link } from "react-router";
import ProductCard from "./ProductCard";

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
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {products.map(product => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
    );
};

export default ProductList;