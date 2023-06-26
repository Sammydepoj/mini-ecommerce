import React from "react";
import useProductData from "../../hooks/useProductData";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const SingleProduct = () => {
  // getting the id from the url
  const { id } = useParams();

  // fetch products from the API by calling the useProductData
  const { loading, data } = useProductData(`products/${id}`);
  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <BeatLoader />
        </div>
      ) : (
        <section className="flex items-center flex-wrap justify-between gap-10">
          {data && (
            <section className="grid grid-cols-2">
              <div>
                <img src={data?.thumbnail} alt="" />
              </div>
              <div>
                <h1>{data?.title}</h1>
                <h3>{data?.price}</h3>
              </div>
            </section>
          )}
        </section>
      )}
    </div>
  );
};

export default SingleProduct;
