// components/shared/CheckoutModal.jsx
import Swal from "sweetalert2";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router";

const CheckoutModal = () => {
  const { clearCart } = useCart();
  const navigate = useNavigate();
  
const handleSubmit = async (e) => {
  e.preventDefault();

  clearCart();

  const modal = document.getElementById("checkout_modal");

  // Close modal before showing the alert
  if (modal && typeof modal.close === "function") {
    modal.close();
  }

  //show the SweetAlert after closing the modal
  await Swal.fire({
    title: "🎉 Order Placed Successfully!",
    text: "Thank you for your purchase.",
    icon: "success",
    confirmButtonText: "Go to Home",
    confirmButtonColor: "#6366f1",
  });

  navigate("/");
};

  return (
    <dialog id="checkout_modal" className="modal">
      <div className="modal-box w-11/12 max-w-lg">
        <h3 className="font-bold text-xl mb-4 text-indigo-600">Checkout</h3>

        <form className="space-y-4" onSubmit={handleSubmit}>
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
