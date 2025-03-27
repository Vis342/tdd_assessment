const { stringCal } = require("../src/stringCalculator");

function test(description, callBalck) {
    try {
        callBalck();
        console.log(`✅ ${description}`);
    } catch (error) {
        console.log(`❌ ${description}`);
        console.error(error.message);
    }
}


//First Cas Hanlde Empty String
test("Handle empty string return 0", () => {
    if (stringCal("") !== 0) throw new Error("Expected 0");
})

// Second Case return number
test("Single return number it self", () => {
    if (stringCal("4") !== 4) throw new Error("Expected 0");
})

// Third Case return Two number sum
test("Return two number sum ", () => {
    if (stringCal("1,5") !== 6) throw new Error("Expected 6");
})

// Fourth Case return Two double number sum
test("Return two Double number sum ", () => {
    if (stringCal("12,35") !== 47) throw new Error("Expected 47");
})