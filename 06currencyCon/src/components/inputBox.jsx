import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmtChange,
  currencyOptions = [],
  defaultAmt = 0,
  onCurrencyChange,
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId= useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex gap-2`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block" htmlFor="amountInputId">
        {label }
        </label>
        <input
          id={amountInputId}  
          
          className="outline-none w-full bg-transparent py-1.5"
          type="Number"
          placeholder="Amount"
          disabled={amountDisable} // Disable the amount input in "To" box
          
          value={amount || defaultAmt} // defaultAmt is used to set the default value of the input box
          onChange={(e) => onAmtChange && onAmtChange(Number(e.target.value))} 
          // Number is used to convert the string to number
          // onAmtChange is a function that is passed as a prop to the InputBox component
          // This function is called when the input value is changed
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">
        Currency Type</p>
        <select // `select` is used to create a dropdown list
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency} // `value` is used to set the default value of the dropdown list 
          disabled={currencyDisable}
          onChange={(e) => { // `onChange` is used to call a function when the value of the dropdown list is changed
            onCurrencyChange && onCurrencyChange(e.target.value); // `onCurrencyChange` is a function that is passed as a prop to the InputBox component

          }}
        >
          {currencyOptions.map((currency) => ( // `map` is used to iterate over the `currencyOptions` array and create a dropdown list 

            <option key={currency} value={currency}>

              {/* key is needed for performance boost*/}

              {currency}
            </option>
            // `option` is used to create an option in the dropdown list 
            // `value` is used to set the value of the option
            // `currency` is the value of the option
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
