import { useParams } from "react-router-dom";
import Container from "../../Components/Navbar/container/Container";

function ProductPage() {
  const params = useParams();

  return (
    <div>
      <Container>
        <div className=" h-96 shadow mt-4 grid grid-cols-12">
          <div className="col-span-10 bg-slate-900"></div>
          <div className="bg-red-300 col-span-2 p-4">
            <img
              className="rounded"
              src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Laptop-Go-3-001-3000x1682:VP2-859x540"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
export default ProductPage;
