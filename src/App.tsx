import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Store from "./Pages/Store/Store";
import Layout from "./Components/layout/Layout";
import ProductPage from "./Pages/productpage/ProductPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/productpage/:id" element={<ProductPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
