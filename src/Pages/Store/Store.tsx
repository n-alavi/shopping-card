import Container from "../../Components/Navbar/container/Container";
import ProductItem from "../../Components/productitem/ProductItem";

function Store() {
  return (
    <>
      <h1 className="text-right mt-4 mx-4">جدیدترین محصولات</h1>
      <Container>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </Container>
    </>
  );
}
export default Store;
