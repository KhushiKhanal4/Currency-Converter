import React from 'react'

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
        </div>
    )
}
export default DropdownComponent