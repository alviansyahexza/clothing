import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../asset/crown.svg";
import "../navigation/navigation.styles.scss";
import { Fragment, useContext } from "react";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import ChartIcon from "../../component/chart-icon/chart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";

const NavigationBar = () => {
  const { userState } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {userState ? (
            <Link className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <ChartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
