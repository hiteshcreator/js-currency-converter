# js-code-currency-converter

💱 Currency Converter - Simplify Currency Conversions in JavaScript

## Installation

You can install the package via npm:
```
npm install js-code-currency-converter
```

## Usage
```
import {convertCurrency} from "js-code-currency-converter";

const fromCurrency = 'USD';
const toCurrency = 'INR';
const units = 2;

// Call the convertCurrency function with dynamic values
convertCurrency(fromCurrency, toCurrency, units).then(res => {
    console.log(res);
}).catch(err => {
    console.error("An error occurred:", err);
});

```

## Description
Experience seamless currency conversion integration into your JavaScript projects today with the js-code-currency-converter npm package. Say goodbye to manual calculations and embrace efficient currency management in your applications.

## License
This project is licensed under the ISC License.