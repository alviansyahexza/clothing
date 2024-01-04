import CategoriesPreviewComponent from "../categories-preview/categories-preview.component";
import { Route, Routes } from "react-router-dom";
import Category from "../category/category.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviewComponent />}></Route>
      <Route path="/:category" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
