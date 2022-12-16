/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palidrome, return true. If it isn't, return false. 
*/

function isPalindrome(str){
    const half = str.toLowerCase().split('')
    const isEqual = half.length % 2 === 0
    const sameLengths = half.slice(0, half.length / 2).reverse().join('') === half.slice(half.length / 2).join('')
    const oddNumber = half.slice(0, (half.length / 2) + 1).reverse().join('') === half.slice(half.length / 2).join('')
    return isEqual ? sameLengths : oddNumber;
}

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));
