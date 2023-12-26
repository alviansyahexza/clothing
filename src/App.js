import Home from "./component/router/home/home.component";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./component/router/navigation/navigation.component";
import AuthenticationComponent from "../src/component/authentication/authentication.component";
import ShopComponent from "./component/shop/shop.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopComponent />} />
        <Route path="/auth" element={<AuthenticationComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
