//carecter reverse
function reverseString(text){
    let reversed = '';
    for(let i = text.length-1; i >= 0; i--){
        const element = text[i];
        reversed = reversed + element;
    }
    return reversed;

}
const myString = 'I am a good boy';
const sreversed = reverseString(myString);
console.log(sreversed);

// word reverse

function reverseWord(str){
    const words = str.split(' ');
    const result = [];
    for(let i = words.length-1; i >= 0; i--){
        const emWord = words[i];
        result.push(emWord);
    }
    const reversed1 = result.join(' ');
    return reversed1;
}
const myString2 = 'i am a good boy';
const finalResult = reverseWord(myString2);
console.log(finalResult);