/*If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/
const panic = (s) => {
    const letters = s.split(' ');
    const lastCharacter = letters[letters.length-1]
    const isFullSentence = lastCharacter[lastCharacter.length -1] === '!' || lastCharacter[lastCharacter.length -1] === '.'
    const upperLetters = letters.map((l) => l.toUpperCase())
    return isFullSentence ? upperLetters.join(' 😱 ') : upperLetters.join(' ')
}

// Test your function
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming!"))

