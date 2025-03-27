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

// Fifth Case return Two double number sum
test("Return multiple number sum ", () => {
    if (stringCal("1,2,3,4,5") !== 15) throw new Error("Expected 15");
})

// Sixth Case Return multiple double number sum
test("Return multiple double number sum ", () => {
    if (stringCal("1,2,3,4,50,30,101") !== 191) throw new Error("Expected 191");
})

// Seventh Case Handle New Line Delimeter
test("Handle New Line Delimeter", () => {
    if (stringCal("1\n2,3") !== 6) throw new Error("Expected 6");
})

// Eighth Case Handle Custom Delimeter
test("Handle Custom Delimeter", () => {
    if (stringCal("//;\n1;2") !== 3) throw new Error("Expected 3");
})

// nineth Case Return single Negative number
test("Return single Negative number ", () => {
    try {
        console.log(stringCal("1,2,3,-4"));
    } catch (error) {
        throw new Error(error.message)   
    }
})

