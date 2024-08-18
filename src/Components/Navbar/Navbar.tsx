import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-9 border-b shadow flex justify-between flex-row-reverse items-center ">
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
  );
}
export default Navbar;
