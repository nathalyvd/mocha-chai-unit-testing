import { expect } from "chai";
import Calculator from "../src/calculator";

describe('Test Calculator Class', ()=> {
    it('Should be sum', ()=>{
        // arrange
        const calc = new Calculator();

        // act
        const result = calc.add(2,5);
        // assert
        expect(result).to.equal(5);
    });
});
