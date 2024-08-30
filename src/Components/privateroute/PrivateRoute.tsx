import { Navigate, Outlet } from "react-router-dom";
import { useShoppingCartContext } from "../../contex/ShoppingCartContext";

function PrivateRoute() {
  const { isLogin } = useShoppingCartContext();
  return <>{isLogin ? <Outlet /> : <Navigate to="/login" />}</>;
}
export default PrivateRoute;
