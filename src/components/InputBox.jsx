import React, { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountchange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId();

    return (
        <div className={`bg-black p-3 rounded-lg text-sm flex gap-3 ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-red-400 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-black text-white border border-red-500 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-500 transition"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountchange && onAmountchange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-red-400 mb-2 w-full">Currency Type</p>
                <select
                    className="w-full rounded-md px-3 py-2 bg-black text-white border border-red-500 outline-none focus:ring-2 focus:ring-red-500 transition cursor-pointer"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((e) => (
                        <option key={e} value={e}>
                            {e}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
