
# js-code-currency-converter

  

💱 Currency Converter - Simplify Currency Conversions in JavaScript

  

## Installation

  

You can install the package via npm:

```
npm install js-code-currency-converter

```

## NPM Latest Version

> If your Node.js version is old, consider updating it to a newer one.

```
20 || 21
```
  

## Usage

```

import {convertCurrency,setApiKey} from "js-code-currency-converter";

const fromCurrency = 'USD';

const toCurrency = 'INR';

const units = 2;

  
// If you have an API key then call these function

setApiKey("YOUR_SECRET_KEY"); //Set up the initial API key || Optional


// Call the convertCurrency function with dynamic values

convertCurrency(fromCurrency, toCurrency, units).then(res => {
        console.log(res);
}).catch(err => {
        console.error("An error occurred:", err);
});

convertCurrency("USD","INR",1);
  

```

## Set Up key
 
# Go to this link to get your own Personal API Key: [Move](https://app.freecurrencyapi.com/)


![api](https://github.com/hiteshcreator/js-currency-converter/blob/master/assets/singup.png)


# Signup with a Google account then you get your personal API key

![api](https://github.com/hiteshcreator/js-currency-converter/blob/master/assets/api.png)



## Description

Experience seamless currency conversion integration into your JavaScript projects today with the js-code-currency-converter npm package. Say goodbye to manual calculations and embrace efficient currency management in your applications.

  

## License

This project is licensed under the ISC License.
