import Button from "../../Components/button/Button";
import CartItem from "../../Components/cartitem/CartItem";
import Container from "../../Components/Navbar/container/Container";
import { useShoppingCartContext } from "../../contex/ShoppingCartContext";

function Cart() {
  const { cartItems } = useShoppingCartContext();

  return (
    <div>
      <Container>
        <div className="">
          {cartItems.map((item) => (
            <CartItem {...item} />
          ))}
        </div>
        <div className="text-right bg-slate-200 p-4">
          <p>قیمت کل:2000 تومان</p>
          <p>تخفیف شما:200 تومان</p>
          <p>قیمت نهایی:1800 تومان</p>
        </div>

        <Button className="mt-2" variant="success">
          ثبت سفارش
        </Button>
      </Container>
    </div>
  );
}
export default Cart;
