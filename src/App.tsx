import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Store from "./Pages/Store/Store";
import Layout from "./Components/layout/Layout";
import ProductPage from "./Pages/productpage/ProductPage";
import Card from "./Pages/card/Card";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </Layout>
  );
}

export default App;
