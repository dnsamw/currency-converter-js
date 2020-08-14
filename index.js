import axios from "axios";

//fixer.io api
const FIXER_API_KEY = "17c3268fae1dd672bce57705d8eeb216";
const FIXER_API = `http://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}`;

//restcountries.eu api
const REST_COUNTRIES_API = "https://restcountries.eu/rest/v2/currency";

//Async/await
const getExchangeRate = async (fromCurrency, toCurrency) => {
  const {
    data: { rates },
  } = await axios.get(FIXER_API);
  const usd = 1 / rates[fromCurrency];
  const exchangeRate = usd * rates[toCurrency];

  return exchangeRate;
};

getExchangeRate("USD", "LKR");

//fetch data about currencies

//fetch data about countries

//output data
