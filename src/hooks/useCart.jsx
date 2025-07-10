// hooks/useCart.js

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove item from cart
const removeFromCart = (id) => {
  setCartItems(cartItems.filter((item) => item.id !== id));
};

const isInCart = (id) => cartItems.find((item) => item.id === id);


  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const clearCart = () => {
    setCartItems([]);
  };

  return (
  <CartContext.Provider
    value={{ cartItems, addToCart, removeFromCart, isInCart, increaseQty, decreaseQty, totalAmount, clearCart }}
  >
    {children}
  </CartContext.Provider>
);

};
