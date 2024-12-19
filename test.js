// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 156.5", function(){
    const {fromDollarToYen} = require('./app.js');
    const dollars = 1
    const expectedYenes = dollars * oneEuroIs["JPY"] / oneEuroIs["USD"];
    expect(fromDollarToYen(dollars)).toBe(expectedYenes)
} )

test("One Yen should be 156.5", function(){
    const {fromYenToPound} = require('./app.js');
    const yen = 156.5;
    const expectedPounds = yen * oneEuroIs["GBP"] / oneEuroIs["JPY"];
    expect(fromYenToPound(yen)).toBe(expectedPounds)
} )