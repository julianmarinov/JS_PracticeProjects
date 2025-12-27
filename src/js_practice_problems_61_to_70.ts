// Beginner-Level JavaScript Problems (61–70)

// 61. Return a Fixed Value
// Write a function giveFive() that returns the number 5.

function giveFive(): number {
    return 5;
}

console.log(giveFive());

// 62. Combine First and Last Name
// Write a function fullName(first, last) that returns the full name as one string: "First Last".

function fullName(first: string, last: string): string {
    return `${first} ${last}`
}

console.log(fullName('Julian', 'Marinov'));

// 63. Check if Number is Greater Than 10
// Write a function greaterThanTen(num) that returns true if the number is greater than 10, otherwise false.

function greaterThanTen(num: number): boolean {
    if (num > 10) {
        return true;
    } else {
        return false;
    }
}

console.log(greaterThanTen(17));

// 64. Get the Last Character of a String
// Write a function lastChar(str) that returns the last character of the string.

function lastChar(str: string): string {
    return str.at(str.length - 1);
}

console.log(lastChar('Hello'));

// 65. Convert Hours to Seconds
// Write a function hoursToSeconds(hours) that returns how many seconds are in that number of hours.

function hoursToSeconds(hours: number): number {
    return (hours * 60 * 60);
}

console.log(hoursToSeconds(1));

// 66. Add a String to the End of an Array
// Write a function appendItem(arr, item) that returns a new array with item added at the end.

function appendItem(arr: string, item: string): string {
    return arr.concat(item);
}

console.log(appendItem(['Dog','Cat','Elephant'], 'Bear'));

// 67. Is String Empty?
// Write a function isEmptyString(text) that returns true if the string is empty (""), otherwise false.

function isEmptyString(text: string): boolean {
    return text === '' ? true : false
}

console.log(isEmptyString(''));

// 68. Triple a Number
// Write a function triple(value) that returns the input value multiplied by 3.

function triple(value: number): number {
    return (value * 3);
}

console.log(triple(5));

// 69. Return the First Element of an Array
// Write a function firstElement(list) that returns the first item in the array.

function firstElement(list: string): string {
    return list[0];
}

console.log(firstElement([1, 2, 3]))

// 70. Replace Dashes with Spaces
// Write a function unDash(text) that replaces all "-" with " " and returns the new string.
// 📌 Example: "Hello-world-again" → "Hello world again"

function unDash(text: string): string {
    return text.replace(/-/g, ' ');
}

console.log(unDash("Hello-world-again"));