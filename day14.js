function countVowelConsonant(str) {
    return str.split('').reduce((prevVal, val) => {
        console.log(prevVal)
        return ['a','e', 'i','o', 'u'].indexOf(val) !== -1 ? prevVal += 1 : prevVal += 2
    }, 0)
  }
  
  
  
  /**
  * Test Suite 
  */
  describe('countVowelConsonant()', () => {
      it('returns total of vowels(1) and consonants(2) to be added', () => {
          // arrange
          const value = 'abcde';
          
          // act
          const result = countVowelConsonant(value);
  
          // log
          console.log("result: ", result);
          
          // assert
          expect(result).toBe(8);
      });
  });