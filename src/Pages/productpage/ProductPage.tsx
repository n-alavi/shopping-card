import { useParams } from "react-router-dom";
import Container from "../../Components/Navbar/container/Container";
import Button from "../../Components/button/Button";
import { useEffect, useState } from "react";
import { getSingleProduct } from "../../services/api";
import { Product } from "../../types/server";
import { useShoppingCartContext } from "../../contex/ShoppingCartContext";

function ProductPage() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>();

  const { handleIncreaseProductQty, cartItems, handleDecreaseProductQty } =
    useShoppingCartContext();
  useEffect(() => {
    getSingleProduct(params.id as string).then((data) => {
      setProduct(data);
    });
  }, []);
  console.log(cartItems);

  return (
    <div>
      <Container>
        <div className="h-96 shadow mt-4 grid grid-cols-12">
          <div className="col-span-10  p-6">
            <h1 className="text-right">{product?.title}</h1>
            <div>
              <p className="text-right">{product?.price}$</p>
              <p className="text-right">{product?.description}</p>
            </div>
          </div>
          <div className=" col-span-2 bg-sky-200 p-4">
            <img className="rounded" src={product?.image} />
            <Button
              onClick={() =>
                handleIncreaseProductQty(parseInt(params.id as string))
              }
              className="w-full mt-2"
              variant="primary"
            >
              add to cart
            </Button>

            <Button
              className="w-full mt-2"
              variant="primary"
              onClick={() =>
                handleDecreaseProductQty(parseInt(params.id as string))
              }
            >
              -
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default ProductPage;
