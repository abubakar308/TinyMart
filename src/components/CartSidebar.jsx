import { FaTimes } from "react-icons/fa";
import { useCart } from "../hooks/useCart";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, increaseQty, decreaseQty, totalAmount, clearCart } = useCart();
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
          <button onClick={onClose}>
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
                className="flex items-center justify-between border-b pb-2"
              >
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p>
                    ${item.price} × {item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="px-2 py-1 bg-indigo-200 rounded"
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-indigo-200 rounded"
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
            <span>${totalAmount}</span>
          </div>

          <label
            htmlFor="checkout-modal"
            className={`btn btn-primary w-full ${cartItems.length === 0 && "btn-disabled"}`}
          >
            Checkout
          </label>
        </div>
      </div>


      {/* Modal toggle checkbox - DaisyUI needs this */}
<input type="checkbox" id="checkout-modal" className="modal-toggle" />

{/* Checkout Modal */}
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-xl mb-4">Checkout</h3>

    <form
onSubmit={(e) => {
    e.preventDefault();
    alert("✅ Order Placed Successfully!");
    clearCart(); // 🧹 Clears cart items
    document.getElementById("checkout-modal").checked = false;
  }}
      className="space-y-4"
    >
      <input
        type="text"
        placeholder="Your Name"
        className="input input-bordered w-full"
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="input input-bordered w-full"
        required
      />
      <textarea
        placeholder="Address"
        className="textarea textarea-bordered w-full"
        required
      />

      <div className="modal-action">
        <button type="submit" className="btn btn-primary">
          Submit Order
        </button>
        <label htmlFor="checkout-modal" className="btn">
          Cancel
        </label>
      </div>
    </form>
  </div>
</div>
    </>
  );
};

export default CartSidebar;
