import { Link } from "react-router-dom";
import Container from "../../Components/Navbar/container/Container";
import ProductItem from "../../Components/productitem/ProductItem";

function Store() {
  return (
    <>
      <h1 className="text-right mt-4 mx-4">جدیدترین محصولات</h1>
      <Container>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <Link to={`/product/${1}`}>
            <ProductItem />
          </Link>
          <Link to={`/product/${2}`}>
            <ProductItem />
          </Link>
          <Link to={`/product/${3}`}>
            <ProductItem />
          </Link>
          <Link to={`/product/${4}`}>
            <ProductItem />
          </Link>
          <Link to={`/product/${5}`}>
            <ProductItem />
          </Link>
        </div>
      </Container>
    </>
  );
}
export default Store;
