import React from 'react'
import { IoStarOutline, IoStar } from "react-icons/io5";

const DropdownComponent = ({
    currencies, // List of all available currencies
    currency, // Selected currency value
    setCurrency, // Function to update selected currency
    favourites, // List of user's favorite currencies
    handleFavourite, // Function to toggle a currency as a favorite
    title = "", // Label for the dropdown
}) => {
    // Helper function to check if the current currency is a favorite
    const isFavorite = (curr) => favourites.includes(curr);

    return (
        <div>
            {/* Dropdown label */}
            <label htmlFor="{title}" className='text-white font-semibold'>{title}</label>
            
            {/* Dropdown container */}
            <div className='relative'>
                {/* Currency selection dropdown */}
                <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)} // Update selected currency
                    className='w-full p-2 rounded-md mt-2 bg-[#514ef586] text-white font-medium shadow-md shadow-indigo-200' >
                    
                    {/* Display favorite currencies first */}
                    
                    {favourites.map((currency) => {
                        return (
                            <option className="bg-yellow-600" value={currency} key={currency}>
                                {currency}
                            </option>
                        );
                    })}
                    <hr />
                    {/* Display all other available currencies */}
                    {currencies?.map((currency) => {
                        return (
                            <option value={currency} key={currency}>{currency}</option>
                        );
                    })};

                </select>

                {/* Button to toggle favorite status of selected currency */}
                <button
                    onClick={() => handleFavourite(currency)}
                    className='absolute text-white font-extrabold inset-y-0 right-0 mr-7 pt-1 text-lg'>
                    
                    {/* Show star icon based on favorite status */}
                    {isFavorite(currency) ? <IoStar className='text-yellow-400'/> : <IoStarOutline />}
                </button>

            </div>
        </div>
    )
}
export default DropdownComponent


