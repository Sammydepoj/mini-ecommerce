import React from "react";
import useProductData from "../../hooks/useProductData";
import { BeatLoader } from "react-spinners";
import { useNavigate, useParams } from "react-router-dom";

const Page = () => {
  // get the category parameter from the url using the useParam hook given to you by react-router-dom
  const { category } = useParams();

  // fetch products from the API by calling the useProductData
  const { loading, data } = useProductData(
    category ? `products/category/${category}` : "products"
  );

  // using useNavigate for redirection
  const navigate = useNavigate();

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <BeatLoader />
        </div>
      ) : (
        <section className="flex items-center flex-wrap justify-between gap-10">
          {data &&
            data.products?.map((item, index) => (
              <section key={index} className="w-[10rem] h-[15rem] rounded-md">
                <img
                  onClick={() => navigate("/product/" + item.id)}
                  src={item.thumbnail}
                  alt=""
                  className="w-full hover:cursor-pointer hover:shadow-lg hover:scale-110 h-[60%]"
                />
              </section>
            ))}
        </section>
      )}
      {category?.toLowerCase() === "fragrances" && (
        <button className="bg-red-600 p-10">This is fragrance</button>
      )}
    </div>
  );
};

export default Page;
