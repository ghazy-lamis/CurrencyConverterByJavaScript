// EXCHANGE RATES
const rates = {
 USD: {
    USD: 1,
    EUR: 0.95
 },
 EUR: {
    USD: 1.05,
    EUR: 1
 }
};

function ConvertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const convertedAmount  =    amount * rates[fromCurrency][toCurrency];
    document.getElementById('result').textContent = `${amount} ${fromCurrency} is ${convertedAmount.toFixed(2)} ${toCurrency}`;
}

