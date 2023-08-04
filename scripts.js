const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyFirstSelect = document.querySelector(".currency-first-select") //pega o valor do 1 select 

function convertValues() {
    const inputCurrencyValue = document.querySelector(".imput-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //real
    const currencyValueConverted = document.querySelector("#dolar") //outras moedas

    const dolarToday = 4.81
    const euroToday = 5.27
    const libraToday = 6.2
    const bitcoinToday = 142281.95

    //REAL  
    if (currencyFirstSelect.value == "real" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue / dolarToday)
    }
    if (currencyFirstSelect.value == "real" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue / euroToday)
    }
    if (currencyFirstSelect.value == "real" && currencySelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "GBP" }).format(inputCurrencyValue / libraToday)
    }
    if (currencyFirstSelect.value == "real" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputCurrencyValue / bitcoinToday)
    }
    if (currencyFirstSelect.value == "real" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue)
    }

    //DOLAR
    if (currencyFirstSelect.value == "dolar" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * dolarToday)
    }

    if (currencyFirstSelect.value == "dolar" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue * 0.91)
    }

    if (currencyFirstSelect.value == "dolar" && currencySelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "GBP" }).format(inputCurrencyValue * 0.78)
    }

    if (currencyFirstSelect.value == "dolar" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputCurrencyValue * 0.000034)
    }

    if (currencyFirstSelect.value == "dolar" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue)
    }

    //LIBRA
    if (currencyFirstSelect.value == "libra" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "GBP" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * libraToday)
    }

    if (currencyFirstSelect.value == "libra" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "GBP" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue * 1.16)
    }

    if (currencyFirstSelect.value == "libra" && currencySelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "GBP" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "GBP" }).format(inputCurrencyValue)
    }

    if (currencyFirstSelect.value == "libra" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "GBP" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputCurrencyValue * 0.000044)
    }

    if (currencyFirstSelect.value == "libra" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "GBP" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue * 1.28)
    }
    //EURO
    if (currencyFirstSelect.value == "euro" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue * 1.10)
    }
    if(currencyFirstSelect.value == "euro" && currencySelect.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * 5.27)
    }
    if(currencyFirstSelect.value == "euro" && currencySelect.value == "libra"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "GBP" }).format(inputCurrencyValue * 0.86)
    }
    if(currencyFirstSelect.value == "euro" && currencySelect.value == "bitcoin"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputCurrencyValue * 0.000038)
    }
    if(currencyFirstSelect.value == "euro" && currencySelect.value == "euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue)
    }
    //BITCOIN
    if(currencyFirstSelect.value == "bitcoin" && currencySelect.value == "euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue * 26485.65)
    }

    if(currencyFirstSelect.value == "bitcoin" && currencySelect.value == "libra"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "GBP" }).format(inputCurrencyValue * 22876.71)
    }

    if(currencyFirstSelect.value == "bitcoin" && currencySelect.value == "dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue * 29235.60)
    }

    if(currencyFirstSelect.value == "bitcoin" && currencySelect.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * 141789.74)
    }

    if(currencyFirstSelect.value == "bitcoin" && currencySelect.value == "bitcoin"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputCurrencyValue)
    }
}

function changeCurrency() {
    const currencyName = document.querySelector("#currency-name")
    const currencyImg = document.querySelector(".img")

    if (currencySelect.value == "dolar") {

        currencyName.innerHTML = "Dolar"
        currencyImg.src = "./assets/usa.png"
    }

    if (currencySelect.value == "euro") {

        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {

        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {

        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "real") {

        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/Real.png"
    }

    convertValues()

}

function changeFirstCurrency() {
    const firtsCurrencyName = document.querySelector("#first-currency-name")
    const firstImg = document.querySelector(".first-img")

    if (currencyFirstSelect.value == "dolar") {
        firtsCurrencyName.innerHTML = "Dolar"
        firstImg.src = "./assets/usa.png"
    }

    if (currencyFirstSelect.value == "euro") {
        firtsCurrencyName.innerHTML = "Euro"
        firstImg.src = "./assets/euro.png"
    }

    if (currencyFirstSelect.value == "libra") {
        firtsCurrencyName.innerHTML = "Libra"
        firstImg.src = "./assets/libra.png"
    }

    if (currencyFirstSelect.value == "bitcoin") {
        firtsCurrencyName.innerHTML = "Bitcoin"
        firstImg.src = "./assets/bitcoin.png"
    }

    if (currencyFirstSelect.value == "real") {
        firtsCurrencyName.innerHTML = "Real"
        firstImg.src = "./assets/Real.png"
    }

    convertValues()

}

currencyFirstSelect.addEventListener("change", changeFirstCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)










