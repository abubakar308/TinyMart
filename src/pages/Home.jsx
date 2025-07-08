import ProductList from "../components/ProductList";

const Home = () => {
    return (
       <div className="space-y-8">
      {/* Optional Hero */}
      <section className="text-center">
        <h1 className="text-3xl font-bold text-indigo-600">Welcome to TinyMart</h1>
        <p className="text-gray-600">Your one-stop shop for awesome products!</p>
      </section>

      {/* Required: Product List Section */}
      <ProductList />
    </div>
    );
};

export default Home;