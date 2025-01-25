import { useEffect, useState } from "react";

function useCurrInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch data from the API
    fetch(`https://v6.exchangerate-api.com/v6/f8200c632278439f1378dd6c/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        // Set the conversion rates to the data state
        setData(res.conversion_rates);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [currency]); // Only re-run when the 'currency' changes

  // Log data to debug (will log only the latest state)
  

  return data;
}

export default useCurrInfo;
