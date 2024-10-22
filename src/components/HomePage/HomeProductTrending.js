// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { fetchProductsAction } from "../../redux/slices/products/productSlices";
// import baseURL from "../../utils/baseURL";

// const HomeProductTrending = () => {
//   //build up url
//   let productUrl = `${baseURL}/products`;
//   //dispatch
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(
//       fetchProductsAction({
//         url: productUrl,
//       })
//     );
//   }, [dispatch]);
//   //get data from store
//   const {
//     //ye state se destruycture kiya h list fulfilled wali redux se
//     products: { products },
//     error,
//     loading,
//   } = useSelector((state) => state?.products);
//   // console.log(products);
//   const trendingProducts = [];
//   return (
//     <>
//       <section aria-labelledby="trending-heading">
//         <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 sm:py-32 lg:px-8 lg:pt-32">
//           <div className="md:flex md:items-center md:justify-between">
//             <h2
//               id="favorites-heading"
//               className="text-2xl font-bold tracking-tight text-gray-900"
//             >
//               Trending Products
//             </h2>
//             <Link
//               to="/all-categories"
//               className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
//             >
//               Shop the collection
//               <span aria-hidden="true"> &rarr;</span>
//             </Link>
//           </div>

//           <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8 bg-slate-100 rounded-lg">
//             {products?.map((product) => (
              
//               <Link
//                 to={`/products/${product._id}`}
//                 key={product.id}
//                 className="group relative"
//               >
//                 <div className="h-56 w-10/12 overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80 mt-4 ml-4 border border-yellow-500">
//                   <img
//                     src={product.images[0]}
//                     alt={product.images[0]}
//                     className="h-full w-full object-cover object-center"
//                   />
//                    <b>{product.name}</b>
//                    Rs {product.price}.00
//                 </div>
//                 <div className=" mt-3 mb-4 ml-4 w-10/12 text-center rounded-xl  bg-yellow-200 border border-yellow-500">
//                 <h3 className="mt-2 text-sm  text-indigo-600">
//                   <span className="absolute inset-0 " />
//                   <b>{product.name}</b>
//                 </h3>
//                 <p className="mt-1 text-sm font-medium text-gray-900">
//                   Rs {product.price}.00
//                 </p>
//                 </div>
//                 {/* <p className="mt-1 text-sm text-gray-500">
//                   {product.description}
//                 </p> */}
//               </Link>
            
             
            
//             ))}
//           </div>

//           <div className="mt-8 text-sm md:hidden">
//             <Link
//               to="/all-categories"
//               className="font-medium text-indigo-600 hover:text-indigo-500"
//             >
//               Shop the collection
//               <span aria-hidden="true"> &rarr;</span>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HomeProductTrending;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProductsAction } from "../../redux/slices/products/productSlices";
import baseURL from "../../utils/baseURL";

const HomeProductTrending = () => {
  // Build up URL
  let productUrl = `${baseURL}/products`;
  
  // Dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchProductsAction({
        url: productUrl,
      })
    );
  }, [dispatch]);
  
  // Get data from store
  const {
    products: { products },
    error,
    loading,
  } = useSelector((state) => state?.products);

  return (
    <>
      <section aria-labelledby="trending-heading">
        <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 sm:py-32 lg:px-8 lg:pt-32">
          <div className="md:flex md:items-center md:justify-between">
            <h2
              id="favorites-heading"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              Trending Products
            </h2>
            <Link
              to="/all-categories"
              className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
            >
              Shop the collection
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8 bg-slate-100 rounded-lg">
            {loading ? (
              <div className="col-span-4 flex justify-center items-center">
                {/* Loader */}
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
              </div>
            ) : (
              products?.map((product) => (
                <Link
                  to={`/products/${product._id}`}
                  key={product.id}
                  className="group relative"
                >
                  <div className="h-56 w-10/12 overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80 mt-4 ml-4 border border-yellow-500">
                    <img
                      src={product.images[0]}
                      alt={product.images[0]}
                      className="h-full w-full object-cover object-center"
                    />
                    <b>{product.name}</b>
                    Rs {product.price}.00
                  </div>
                  <div className="mt-3 mb-4 ml-4 w-10/12 text-center rounded-xl bg-yellow-200 border border-yellow-500">
                    <h3 className="mt-2 text-sm text-indigo-600">
                      <span className="absolute inset-0 " />
                      <b>{product.name}</b>
                    </h3>
                    <p className="mt-1 text-sm font-medium text-gray-900">
                      Rs {product.price}.00
                    </p>
                  </div>
                </Link>
              ))
            )}
          </div>

          <div className="mt-8 text-sm md:hidden">
            <Link
              to="/all-categories"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Shop the collection
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeProductTrending;

