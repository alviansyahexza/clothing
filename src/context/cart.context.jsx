import { createContext, useState } from "react";

const addItem = (cartItems, product) => {
  const sameIndex = cartItems.findIndex((it) => it.id === product.id);
  if (sameIndex !== -1) {
    const tempItem = cartItems[sameIndex];
    tempItem.count++;
    cartItems[sameIndex] = tempItem;
  } else {
    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      count: 1,
    };
    cartItems.push(newItem);
  }
  return [...cartItems];
};

export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (product) => {
    setCartItems(addItem(cartItems, product));
  };

  const value = {
    isCartOpen,
    setCartOpen,
    cartItems,
    addItemToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
