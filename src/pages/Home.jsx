import ProductList from "../components/ProductList";
import banner from '../assets/banner.jpg'

const Home = () => {
    return (
       <div className="space-y-8">
     {/* Hero Section optional */}
      <section className="relative">
        <img
          src={banner}
          alt="TinyMart Banner"
           className="w-full h-48 sm:h-60 md:h-72 lg:h-96 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl font-bold">Welcome to TinyMart</h1>
          <p className="text-lg">Your one-stop shop for awesome products!</p>
        </div>
      </section>

      {/* Product List Section */}
      <ProductList />
    </div>
    );
};

export default Home;