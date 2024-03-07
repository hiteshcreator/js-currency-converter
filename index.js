import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import { validCurrencyCodes } from './validCurrencyCode.js';
import 'dotenv/config';

let freecurrencyapi; // Define the freecurrencyapi variable globally

const initializeFreecurrencyapi = (apiKey) => {
    return new Freecurrencyapi(apiKey);
};

export const setApiKey = (apiKey) => {
    // Update the API key used by freecurrencyapi instance
    freecurrencyapi = initializeFreecurrencyapi(apiKey);
};

export const convertCurrency = async(fromCurrency, toCurrency, units) =>{
        try {
                // Use a safer validation function (e.g., from a trusted library)
                if (!validateCurrencyCode(fromCurrency) || !validateCurrencyCode(toCurrency)) {
                        throw new Error('Invalid currency code(s)');
                }

                if (freecurrencyapi == undefined) {
                        freecurrencyapi = new Freecurrencyapi("fca_live_MxfjMdsyFLtu2mGxTphElqcwFJ30VpBnC4AyVXgt");
                }

                const res = await freecurrencyapi.latest({
                                base_currency: fromCurrency,
                                currencies: toCurrency
                        });

                if (!res.data || !res.data[toCurrency]) {
                        throw new Error('Conversion data not found');
                }

                const conversionRate = res.data[toCurrency];

                if (isNaN(conversionRate)) {
                        throw new Error('Invalid conversion rate');
                }

                return conversionRate*units;
        } catch (error) {
                console.error('Error during currency conversion:', error);
        }
};

const validateCurrencyCode = (code) => {
        // Check if the provided code exists in the validCurrencyCodes array
        return validCurrencyCodes.includes(code);
}