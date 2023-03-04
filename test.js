// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro is 1.2 dollars, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 136.48 yens", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yens = fromDollarToYen(3.5)

    // if 1 dollar is 136.48 yens, then 3.5 dollars should be (3.5 * 136.48)
    const expected = 3.5 * 136.48; 
    
    // this is the comparison for the unit test
     expect(yens).toBe(expected); //1 dollar is 136.48 yens, then 3.5 dollars should be = (3.5 * 136.48)
})

test("One yen should be 0.0061 pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pounds = fromYenToPound(3.5)

    // if 1 yen is 0.0061 pounds, then 3.5 yens should be (3.5 * 0.0061)
    const expected = 3.5 * 0.0061; 
    
    // this is the comparison for the unit test
     expect(pounds).toBe(expected); //1 yen is 0.0061 pounds, then 3.5 yens should be = (3.5 * 0.0061)
})