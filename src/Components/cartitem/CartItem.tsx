import { useEffect, useState } from "react";
import Button from "../button/Button";
import { getSingleProduct } from "../../services/api";
import { Product } from "../../types/server";

interface ICartItem {
  id: number;
  qty: number;
}
function CartItem({ id, qty }: ICartItem) {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    getSingleProduct(id).then((data) => {
      setProduct(data);
    });
  }, []);
  return (
    <div className="flex flex-row-reverse mt-4 border-b pb-2">
      <img className="rounded w-28" src={product?.image} />
      <div className="mr-4">
        <h3 className="text-right">{product?.title}</h3>

        <div className="mt-2">
          <Button className="mr-2" variant="danger">
            remove
          </Button>

          <Button className="mr-2" variant="primary">
            +
          </Button>
          <span className="mr-2">{qty}</span>
          <Button className="mr-2" variant="primary">
            -
          </Button>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
