// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs["USD"]
}

const fromDollarToYen = (dolar) =>
{
    return ((dolar * oneEuroIs["JPY"] / oneEuroIs["USD"]))
}

const fromYenToPound = (yen) => 
{
    return ((yen * oneEuroIs["GBP"] / oneEuroIs["JPY"] ))
}


console.log(fromEuroToDollar(3.5))

module.exports = {fromEuroToDollar,fromDollarToYen,fromYenToPound}