import "./cart-icon.styles.scss";
import { ReactComponent as ShopingChart } from "../../asset/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const ChartIcon = () => {
  const { isCartOpen, setCartOpen } = useContext(CartContext);
  const toogleCart = () => {
    setCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toogleCart}>
      <ShopingChart className="shoping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default ChartIcon;
