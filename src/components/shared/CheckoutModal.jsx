// components/shared/CheckoutModal.jsx
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router";

const CheckoutModal = () => {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  return (
    <dialog id="checkout_modal" className="modal">
      <div className="modal-box w-11/12 max-w-lg">
        <h3 className="font-bold text-xl mb-4 text-indigo-600">Checkout</h3>

        <form
          method="dialog"
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            clearCart();
            alert("✅ Order Placed Successfully!");
            document.getElementById("checkout_modal").close();
            navigate("/");
          }}
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
          ></textarea>

          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
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
  );
};

export default CheckoutModal;
