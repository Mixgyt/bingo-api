export function generateRandomNumbers(min, max){
    return Math.floor(Math.random() * (max - min) ) + min;
}

export function getRandomNumbers(min, max, count){
     let numbers = new Set();
     while(numbers.size < count){
          numbers.add(generateRandomNumbers(min,max));
     }
     return Array.from(numbers);
}