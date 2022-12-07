/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
    let crazySentence = '';
    for (let i=0; i < str.length - 1; i++) {
        crazySentence += (i % 2) ? str[i].toUpperCase() : str[i].toLowerCase()
    }
    return crazySentence;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));