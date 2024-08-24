import { useState, useEffect } from "react";

const useCurrencies = () => {
  const [currencies, setCurrencies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const res = await fetch("https://api.frankfurter.app/currencies");
        const data = await res.json();
        setCurrencies(data);
      } catch (error) {
        setError("Fetch API error");
      }
    };

    fetchCurrencies();
  }, []);

  return { currencies, error };
};

export default useCurrencies;
