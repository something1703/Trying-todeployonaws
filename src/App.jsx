import { useState } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-red-600 rounded-3xl shadow-xl p-8">
        <h1 className="text-center text-2xl font-bold text-red-500 mb-6 tracking-wide">
          Currency Converter
        </h1>
        <InputBox
          label="From"
          amount={amount}
          currencyOptions={options}
          onAmountchange={(val) => setAmount(val)}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
          className="mb-4"
        />      
        <div className="flex justify-center my-4">
          <button
            type="button"
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full shadow-lg transition-all duration-200"
            onClick={swap}
          >
            Swap
          </button>
        </div>
        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          amountDisable
          className="mb-4"
        />
        <button
          type="submit"
          onClick={convert}
          className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition-all"
        >
          Convert
        </button>
      </div>
    </div>
  );
}

export default App;
