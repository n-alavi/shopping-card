import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCartContext } from "../../../contex/ShoppingCartContext";
import Button from "../../button/Button";
import { useState } from "react";

function Navbar() {
  const { cartQty, handleLogout } = useShoppingCartContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-neutral-600 text-white shadow-lg py-2 px-4 w-full rounded-lg">
      <Container>
        <div className="flex justify-between items-center">
          {/*  Icon for Mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
              width="24"
              height="24"
            >
              <path
                fillRule="evenodd"
                d="M2 3h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 5h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 5h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>

          {/* Desktop Navigation Menu */}
          <ul className="hidden md:flex gap-6 flex-row-reverse">
            <li>
              <Link to="/" className="hover:text-gray-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/store" className="hover:text-gray-300 transition">
                Store
              </Link>
            </li>
          </ul>
          <img
            className="w-10 rounded-3xl hidden lg:block md:block"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGoz2N1_48Wjn1VP_XpV-yGRwR5C6uBpqzfw&s"
          />

          {/* Logout Button and Cart Icon */}
          <div className="relative">
            <Button onClick={handleLogout} className="hidden md:inline">
              Logout
            </Button>
            <Link to="/cart" className="relative">
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-neutral-700 rounded-lg">
            <ul className="flex flex-col items-center divide-y divide-gray-500">
              <li className="py-2">
                <Link to="/" className="hover:text-gray-300 transition block">
                  Home
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/store"
                  className="hover:text-gray-300 transition block"
                >
                  Store
                </Link>
              </li>
              <li className="py-2">
                <Button onClick={handleLogout} className="w-full text-center">
                  Logout
                </Button>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Navbar;
