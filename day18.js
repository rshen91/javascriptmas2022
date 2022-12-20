function centuryFromYear(num) {
    const EndOfCentury = String(num).slice(2, num.length) == 00
    const cutOffFirstTwoNumbers =  Number(String(Math.floor(num)).slice(0, 2))
    return EndOfCentury ? cutOffFirstTwoNumbers : cutOffFirstTwoNumbers + 1
}



/**
* Test Suite 
*/
describe('centuryFromYear()', () => {
    it('returns current century', () => {
        // arrange
        const year = 1905;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(20);
    });
    
    it('returns current century for edge case of start of century', () => {
        // arrange
        const year = 1700;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(17);
    });    
});