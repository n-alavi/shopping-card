import Button from "../../Components/button/Button";
import CartItem from "../../Components/cartitem/CartItem";
import Container from "../../Components/Navbar/container/Container";
import { useShoppingCartContext } from "../../contex/ShoppingCartContext";

function Cart() {
  const { cartItems } = useShoppingCartContext();

  // Calculate total price and other metrics
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.qty; // Calculate using price and quantity
  }, 0);

  const discountRate = 0.1; // 10% discount
  const discount = totalPrice * discountRate; // Calculate discount
  const finalPrice = Math.max(totalPrice - discount, 0); // Ensure final price is not negative

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center py-6">
      <Container>
        <div className="bg-gray-800 shadow-lg rounded-lg p-4 md:p-6 lg:p-8">
          <h2 className="text-3xl font-bold text-white text-right mb-6">
            سبد خرید
          </h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} /> // Assuming item has an 'id' key
            ))}
          </div>
          <div className="mt-4 text-right bg-gray-700 text-white p-4 rounded-lg">
            <p className="text-sm md:text-base">
              قیمت کل: <span>{totalPrice.toLocaleString()} تومان</span>
            </p>
            <p className="text-sm md:text-base">
              تخفیف شما: <span>{discount.toLocaleString()} تومان</span>
            </p>
            <p className="font-bold text-lg md:text-xl">
              قیمت نهایی: <span>{finalPrice.toLocaleString()} تومان</span>
            </p>
          </div>
          <Button className="mt-6 w-full bg-gold text-gray-900 py-2 rounded hover:bg-yellow-600 transition duration-200">
            ثبت سفارش
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
