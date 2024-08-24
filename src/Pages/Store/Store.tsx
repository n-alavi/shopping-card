import { Link } from "react-router-dom";
import Container from "../../Components/Navbar/container/Container";
import ProductItem from "../../Components/productitem/ProductItem";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";

function Store() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProduct().then((result) => {
      setProducts(result);
    });
  }, []);
  return (
    <>
      <Container>
        <h1 className="text-right mt-4 mx-4">جدیدترین محصولات</h1>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {products.map((item) => (
            <Link key= to={`/product/${1}`}>
              <ProductItem />
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
export default Store;
