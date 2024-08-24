import Button from "../../Components/button/Button";
import CartItem from "../../Components/cartitem/CartItem";
import Container from "../../Components/Navbar/container/Container";

function Cart() {
  return (
    <div>
      <Container>
        <div className="">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
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