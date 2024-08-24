import { Product } from "../../types/server";

type TProductItem = Product;

function ProductItem({ title, price, description, image }: TProductItem) {
  return (
    <div className="shadow border rounded ">
      <img className="rounded" src={image} />
      <div className="flex justify-between p-4 ">
        <h3 className="line-clamp-1 font-bold w-52">{title}</h3>
        <span className="font-bold ">{price}$</span>
      </div>
      <div className="p-2">
        <p className="line-clamp-2 text-left text-gray-500">{description}</p>
      </div>
    </div>
  );
}
export default ProductItem;
