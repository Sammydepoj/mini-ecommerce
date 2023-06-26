import { useCallback, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";

const useProductData = (endpoint) => {
  // create a state that will hold the response of your API
  const [data, setData] = useState();
  // create a state that will represent your loading state when API is still making the call
  const [loading, setLoading] = useState(false);

  //  create a function that will be called to fetch products from API
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(baseUrl + endpoint);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [endpoint]);

  // this hook allows u to perform some side effect logic like automatically calling the API when the component mount
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // return necessary information whenever this custom hook (useProductData) is called
  return {
    loading,
    data,
  };
};

export default useProductData;
