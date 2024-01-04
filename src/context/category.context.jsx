import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../asset/shop-data.js";
import { addCollectionsAndDocuments } from "../utils/firebase/firebase.utils.js";
import { getCategoriesAndDocs } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categories: [],
  setCategories: () => {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCategoriesAndDocs();
      setCategories(categories);
    };
    getCategories();
  }, []);

  console.log(getCategoriesAndDocs());
  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
