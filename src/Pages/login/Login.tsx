import Button from "../../Components/button/Button";
import Container from "../../Components/Navbar/container/Container";
import { useShoppingCartContext } from "../../contex/ShoppingCartContext";

function Login() {
  const { handleLogin } = useShoppingCartContext();

  return (
    <div>
      <Container>
        <div className="bg-slate-300 p-12 rounded">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password0" />
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </Container>
    </div>
  );
}

export default Login;
