import { useState, useEffect } from "react";

const useCurrencies = () => {
  const [currencies, setCurrencies] = useState([]);
  const [error, setError] = useState(null);
  const API_KEY = "d32d39ad3773eae7683fbe71"; 
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/codes`);
        const data = await res.json();
        if (data.result === "success") {
          setCurrencies(data.supported_codes.map(code => code[0]));
        } else {
          setError("Fetch API error");
        }
      } catch (error) {
        setError("Fetch API error");
      }
    };

    fetchCurrencies();
  }, [API_KEY]);

  return { currencies, error };
};

export default useCurrencies;
