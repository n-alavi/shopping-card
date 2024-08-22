import { useParams } from "react-router-dom";

function ProductPage() {
  const params = useParams();
  return (
    <div>
      <h1 className="text-9xl">{params.id}</h1>
    </div>
  );
}
export default ProductPage;
