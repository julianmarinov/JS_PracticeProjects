// Beginner-Level Logic with Subtle Traps (71–80)
// (All technically easy, but pay attention to what’s actually being asked.)

// 71. Return "yes" Only If the Input is Exactly true
// Write a function strictYes(input) that returns "yes" only if input === true (not just truthy).

function strictYes(input): string {
    if (input === true) {
        return 'yes';
    } else {
        return 'false';
    }
}

console.log(strictYes(true));

// 72. Add Two Numbers, But Only If Both Are Numbers
// Write a function addIfNumbers(a, b) that returns their sum only if both are numbers. If either is not a number, return "Invalid input".

function addIfNumbers(a: number, b: number): number {
    if (typeof a === 'number' && typeof b === 'number') {
        return a+b;
    } else {
        return `Either ${a} or ${b} is not a number or both are not numbers.`
    }
}

console.log(addIfNumbers(4, 5));

// 73. Return the Second Character of a String
// Write a function secondChar(text) that returns the second character in the string.
// 📌 If the string is shorter than 2 characters, return "Too short".

function secondChar(text: string): string {
    if (text.length > 1) {
        return text.charAt(1);
    } else {
        return 'Too short';
    }
}

console.log(secondChar('Hello'));

// 74. Multiply a Number by Itself Only If It's Positive
// Write a function squareIfPositive(num) that returns the square only if the number is greater than 0. Otherwise, return "Not positive".

function squareIfPositive(num: number): number | string {
    if (num > 0) {
        return num * num;
    } else {
        return 'Not positive';
    }
}

console.log(squareIfPositive(-2));

// 75. Check if a String Starts with a Capital Letter
// Write a function startsWithCapital(str) that returns true only if the first character is a capital letter (A–Z).

function startsWithCapital(str: string): string {
    return /^[A-Z]/.test(str);
}

console.log(startsWithCapital('Hello'))

// 76. Return the First Element Only If the Array Has Exactly 3 Items
// Write a function firstIfThree(arr) that returns the first element only if the array has exactly 3 elements. Otherwise, return "Invalid array".

function firstIfThree(arr: any): void {

}



// 77. Count How Many Items Are Strings in an Array
// Write a function countStrings(arr) that returns how many elements in the array are of type "string".




// 78. Return "Even length" if the String Has an Even Number of Characters
// Write a function checkLengthEven(str) that returns "Even length" only if the string’s length is an even number. Otherwise, return "Odd length".




// 79. Return "Match" Only If the First and Last Characters Are the Same
// Write a function matchEnds(word) that returns "Match" if the first and last characters of the string are the same. Otherwise, return "No match".




// 80. Return "Clean" if the String Does Not Contain Any Numbers
// Write a function noNumbersHere(text) that returns "Clean" only if there are no digits (0-9) in the string. Otherwise, return "Contains numbers".