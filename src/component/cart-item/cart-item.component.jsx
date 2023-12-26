import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, price, count } = cartItem;
  return (
    <div>
      <h2>{name}</h2>
      <span>
        {count} * {price}
      </span>
    </div>
  );
};

export default CartItem;
