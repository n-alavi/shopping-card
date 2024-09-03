// import { useParams } from "react-router-dom";
// import Container from "../../Components/Navbar/container/Container";
// import Button from "../../Components/button/Button";
// import { useEffect, useState } from "react";
// import { getSingleProduct } from "../../services/api";
// import { Product } from "../../types/server";
// import { useShoppingCartContext } from "../../contex/ShoppingCartContext";

// function ProductPage() {
//   const params = useParams<{ id: string }>();
//   const [product, setProduct] = useState<Product>();

//   const {
//     handleIncreaseProductQty,
//     cartItems,
//     handleDecreaseProductQty,
//     getProductQty,
//     handleRemoveProduct,
//   } = useShoppingCartContext();
//   useEffect(() => {
//     getSingleProduct(params.id as string).then((data) => {
//       setProduct(data);
//     });
//   }, []);
//   console.log(cartItems);

//   return (
//     <div>
//       <Container>
//         <div className="h-96 shadow mt-4 grid grid-cols-12">
//           <div className="col-span-10  p-6">
//             <h1 className="text-right">{product?.title}</h1>
//             <div>
//               <p className="text-right">{product?.price}$</p>
//               <p className="text-right">{product?.description}</p>
//             </div>
//           </div>
//           <div className=" col-span-2 bg-sky-200 p-4">
//             <img className="rounded" src={product?.image} />

//             {getProductQty(parseInt(params.id as string)) == 0 ? (
//               <Button
//                 className="w-full mt-2"
//                 variant="primary"
//                 onClick={() =>
//                   handleIncreaseProductQty(parseInt(params.id as string))
//                 }
//               >
//                 add to cart
//               </Button>
//             ) : (
//               <>
//                 <div className="grid grid-cols-3">
//                   <Button
//                     className="w-full mt-2"
//                     variant="primary"
//                     onClick={() =>
//                       handleIncreaseProductQty(parseInt(params.id as string))
//                     }
//                   >
//                     +
//                   </Button>

//                   <span className="flex justify-center items-center">
//                     {getProductQty(parseInt(params.id as string))}
//                   </span>

//                   <Button
//                     className="w-full mt-2"
//                     variant="primary"
//                     onClick={() =>
//                       handleDecreaseProductQty(parseInt(params.id as string))
//                     }
//                   >
//                     -
//                   </Button>
//                 </div>
//                 <Button
//                   className="w-full mt-2"
//                   variant="danger"
//                   onClick={() =>
//                     handleRemoveProduct(parseInt(params.id as string))
//                   }
//                 >
//                   remove
//                 </Button>
//               </>
//             )}
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// }
// export default ProductPage;

import { useParams } from "react-router-dom";
import Container from "../../Components/Navbar/container/Container";
import Button from "../../Components/button/Button";
import { useEffect, useState } from "react";
import { getSingleProduct } from "../../services/api";
import { Product } from "../../types/server";
import { useShoppingCartContext } from "../../contex/ShoppingCartContext";

function ProductPage() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>();

  const {
    handleIncreaseProductQty,
    cartItems,
    handleDecreaseProductQty,
    getProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();

  useEffect(() => {
    getSingleProduct(params.id as string).then((data) => {
      setProduct(data);
    });
  }, [params.id]);

  const productQty = getProductQty(parseInt(params.id as string));

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-6">
      <Container>
        <div className="bg-white rounded-lg shadow-lg p-6 grid md:grid-cols-3 gap-6 sm:p-6 w-fit md:p-8 md:gap-6 sm:w-56">
          <div className="md:col-span-2">
            <img
              src={product?.image}
              alt={product?.title}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {product?.title}
            </h1>
            <p className="text-lg text-gray-600 mb-4">{product?.description}</p>
            <p className="text-xl font-semibold text-gray-900">
              {product?.price}$
            </p>
          </div>
          <div className="bg-zinc-600 p-4 rounded-lg">
            {product ? (
              <>
                {productQty === 0 ? (
                  <Button
                    className="w-full mt-2"
                    variant="primary"
                    onClick={() =>
                      handleIncreaseProductQty(parseInt(params.id as string))
                    }
                  >
                    Add to Cart
                  </Button>
                ) : (
                  <>
                    <div className="flex items-center justify-between">
                      <Button
                        className="flex-1 mx-1"
                        variant="primary"
                        onClick={() =>
                          handleIncreaseProductQty(
                            parseInt(params.id as string)
                          )
                        }
                      >
                        +
                      </Button>
                      <span className="flex items-center justify-center bg-white rounded-full p-2 text-lg">
                        {productQty}
                      </span>
                      <Button
                        className="flex-1 mx-1"
                        variant="primary"
                        onClick={() =>
                          handleDecreaseProductQty(
                            parseInt(params.id as string)
                          )
                        }
                      >
                        -
                      </Button>
                    </div>
                    <Button
                      className="w-full mt-4"
                      variant="danger"
                      onClick={() =>
                        handleRemoveProduct(parseInt(params.id as string))
                      }
                    >
                      Remove
                    </Button>
                  </>
                )}
              </>
            ) : (
              <p className="text-center text-gray-500">
                Loading product details...
              </p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductPage;
