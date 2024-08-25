import React from 'react'
import { IoStarOutline, IoStar } from "react-icons/io5";

//  https://api.frankfurter.app/currencies
//  https://api.frankfurter.app/latest?amount=1&from=USD&to=INR

const DropdownComponent = ({
    currencies,
    currency,
    setCurrency,
    favourites,
    handleFavourite,
    title = "",
}) => {
    const isFavorite = (curr) => favourites.includes(curr);

    return (
        <div>
            <label htmlFor="{title}" className='text-white font-semibold'>{title}</label>
            <div className='relative'>
                <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className='w-full p-2 rounded-md mt-2 bg-[#514ef586] text-white font-medium shadow-md shadow-indigo-200' >
                    {favourites.map((currency) => {
                        return (
                            <option className="bg-gray-200" value={currency} key={currency}>
                                {currency}
                            </option>
                        );
                    })}
                    <hr />
                    {currencies?.map((currency) => {
                        return (
                            <option value={currency} key={currency}>{currency}</option>
                        );
                    })};

                </select>

                <button
                    onClick={() => handleFavourite(currency)}
                    className='absolute text-white font-extrabold inset-y-0 right-0 pr-7 pt-1 text-lg'>
                    {isFavorite(currency) ? <IoStar /> : <IoStarOutline />}


                </button>

            </div>
        </div>
    )
}
export default DropdownComponent