const currencyFirstEl = document.getElementById("currency-first");

const worthFirstEl = document.getElementById("worth-first");

const currencySecondEl = document.getElementById("currency-second");

const worthSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");

updateRate()

function updateRate() {
  fetch(`https://api.exchangerate.host/latest?base=${currencyFirstEl.value}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[currencySecondEl.value];

      exchangeRateEl.innerText =
        `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;

      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    })
    .catch(error => {
      exchangeRateEl.innerText = "Error fetching exchange rate";
      console.error(error);
    });
}


currencyFirstEl.addEventListener("change", updateRate);

currencySecondEl.addEventListener("change", updateRate);

worthFirstEl.addEventListener("input", updateRate);