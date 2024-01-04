import { useContext } from "react";
import { CategoriesContext } from "../../context/category.context";
import CategoryPreview from "../../component/category-preview/category-preview.component";

const CategoriesPreviewComponent = () => {
  const { categories } = useContext(CategoriesContext);
  console.log(categories);
  return (
    <>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return <CategoryPreview key={title} title={title} items={products} />;
      })}
    </>
  );
};

export default CategoriesPreviewComponent;
