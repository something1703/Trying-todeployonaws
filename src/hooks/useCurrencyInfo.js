import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return; // safeguard for undefined/null currency

        fetch(`https://open.er-api.com/v6/latest/${currency}`)
            .then((res) => res.json())
            .then((data) => {
                if (data && data.rates) {
                    setData(data.rates);
                }
            })
            
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
