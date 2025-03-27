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
test("handle empty string return 0", () => {
    if (stringCal("") !== 0) throw new Error("Expected 0");
})

// Second Case return number
test("single return number it self", () => {
    if (stringCal("4") !== 4) throw new Error("Expected 0");
})