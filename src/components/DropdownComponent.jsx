import React from 'react'
import { IoStarOutline } from "react-icons/io5";

//  https://api.frankfurter.app/currencies
//  https://api.frankfurter.app/latest?amount=1&from=USD&to=INR

const DropdownComponent=({ 
    currencies,
    currency,
    setCurrency,
    favourites,
    handleFavourite,
    title = "",
}) => {
    return(
        <div>
            <label htmlFor="{title}" className='text-white font-semibold'>{title}</label>
            <div className='relative'>
                <select value={currency} onChange={(e) => setCurrency(e.target.value)}className='w-full p-2 rounded-md mt-2 bg-[#514ef586] text-white font-medium shadow-md shadow-indigo-200' >
                    {currencies?.map((currency) => {
                    return (
                        <option value={currency} key={currency}>{currency}</option>
                    );
                })};

                </select>

                <button 
                onClick={() => handleFavourite(currency)}
                className='absolute inset-y-0 right-0 pr-7 pt-1 text-lg'>

                <IoStarOutline 
                className='text-white font-extrabold'
                />

                </button>

            </div>
        </div>
    )
}
export default DropdownComponent