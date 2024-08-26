import Button from "../button/Button";

interface ICartItem {
  id: number;
  qty: number;
}
function CartItem({}: ICartItem) {
  return (
    <div className="flex flex-row-reverse mt-4 border-b pb-2">
      <img
        className="rounded w-28"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHihA-fyXMXY4nGNl0Ro6E-hX85EirVYaoVQ&s"
      />
      <div className="mr-4">
        <h3 className="text-right">عنوان محصول</h3>

        <div className="mt-2">
          <Button className="mr-2" variant="danger">
            remove
          </Button>

          <Button className="mr-2" variant="primary">
            +
          </Button>
          <span className="mr-2">{2}</span>
          <Button className="mr-2" variant="primary">
            -
          </Button>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
