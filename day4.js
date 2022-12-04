const whisper = (sentence) => {
    const hasExclaim = sentence.split('')[sentence.split('').length - 1] === '!';
    const newSentence = sentence.split('').map((word, index) => {
        if (index === 0) {
            return `shh... ${word.toLowerCase()}`
        }
        return word.toLowerCase()
    })
    console.log(hasExclaim)
    return hasExclaim ? newSentence.join('').replace('!', '') : newSentence.join('')
}
console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));