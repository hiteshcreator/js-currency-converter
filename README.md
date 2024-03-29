<div align="center">
<h1>JS Code Currency Converter</h1>

<a href='https://github.com/hiteshcreator/js-currency-converter/' target="_blank"><img alt='GitHub' src='https://img.shields.io/badge/github-100000?style=flat&logo=GitHub&logoColor=white&labelColor=black&color=black'/></a>
<a href='https://www.npmjs.com/package/js-code-currency-converter/' target="_blank"><img alt='npm' src='https://img.shields.io/badge/package-js_code currency converter-100000?style=flat&logo=npm&logoColor=white&labelColor=FF0000&color=black'/></a>
<a href='https://nodejs.org/en' target="_blank"><img alt='nodedotjs' src='https://img.shields.io/badge/npm-v18.19.1 | v20.11.1-100000?style=flat&logo=nodedotjs&logoColor=white&labelColor=339933&color=1082c3'/></a>
<a href='https://github.com/hiteshcreator/js-currency-converter/blob/master/LICENSE' target="_blank"><img alt='' src='https://img.shields.io/badge/license-_Apache2.0-100000?style=flat&logo=&logoColor=white&labelColor=6C6B6B&color=2CF46E'/></a>

<p>💱 Currency Converter - Simplify Currency Conversions in JavaScript 💱</p>

</div>

## Getting started 🚀

**Installation**
<br/><br/>
You can install the package via npm:

```bash
npm install js-code-currency-converter
```

## NPM & Nodejs Latest Version

<code style="color : aquamarine">**If your Node.js version is old, consider updating it to a newer one.**</code>

<a href='https://www.npmjs.com/package/npm' target="_blank"><img alt='npm' src='https://img.shields.io/badge/10.5.0-100000?style=flat&logo=npm&logoColor=white&labelColor=FF0000&color=FF0202'/></a>
<a href='https://nodejs.org/en' target="_blank"><img alt='nodedotjs' src='https://img.shields.io/badge/Node.js-v20.11.1-100000?style=flat&logo=nodedotjs&logoColor=white&labelColor=339933&color=1082c3'/></a><br/><br/>

## ES6 module

<code style="color : aquamarine">**Utilize "type": "module" within the package.json file**</code> <br/><br/>

## Usage 💯

```bash
import {convertCurrency,setApiKey} from "js-code-currency-converter";

const fromCurrency = 'USD';
const toCurrency = 'INR';
const units = 2;

//If you have an API key then call these function

setApiKey("YOUR_SECRET_KEY"); //Set up the initial API key || Optional

// Call the convertCurrency function with dynamic values

convertCurrency(fromCurrency, toCurrency, units).then(res => {
	console.log(res);
}).catch(err => {
	console.error("An error occurred:", err);
});
```

<br/>

## Set Up key

# Go to this link to get your own Personal API Key: [Move](https://app.freecurrencyapi.com/)

![Image Description](https://drive.google.com/uc?export=view&id=1GKzSObHlPqk7iFfbtO6KLpXoKhPDmNDV)
<br/><br/>

# Signup with a Google account then you get your personal API key

![Image Description](https://drive.google.com/uc?export=view&id=1GNuWPwkedbrw4TKwygBeHtaBD-oZR5qu)

<br/>

## Description

Upgrade your JavaScript projects easily with the <code style="color : aquamarine">[js-code-currency-converter npm package](https://github.com/hiteshcreator/js-currency-converter/)</code>. No more difficult math – this tool makes handling different currencies in your apps simple. It works with <code style="color : red">[Nodejs](https://nodejs.org/en/)</code> and frameworks like <code style="color : cyan">[Reactjs](https://react.dev/)</code> and <code style="color : red">[Angular](https://angular.io/)</code></a>. Just install it and enjoy smooth currency conversion. Say goodbye to manual work and hello to smooth development. Get started today!

## License

This project is licensed under the [Apache LICENSE-2.0](https://github.com/hiteshcreator/js-currency-converter/blob/master/LICENSE) © [Hitesh Sharma](https://github.com/hiteshcreator)
