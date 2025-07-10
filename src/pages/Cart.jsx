import { AiTwotoneDelete } from "react-icons/ai";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router";
import Swal from "sweetalert2";
import CheckoutModal from "../components/shared/CheckoutModal";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty, totalAmount } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-200 text-left text-sm">
                  <th className="p-3">Product</th>
                  <th className="p-3">Unit Price</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Subtotal</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-t text-sm">
                    <td className="flex items-center gap-4 p-3">
                      <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                      <p>{item.title}</p>
                    </td>
                    <td className="p-3">$ {item.price}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2 border rounded w-fit px-2">
                        <button onClick={() => decreaseQty(item.id)} className="px-2 text-lg cursor-pointer font-bold">-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQty(item.id)} className="px-2 cursor-pointer text-lg font-bold">+</button>
                      </div>
                    </td>
                    <td className="p-3">$ {item.price * item.quantity}</td>
                    <td className="p-3">
                   <button
  onClick={() => {
    Swal.fire({
      title: "Are you sure?",
      text: "This item will be removed from the cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(item.id); // ✅ Pass correct ID
        Swal.fire({
          title: "Deleted!",
          text: "Item has been removed from your cart.",
          icon: "success",
          timer: 1200,
          showConfirmButton: false,
        });
      }
    });
  }}
  className="text-red-500 cursor-pointer text-xl"
>
  <AiTwotoneDelete />
</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="border rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-4 mb-2">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">$ {item.price}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 border rounded px-2">
                    <button onClick={() => decreaseQty(item.id)} className="px-2 cursor-pointer text-lg font-bold">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)} className="px-2 cursor-pointer text-lg font-bold">+</button>
                  </div>
                  <div className="text-sm">
                    Subtotal: <span className="font-medium">$ {item.price * item.quantity}</span>
                  </div>
                <button
  onClick={() => {
    Swal.fire({
      title: "Are you sure?",
      text: "This item will be removed from the cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(item.id); // Pass correct ID
        Swal.fire({
          title: "Deleted!",
          text: "Item has been removed from your cart.",
          icon: "success",
          timer: 1200,
          showConfirmButton: false,
        });
      }
    });
  }}
  className="text-red-500 cursor-pointer text-xl"
>
  <AiTwotoneDelete />
</button>
                </div>
              </div>
            ))}
          </div>

          {/* Total and Action */}
          <div className="text-center mt-10">
            <h2 className="text-xl font-semibold">
              Total Amount: <span className="text-blue-600 text-2xl">৳ {totalAmount}</span>
            </h2>

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <button
               onClick={() => document.getElementById("checkout_modal").showModal()}
              className="bg-indigo-600 cursor-pointer text-white px-6 py-2 rounded hover:bg-blue-700">
                Checkout
              </button>
              <Link to="/">
                <button className="bg-indigo-600 cursor-pointer text-white px-6 py-2 rounded hover:bg-blue-700">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>

          {/* Modal structure using <dialog> */}
 <CheckoutModal />
        </>
      )}
    </div>
  );
};

export default Cart;
