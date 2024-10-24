import React from "react";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8">
        {products?.map((product) => (
          <>
            {/* new */}
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 border">
              <div className="relative bg-gray-100">
                
                <Link
                  className="block"
                  to={{
                    pathname: `/products/${product?.id}`,
                    // state: {
                    //   product: product,
                    // },
                  }}
                >
                  <img
                    className="w-full h-80 "
                    src={product?.images[0]}
                    alt
                  />
                </Link>
                <div className="px-6 pb-4 mt-8">
                  <a className="block px-6 mb-2" href="#">
                    <h3 className="mb-2 text-md font-bold font-heading">
                      {product?.name}
                    </h3>
                    <p className="text-lg font-bold font-heading text-blue-500">
                      <span>Rs {product?.price}</span>
                      {/* <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                        Rs 40.99
                      </span> */}
                    </p>
                  </a>
                  {/* <a
                    className="ml-auto mr-2 flex items-center justify-center w-12 h-12 bg-blue-300 hover:bg-blue-400 rounded-md"
                    href="#">
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect x={5} width={2} height={12} fill="white" />
                      <rect
                        x={12}
                        y={5}
                        width={2}
                        height={12}
                        transform="rotate(90 12 5)"
                        fill="white"
                      />
                    </svg>
                  </a> */}
                  <Link
                    className="ml-auto mr-2 flex items-center justify-center w-12 h-12 bg-blue-500 hover:bg-blue-800 rounded-md"
                    to={{
                      pathname: `/products/${product?.id}`,
                      // state: {
                      //   product: product,
                      // },
                    }}
                  >
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x={5} width={2} height={12} fill="white" />
                      <rect
                        x={12}
                        y={5}
                        width={2}
                        height={12}
                        transform="rotate(90 12 5)"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Products;
