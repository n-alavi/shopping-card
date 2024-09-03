import Button from "../../Components/button/Button";
import Container from "../../Components/Navbar/container/Container";
import { useShoppingCartContext } from "../../contex/ShoppingCartContext";

function Login() {
  const { handleLogin } = useShoppingCartContext();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <Container>
        <div className="bg-gray-800 shadow-lg rounded-lg p-10 max-w-sm w-full">
          <h2 className="text-3xl font-bold text-center text-gold mb-6">
            Login
          </h2>
          <input
            type="text"
            placeholder="username"
            className="w-full p-4 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gold transition duration-200"
          />
          <input
            type="password"
            placeholder="password0"
            className="w-full p-4 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gold transition duration-200"
          />
          <Button
            onClick={handleLogin}
            className="w-full bg-gold text-gray-900 font-semibold py-3 rounded hover:bg-yellow-600 transition duration-200"
          >
            Login
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Login;
