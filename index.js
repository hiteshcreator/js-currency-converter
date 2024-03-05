import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_MxfjMdsyFLtu2mGxTphElqcwFJ30VpBnC4AyVXgt');

export const convertCurrency = async(fromCurrency, toCurrency, units) =>{

        const res = await freecurrencyapi.latest({
                        base_currency: fromCurrency,
                        currencies: toCurrency
                    });
        const data = res.data[toCurrency];
        return data*units;
};