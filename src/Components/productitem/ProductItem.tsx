import { Product } from "../../types/server";

type TProductItem = Product;

function ProductItem({ title, price, description, image }: TProductItem) {
  return (
    <div className="shadow-md border rounded-lg overflow-hidden flex flex-col h-fit transition-transform transform hover:shadow-lg hover:scale-105">
      <div className="relative w-full h-80 md:h-64 lg:h-80">
        <img
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform "
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col justify-between p-4 h-full">
        <div>
          <h3 className="line-clamp-1 font-bold text-lg mb-2">{title}</h3>
          <p className="line-clamp-3 text-left text-gray-500">{description}</p>
        </div>
        <span className="font-bold text-xl mt-2">${price}</span>
      </div>
    </div>
  );
}

export default ProductItem;
