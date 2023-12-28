import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartPageItem from "../../component/cart-page-item/cart-page-item.component";
import "./checkout.styles.scss";

const CartPage = () => {
  const { cartItems, cartPrice } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CartPageItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total Prize: {cartPrice}</span>
    </div>
  );
};

export default CartPage;
