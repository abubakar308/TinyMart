import ProductList from "../components/ProductList";
import banner from '../assets/banner.jpg'

const Home = () => {
    return (
       <div className="space-y-8">
        
     {/* Hero Section optional */}
    <section className="relative w-full max-w-7xl mx-auto rounded-lg overflow-hidden shadow-lg mb-10">
  {/* 🔹 Background Image */}
  <img
    src={banner}
    alt="TinyMart Banner"
    className="w-full h-auto object-cover"
  />

  {/* 🔹 Overlay Content */}
  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 text-center space-y-3">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Welcome to TinyMart</h1>
    <p className="text-base sm:text-lg md:text-xl">
      Your one-stop shop for awesome products!
    </p>
    <button className="btn btn-primary mt-2">Shop Now</button>
  </div>
</section>


      {/* Product List Section */}
      <ProductList />
    </div>
    );
};

export default Home;