import { expect } from 'chai';
import { stringCal } from '../src/stringCalculator.js';

describe("String Calculator", () => {

    // First Case
    it("Handle empty string return 0", () => {
        expect(stringCal("")).to.equal(0);
    });

    // Second Case
    it("Single return number itself", () => {
        expect(stringCal("4")).to.equal(4);
    });

    // Third Case
    it("Return two number sum", () => {
        expect(stringCal("1,5")).to.equal(6);
    });

    // Fourth Case
    it("Return two double number sum", () => {
        expect(stringCal("12,35")).to.equal(47);
    });

    // Fifth Case
    it("Return multiple number sum", () => {
        expect(stringCal("1,2,3,4,5")).to.equal(15);
    });

    // Sixth Case
    it("Return multiple double number sum", () => {
        expect(stringCal("1,2,3,4,50,30,101")).to.equal(191);
    });

    // Seventh Case
    it("Handle New Line Delimiter", () => {
        expect(stringCal("1\n2,3")).to.equal(6);
    });

    // Eighth Case
    it("Handle Custom Delimiter", () => {
        expect(stringCal("//;\n1;2")).to.equal(3);
    });

    // Ninth Case
    it("Return single Negative number should throw", () => {
        expect(() => stringCal("1,2,3,-4")).to.throw("negative numbers not allowed -4");
    });

    // Tenth Case
    it("Return multiple Negative numbers should throw", () => {
        expect(() => stringCal("1,-2,3,-4,5,-6")).to.throw("negative numbers not allowed -2,-4,-6");
    });

});
