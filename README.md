# js-code-currency-converter

Npm package to convert currency

## Installation

You can install the package via npm:
```
npm install js-code-currency-converter
```

## Usage
```
import {convertCurrency} from "js-code-currency-converter";

convertCurrency('USD','INR',3).then(res => {
    console.log(res);
});
```
