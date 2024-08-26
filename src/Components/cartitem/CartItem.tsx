import { useEffect, useState } from "react";
import Button from "../button/Button";
import { getSingleProduct } from "../../services/api";
import { Product } from "../../types/server";
import { useShoppingCartContext } from "../../contex/ShoppingCartContext";
import { Link } from "react-router-dom";

interface ICartItem {
  id: number;
  qty: number;
}
function CartItem({ id, qty }: ICartItem) {
  const [product, setProduct] = useState<Product>();

  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();

  useEffect(() => {
    getSingleProduct(id).then((data) => {
      setProduct(data);
    });
  }, []);
  return (
    <div className="flex flex-row-reverse mt-4 border-b pb-2">
      <Link to={`/product/${id}`}>
        <img className="rounded w-28" src={product?.image} />
      </Link>

      <div className="mr-4">
        <h3 className="text-right">{product?.title}</h3>

        <div className="mt-2">
          <Button
            onClick={() => handleRemoveProduct(id)}
            className="mr-2"
            variant="danger"
          >
            remove
          </Button>

          <Button
            onClick={() => handleIncreaseProductQty(id)}
            className="mr-2"
            variant="primary"
          >
            +
          </Button>
          <span className="mr-2">{qty}</span>
          <Button
            onClick={() => handleDecreaseProductQty(id)}
            className="mr-2"
            variant="primary"
          >
            -
          </Button>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
