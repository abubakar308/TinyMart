import { FaTimes } from "react-icons/fa";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, increaseQty, decreaseQty, totalAmount, clearCart } = useCart();
  const navigate = useNavigate()
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
  {/* ✅ Product Image */}
  <img
    src={item.image}
    alt={item.title}
    className="w-16 h-16 object-cover rounded"
  />

  {/* ✅ Product Info */}
  <div className="flex-1">
    <h4 className="font-semibold text-sm">{item.title}</h4>
    <p className="text-xs text-gray-500">
      ${item.price} × {item.quantity} ={" "}
      <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
    </p>
  </div>

  {/* ✅ Quantity Controls */}
  <div className="flex items-center gap-1">
    <button
      className="px-2 py-1 bg-indigo-200 rounded text-sm"
      onClick={() => decreaseQty(item.id)}
    >
      −
    </button>
    <span className="px-1">{item.quantity}</span>
    <button
      className="px-2 py-1 bg-indigo-200 rounded text-sm"
      onClick={() => increaseQty(item.id)}
    >
      +
    </button>
  </div>
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

{/* ✅ Modal structure using <dialog> */}
<dialog id="checkout_modal" className="modal">
  <div className="modal-box w-11/12 max-w-lg">
    <h3 className="font-bold text-xl mb-4 text-indigo-600">Checkout</h3>

    <form
      method="dialog"
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
         clearCart(); // ✅ Clear the cart
        alert("✅ Order Placed Successfully!");
        document.getElementById("checkout_modal").close();
          navigate("/")
      }}
    >
      {/* Name */}
      <input
        type="text"
        placeholder="Your Name"
        className="input input-bordered w-full"
        required
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        className="input input-bordered w-full"
        required
      />

      {/* Address */}
      <textarea
        placeholder="Address"
        className="textarea textarea-bordered w-full"
        required
      ></textarea>

      {/* Action buttons */}
      <div className="modal-action">
        <button clearCart type="submit" className="btn btn-primary">
          Submit Order
        </button>
        <button
          type="button"
          onClick={() => document.getElementById("checkout_modal").close()}
          className="btn"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</dialog>

    </>
  );
};

export default CartSidebar;
