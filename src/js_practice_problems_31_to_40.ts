// 31. Say Goodbye to a User
// Write a function sayGoodbye(name) that returns "Goodbye, <name>!".

function sayGoodbye(name: string): string {
    return `Goodbye ${name}!`;
}

console.log(sayGoodbye('Peter'));

// 32. Divide Two Numbers
// Write a function divideNumbers(dividend, divisor) that returns the result of dividend / divisor.

function divideNumbers(divided: number, divisor: number): number | string {
    if (divided === 0 || divisor === 0) {
        return `Division by 0 is not permited!`;
    } else {
        return divided / divisor;
    }
}

console.log(divideNumbers(15, 3));

// 33. Get First Character of a String
// Write a function firstLetter(text) that returns the first character of the given string.

function firstLetter(text: string): string {
    return text.slice(0,1);
}

console.log(firstLetter('Hello'));

// 34. Is the Number Negative?
// Write a function isNegative(amount) that returns true if the number is negative, otherwise false.

function isNegative(amount: number): boolean {
    return (amount < 0) ? true : false;
}

console.log(isNegative(-5));

// 35. Convert Hours to Minutes
// Write a function hoursToMinutes(hours) that returns the number of minutes in the given number of hours.

function hoursToMinutes(hours: number): number {
    return hours * 60;
}

console.log(hoursToMinutes(2));

// 36. Combine Two Words
// Write a function combineWords(wordOne, wordTwo) that returns both words combined with a space between them.

function combineTwoWords(wordOne: string, wordTwo: string): string {
    return `${wordOne} ${wordTwo}`;
}

console.log(combineTwoWords('Peter', 'Parker'));

// 37. Check if an Array is Empty
// Write a function isEmptyList(myArray) that returns true if the array is empty, otherwise false.

function isEmptyList(myArray: string[]): boolean {
    return (myArray.length === 0) ? true : false;
}

console.log(isEmptyList([]));

// 38. Remove First Item in an Array
// Write a function removeFirstItem(fruits) that removes the first item from the array and returns the updated array.

function removeFirstItem(fruits: string[]): string[] {
    fruits.shift();
    return fruits;
}

console.log(removeFirstItem(['apple', 'orange', 'pinaple']));

// 39. Square a Number
// Write a function squareValue(inputNum) that returns the square of the number (number × number).

function squareValue(inputNum: number): number {
    return inputNum * inputNum;
}

console.log(squareValue(3));

// 40. Convert a Number to a String
// Write a function numberToText(numVal) that returns the string version of the number.

function numberToText(numVal: number): string {
    return numVal.toString();
}

console.log(numberToText(4));