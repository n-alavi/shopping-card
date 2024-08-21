import { Link } from "react-router-dom";
import Container from "../container/Container";

function Navbar() {
  return (
    <div className="h-9 border-b shadow flex items-center ">
      <Container>
        <div className="flex justify-between flex-row-reverse ">
          <ul className="flex gap-4">
            <li>
              <Link to="/">خانه</Link>
            </li>
            <li>
              <Link to="/store">فروشگاه</Link>
            </li>
          </ul>
          <div>
            <button>سبد خرید</button>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Navbar;
