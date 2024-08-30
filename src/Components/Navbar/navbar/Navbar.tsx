import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCartContext } from "../../../contex/ShoppingCartContext";
import Button from "../../button/Button";

function Navbar() {
  const { cartQty, handleLogout } = useShoppingCartContext();
  return (
    <div className="h-9 border-b shadow flex items-center m-5">
      <Container>
        <div className="flex justify-between flex-row-reverse ">
          <ul className="flex gap-4 flex-row-reverse">
            <li className="ml-4 ">
              <Link to="/">خانه</Link>
            </li>
            <li className="ml-4 ">
              <Link to="/store">فروشگاه</Link>
            </li>
          </ul>
          <div className="relative">
            <Button onClick={handleLogout}>Logout</Button>
            <Link to="/cart">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-basket"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5" />
                </svg>
              </button>
              <span className="absolute flex justify-center items-center bg-red-500 rounded-full w-5 h-5 -top-1 -right-4 text-white text-xs">
                {cartQty !== 0 ? cartQty : ""}
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Navbar;
