import { useEffect, useState } from "react";
import { API_URL } from "./constants";

const useFetch = () => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);
  return [data, error];
};

export default useFetch;
