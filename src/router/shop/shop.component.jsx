import { useContext } from "react";
import { ProductContext } from "../../context/product.context";
import ProductCard from "../../component/product-card/product-card.component";
import "./shop.styles.scss";

const ShopComponent = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ShopComponent;