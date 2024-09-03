import { Link } from "react-router-dom";
import Container from "../../Components/Navbar/container/Container";
import ProductItem from "../../Components/productitem/ProductItem";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import { Product } from "../../types/server";

function Store() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getProduct().then((result) => {
      setProducts(result);
    });
  }, []);

  return (
    <>
      <Container>
        <h1 className="text-neutral-500 text-4xl font-bold m-4">NEW PRODUCT</h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <ProductItem {...item} />
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
export default Store;
