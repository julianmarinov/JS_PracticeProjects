// 🟡 JavaScript/TypeScript Practice Problems (51–60)

// 51. Count Words in a Sentence
// Write a function countWords(sentence) that returns the number of words in the sentence.
// 📌 Hint: Words are separated by spaces.

function countWords(sentence: string): number {
    return sentence.split(' ').length;
}

console.log(countWords('This is a great sentence'));

// 52. Get the Middle Element of an Array
// Write a function middleElement(arr) that returns the middle element of an array.
// 📌 If the array has an even number of elements, return the one just before the center (e.g., index length / 2 - 1).

function middleElement(inArr: any[]): void {
    let mid: number;
    if (inArr.length % 2 === 0) {
        mid = (inArr.length / 2) - 1;
        return inArr[mid];
    } else {
        mid = Math.round(inArr.length / 2) - 1;
        return inArr[mid];
    }
}

console.log(middleElement(['first element', 'secont element', 'third element', 'forth element', 'fifth element', 'sixth element', 'seventh element']));

// 53. Find the Smallest Number in an Array
// Write a function minValue(numbers) that returns the smallest number in an array.

function minValue(numbersArr: number[]): number {
    return Math.min(...numbersArr);
}

console.log(minValue([1, 2, -43, 23, -512]));

// 54. Check if a String is Uppercase
// Write a function isUppercase(text) that returns true if all letters in the string are uppercase.

function isUppercase(text: string): boolean {
    return text === text.toUpperCase();
}

console.log(isUppercase('THIS IS IT!'))

// 55. Count Even Numbers in an Array
// Write a function countEvens(arr) that returns how many even numbers are in the array.

function countEvens(evArr: number[]): number {
    let count: number = 0;
    for (let i: number = 0; i < evArr.length; i++) {
        if (evArr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log(countEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 56. Reverse the Words in a Sentence
// Write a function reverseWords(sentence) that returns the sentence with the words in reverse order (not the letters).
// 📌 Example: "Hello world" → "world Hello"

function reverseWords(sentenceToRev: string): string {
    let words: string[] = sentenceToRev.split(' ');
    let reversed: string[] = [];
    for (let i: number = words.length - 1; i >= 0; i--) {
        reversed.push(words[i]);
    }
    return reversed.join(' ');
}

console.log(reverseWords('This is awesome'));

// 57. Add All Positive Numbers in an Array
// Write a function sumPositive(nums) that adds up all the positive numbers in an array and returns the total.

function sumPositive(mixNums: number[]): number {
    let sumOfPositives: number = 0;
    for (let i: number = 0; i < mixNums.length; i++) {
        if (mixNums[i] > 0) {
            sumOfPositives += mixNums[i];
        }
    }
    return sumOfPositives;
}

console.log(sumPositive([1, -10, -12, 2, -34, 2, -16, 15]));

// 58. Check if a String Ends with a Period
// Write a function endsWithPeriod(text) that returns true if the string ends with ".", otherwise false.

function endsWithPeriod(textToTest: string): boolean {
    return textToTest.endsWith('.');
}

console.log(endsWithPeriod('This is a sentence.'))

// 59. Multiply All Numbers in an Array
// Write a function multiplyAll(values) that returns the product of all numbers in the array.

function multiplyAll(numValues: number[]): number {
    let result: number = 1;
    numValues.forEach((item: number): void => {
        result = result * item;
    });
    return result;
}

console.log(multiplyAll([1,2,3,4,5,6,7,8,9,10]))

// 60. Replace All Spaces with Dashes in a String
// Write a function dashify(phrase) that replaces all spaces in the string with "-" and returns the result.
// 📌 Example: "Code is fun" → "Code-is-fun"

function dashify(phrase: string): string {
    return phrase.split(' ').join('-');
}

console.log(dashify('This is a test phrase.'))