import { useState } from "react";
import DropdownComponent from "./components/DropdownComponent";
import useCurrencies from "./hooks/useCurrencies";
import { MdSwapVert } from "react-icons/md";



function App() {

const { currencies, error } = useCurrencies();
const [amount, setAmount] = useState(1);
const [fromCurrency, setFromCurrency] = useState("USD");
const [toCurrency, setToCurrency] = useState("NPR");

  return (
    <>
      <div
        className="fontFamily-poppins w-full h-screen bg-cover bg-center bg-fixed "
        style={{ backgroundImage: `url("night.jpg")`, opacity: 0.7 }}
      >
        <div className="flex justify-center justify-items-center items-center h-full">

          <div className="max-w-sm w-4/5 bg-[#0207287f] p-5 border rounded-xl shadow-md shadow-gray-500 sm:max-w-xl sm:w-svw ">

            <h1 className="text-2xl text-center font-semibold text-white text-shadow-default mb-8">
              Currency Converter
            </h1>

            <div className="flex flex-col gap-3">

              <div>
                <DropdownComponent currencies={currencies} title="From:"/>
              </div>
             

              <button className="bg-[#242424a2] rounded-full max-w-8 p-1 border-white border shadow-md shadow-red-500  flex justify-self-center mt-3 mx-auto hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">

                <MdSwapVert className="text-2xl text-white hover:text-black " />

              </button>
              
               <div>
                <DropdownComponent currencies={currencies} title="To:"/>
              </div>

            </div>

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

            <div className="flex justify-center ">

              <button className="my-2 mt-10 bg-indigo-600 text- text-white font-medium tracking-wider p-2 rounded-md shadow-md  border border-gray-400 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300  focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Convert USD to INR</button>

            </div>

            <div className="flex justify-center m-2 text-indigo-400 font-bold tracking-wider text-shadow-default text-md sm:text-lg">
              Converted Amount is : 69 USD
            </div>

          </div>

        </div>

      </div>

    </>
  );
}

export default App;
