import Home from "./router/home/home.component";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./router/navigation/navigation.component";
import AuthenticationComponent from "./router/authentication/authentication.component";
import ShopComponent from "./router/shop/shop.component";
import CartPage from "./router/cart-page/cart-page.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopComponent />} />
        <Route path="/auth" element={<AuthenticationComponent />} />
        <Route path="/cart-page" element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default App;
