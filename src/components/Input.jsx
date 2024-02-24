import React from 'react'
import { useState } from 'react';

function Input({
    label,
    amount,
    OnAmount,
    onCurrencyChange,
    currencyOptions=["usd","inr","cad","pkr","iran"],
    selectCurrency = "usd",
    className="",
    amountDisable = false,
    currencyDisable = false,
})
    {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>

    <div className="w-1/2">
        <label className='text-black/40 mb-2 inline-block'>{label}</label>
        <input type="number" className='outline-none bg-transparent py-1.5 w-full' 
        placeholder='Amount'
        disabled={amountDisable}
        value={amount}/>
      <select>
            {currencyOptions.map((currency)=>(
                <option  key={currency}
                value={currency}>{currency}</option>
            ))}

         </select>   
    </div>
    </div>
  )
}

export default Input;
