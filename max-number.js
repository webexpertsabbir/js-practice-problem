
function maxNmuber(numbers){
    let lergest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element < lergest){
            lergest = element
        }
    }
    return lergest;
}

const heights = [126, 245, 30, 200, 300, 39];
const heightsNumber = maxNmuber(heights);
console.log(heightsNumber);