import { createContext, useEffect, useState } from "react";

const addItem = (cartItems, product) => {
  const sameIndex = cartItems.findIndex((it) => it.id === product.id);
  if (sameIndex !== -1) {
    const tempItem = cartItems[sameIndex];
    tempItem.count++;
    cartItems[sameIndex] = tempItem;
  } else {
    const newItem = {
      ...product,
      count: 1,
    };
    cartItems.push(newItem);
  }
  return [...cartItems];
};

const resizeItem = (cartItems, productId, increment) => {
  const sameIndex = cartItems.findIndex((it) => it.id === productId);
  if (sameIndex === -1) return cartItems;

  if (increment) {
    const temp = cartItems[sameIndex];
    temp.count++;
    cartItems[sameIndex] = temp;
  } else {
    if (cartItems[sameIndex].count === 1)
      return removeItem(cartItems, productId);
    const temp = cartItems[sameIndex];
    temp.count--;
    cartItems[sameIndex] = temp;
  }
  return [...cartItems];
};

const removeItem = (cartItems, productId) => {
  const sameIndex = cartItems.findIndex((it) => it.id === productId);
  if (sameIndex === -1) return cartItems;
  cartItems.splice(sameIndex, 1);
  return [...cartItems];
};

export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  resizeItemInCart: () => {},
  cartPrice: 0,
  removeItemInCheckout: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartPrice, setCartPrize] = useState(0);

  useEffect(() => {
    const newCount = cartItems.reduce(
      (accumulator, current) => current.count + accumulator,
      0
    );
    setCartCount(newCount);
    const newPrize = cartItems.reduce(
      (accumulator, current) => current.count * current.price + accumulator,
      0
    );
    setCartPrize(newPrize);
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartItems(addItem(cartItems, product));
  };

  const resizeItemInCart = (productId, increment) => {
    setCartItems(resizeItem(cartItems, productId, increment));
  };

  const removeItemInCheckout = (productId) => {
    setCartItems(removeItem(cartItems, productId));
  };

  const value = {
    isCartOpen,
    setCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    resizeItemInCart,
    cartPrice,
    removeItemInCheckout,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
