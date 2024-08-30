import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Store from "./Pages/Store/Store";
import Layout from "./Components/layout/Layout";
import ProductPage from "./Pages/productpage/ProductPage";
import Cart from "./Pages/card/Cart";
import { ShoppingCartProvider } from "./contex/ShoppingCartContext";
import PrivateRoute from "./Components/privateroute/PrivateRoute";
import Login from "./Pages/login/Login";

function App() {
  return (
    <ShoppingCartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Layout>
    </ShoppingCartProvider>
  );
}

export default App;
