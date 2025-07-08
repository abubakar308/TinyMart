import { FaTimes } from "react-icons/fa";
import { useCart } from "../hooks/useCart";
  // example custom hook or context

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, increaseQty, decreaseQty, totalAmount } = useCart();

  return (
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
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-2"
          >
            <div>
              <h4 className="font-semibold">{item.title}</h4>
              <p>${item.price} × {item.quantity}</p>
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
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex justify-between mb-4 text-lg font-semibold">
          <span>Total:</span>
          <span>${totalAmount}</span>
        </div>

        <label htmlFor="checkout-modal" className="btn btn-primary w-full">
          Checkout
        </label>
      </div>
    </div>
  );
};

export default CartSidebar;
