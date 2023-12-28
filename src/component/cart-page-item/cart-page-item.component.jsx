import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.styles.scss";

const CartPageItem = ({ cartItem }) => {
  const { name, price, count, imageUrl, id } = cartItem;
  const { resizeItemInCart, removeItemInCheckout } = useContext(CartContext);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            resizeItemInCart(id, false);
          }}
        >
          &#10094;
        </div>
        <span className="value">{count}</span>
        <div
          className="arrow"
          onClick={() => {
            resizeItemInCart(id, true);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItemInCheckout(id)}>
        &#10005;
      </div>
    </div>
  );
};

export default CartPageItem;
