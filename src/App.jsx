import { useState } from "react";
import DropdownComponent from "./components/DropdownComponent";
import useCurrencies from "./hooks/useCurrencies";
import { MdSwapVert } from "react-icons/md";

function App() {
  // Custom hook to fetch available currencies and handle potential errors
  const { currencies, error } = useCurrencies();
  const [amount, setAmount] = useState(1);//amount input
  const [fromCurrency, setFromCurrency] = useState("USD");// selected currencies from
  const [toCurrency, setToCurrency] = useState("INR");// selected currencies to
  const [convertedAmount, setConvertedAmount] = useState(null);//conversion result
  const [converting, setConverting] = useState(false);//loading state

  // Load favorite currencies from local storage, or default to INR and EUR
  const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem("favourites")) || ["INR", "EUR"]);


  // Function to handle currency conversion
  const convertCurrency = async () => {
    if (!amount) return; // Return if amount is invalid
    setConverting(true); // Set loading state
    const API_KEY = "d32d39ad3773eae7683fbe71"; // API key for currency conversion

    try {
      // Fetch conversion data from the API
      const res = await fetch(
        `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}/${amount}`
      );
      const data = await res.json();

      // If the conversion was successful, update the result
      if (data.result === "success") {
        setConvertedAmount(data.conversion_result + " " + toCurrency);
      } else {
        console.error("Error Fetching", data.error); // Handle API errors
      }
    } catch (error) {
      console.error("Error Fetching", error); // Handle network or server errors
    } finally {
      setConverting(false); // Remove loading state
    }
  };


// Function to add or remove a currency from favorites
const handleFavourite = (currency) => {
  let updatedFavorites = [...favourites];  //  copy of the current favorites

  //  Toggle the favorite status of the selected currency
  if (favourites.includes(currency)) {
    updatedFavorites = updatedFavorites.filter((fav) => fav !== currency);  // If it's already a favorite, remove it
  } else {
    updatedFavorites.push(currency);  // If it's not a favorite, add it to the list
  }

  // Updated state with the modified favorites
  setFavourites(updatedFavorites);

  // Save the updated favorites to local storage
  localStorage.setItem("favourites", JSON.stringify(updatedFavorites));
};

// Function to swap the "from" and "to" currencies
const swapCurrencies = () => {
  setFromCurrency(toCurrency);
  setToCurrency(fromCurrency);
};


return (
  <>
    <div
      className="fontFamily-poppins w-full h-screen bg-cover bg-center bg-fixed "
      style={{ backgroundImage: `url("night.jpg")`, opacity: 0.7 }}
    >
      <div className="flex justify-center justify-items-center items-center h-full">

        {/* Main card container */}
        <div className="max-w-sm w-4/5 bg-[#0207287f] p-5 border rounded-xl shadow-md shadow-gray-500 sm:max-w-xl sm:w-svw ">

          {/* Title of the currency converter */}
          <h1 className="text-2xl text-center font-semibold text-white text-shadow-default mb-8">
            Currency Converter
          </h1>

          <div className="flex flex-col gap-3">

            {/* Dropdown to select "from" currency */}
            <div>
              <DropdownComponent
                favourites={favourites}
                currencies={currencies}
                title="From:"
                currency={fromCurrency}
                handleFavourite={handleFavourite}
                setCurrency={setFromCurrency} />
            </div>

            {/* Button to swap "from" and "to" currencies */}
            <button
              onClick={swapCurrencies}
              className="bg-[#242424a2] rounded-full max-w-8 p-1 border-white border shadow-md shadow-red-500 flex justify-self-center mt-3 mx-auto hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
              <MdSwapVert className="text-2xl text-white hover:text-black " />
            </button>

            {/* Dropdown to select "to" currency */}
            <div>
              <DropdownComponent
                favourites={favourites}
                currencies={currencies}
                title="To:"
                currency={toCurrency}
                handleFavourite={handleFavourite}
                setCurrency={setToCurrency}
              />
            </div>

          </div>

          {/* Input field for the amount to convert */}
          <div>
            <label
              htmlFor="amount"
              className="text-white block font-medium my-2 mt-6">
              Amount:
            </label>
            <input type="number"
              className="w-full rounded-md border-gray-400 bg-[#ffffff50] shadow-sm shadow-indigo-400 p-2 text-white font-medium tracking-wider focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>

          {/* Button to trigger currency conversion */}
          <div className="flex justify-center ">
            <button
              onClick={convertCurrency}
              className={`my-2 mt-10 bg-indigo-600 text-white font-medium tracking-wider p-2 rounded-md shadow-md  border border-gray-400 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300  focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                ${converting ? "animate-pulse" : " "}`
              }>
              Convert {fromCurrency} to {toCurrency}
            </button>
          </div>

          {/* Display the converted amount */}
          <div className="text-white text-lg font-semibold my-3 ">
            {convertedAmount && `Conversion Result: ${convertedAmount}`}
          </div>
        </div>
      </div>
    </div>
  </>
);
}

export default App;







