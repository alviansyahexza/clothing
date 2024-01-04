import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, items }) => {
  return (
    <div className="category-preview-container">
      <h2 className="title">
        <Link to={`/shop/${title}`}>{title.toUpperCase()}</Link>
      </h2>
      <div className="preview">
        {items.slice(0, 4).map((item) => {
          return <ProductCard product={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default CategoryPreview;
