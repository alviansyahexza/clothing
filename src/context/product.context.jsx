import { createContext, useState } from "react";
import SHOP_DATA from "../asset/shop-data.json";

export const ProductContext = createContext({
  products: null,
  setProducts: () => {},
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
