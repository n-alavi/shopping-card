import { Products } from "../../types/server";

type ProductItem = Products;

function ProductItem({}: ProductItem) {
  return (
    <div className="shadow border rounded">
      <img
        className="rounded"
        src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Laptop-Go-3-001-3000x1682:VP2-859x540"
      />
      <div className="flex flex-row-reverse justify-between p-4">
        <h3>عنوان محصول</h3>
        <span>55$</span>
      </div>
      <div className="p-2">
        <p className="line-clamp-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error sint
          cum laborum harum qui nam tempore! Dolor consequatur eaque, fugit
          adipisci nostrum eveniet! Voluptatum magnam pariatur ut nesciunt!
          Natus, cupiditate?
        </p>
      </div>
    </div>
  );
}
export default ProductItem;
