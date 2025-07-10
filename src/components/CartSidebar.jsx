import { FaTimes } from "react-icons/fa";
import { useCart } from "../hooks/useCart";
import CheckoutModal from "./shared/CheckoutModal";
import { AiTwotoneDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty, totalAmount } = useCart();
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button className="cursor-pointer" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-400">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
  key={item.id}
  className="flex items-center gap-4 border-b pb-3"
>
  {/* Product Image */}
  <img
    src={item.image}
    alt={item.title}
    className="w-16 h-16 object-cover rounded"
  />

  {/* Product Info */}
  <div className="flex-1">
    <h4 className="font-semibold text-sm">{item.title}</h4>
    <p className="text-xs text-gray-500">
      ${item.price} * {item.quantity} ={" "}
      <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
    </p>
  </div>

  {/* Quantity Controls */}
  <div className="flex items-center gap-1">
    <button
      className="px-2 py-1 cursor-pointer bg-indigo-200 rounded text-sm"
      onClick={() => decreaseQty(item.id)}
    >
      -
    </button>
    <span className="px-1">{item.quantity}</span>
    <button
      className="px-2 py-1 cursor-pointer bg-indigo-200 rounded text-sm"
      onClick={() => increaseQty(item.id)}
    >
      +
    </button>
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
  className="text-red-600 cursor-pointer"> <AiTwotoneDelete /> </button>
</div>

            ))
          )}
        </div>

        <div className="p-4 border-t">
          <div className="flex justify-between mb-4 text-lg font-semibold">
            <span>Total:</span>
           <span>${totalAmount.toFixed(2)}</span>
          </div>

          <button
            onClick={() => document.getElementById("checkout_modal").showModal()}
           className={`btn w-full ${cartItems.length === 0 ? "btn-disabled" : "btn-primary"}`}
          >
            Checkout
          </button>
        </div>
      </div>

{/* Modal show using <dialog> */}
 <CheckoutModal />

    </>
  );
};

export default CartSidebar;
