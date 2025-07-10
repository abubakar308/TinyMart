import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-indigo-50 text-center px-4">
      <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
      <p className="text-2xl font-semibold text-gray-700 mb-2">Oops! Page Not Found</p>
      <p className="text-gray-500 mb-6">The page you are looking for does not exist or has been moved.</p>
      
      <Link to="/" className="btn btn-primary flex items-center gap-2">
        <FaArrowLeft /> Back to Home
      </Link>
    </div>
  );
};

export default Error;
