// (Same difficulty as your previous sets)
//
// 41. Double a Number
// Write a function doubleIt(num) that returns the number multiplied by 2.

function doubleIt(num: number): number {
    return num * 2;
}

console.log(doubleIt(10));

// 42. Say My Age
// Write a function sayAge(name, age) that returns a sentence like: "Alice is 30 years old.".

function sayAge(name: string, age: number): string {
    return `${name} is ${age} years old.`;
}

console.log(sayAge('Alice', 30));

// 43. Get the Length of a String
// Write a function getLength(text) that returns how many characters are in the string.

function getLength(text: string):number {
    return text.length;
}

console.log(getLength('Banana'));

// 44. Check if a Number is Odd
// Write a function isOdd(value) that returns true if the number is odd, otherwise false.

function isOdd(value: number): boolean {
    return value % 2 !== 0;
}

console.log(isOdd(4));

// 45. Add an Exclamation Mark
// Write a function excite(message) that adds an exclamation mark to the end of the string and returns it.

function excite(message: string): string {
    return `${message}!`;
}

console.log(excite('This is a banana'));

// 🟡 Level-Up Problems (46–50)
// (Slightly more involved logic, but still beginner-friendly)
// 46. Sum All Numbers in an Array
// Write a function sumList(numbers) that returns the total sum of all the numbers in the array.

function sumList(numbers: number[]): number {
    let sum: number = 0;
    for (let i: number = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(sumList([1, 2, 3, 4]));

// 47. Find the Longest Word in a Sentence
// Write a function longestWord(sentence) that returns the longest word found in a string.

function longestWord(sentence: string): string {
    let words: string[] = sentence.split(" ");
    let longest: string = words[0];
    for (let i: number = 0; i < words.length; i++) {
        if (longest.length < words[i].length) {
            longest = words[i];
        }
    }
    return longest;
}

console.log(longestWord('Hello my friend, how are your feelings today?'));

// 48. Check if All Numbers in Array Are Positive
// Write a function allPositive(nums) that returns true if every number in the array is positive, otherwise false.

function allPositive(nums: number[]): boolean {
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] <= 0) {
            return false;
        } else {
            continue;
        }
    }
    return true;
}

console.log(allPositive([1, 3, -5, 12]));

// 49. Capitalize the First Letter of a String
// Write a function capitalizeFirst(input) that returns the same string with just the first letter capitalized.

function capitalizeFirst(input: string): string {
    let inputArr: string [] = input.split('');
    inputArr[0] = inputArr[0].toUpperCase();
    return inputArr.join('');
}

console.log(capitalizeFirst('today is the best day of my life!'));

// 50. Count How Many Times a Letter Appears
// Write a function countLetter(text, letter) that returns how many times the given letter appears in text.

function countLetter(text: string, letter: string): number {
    let textLowerCase: string = text.toLowerCase();
    let letterLowerCase: string = letter.toLowerCase();
    let counter: number = 0;
    for (let i: number = 0; i < textLowerCase.length;) {
        if (textLowerCase.substring(i, (i + 1)) === letterLowerCase) {
            i++; // I know there should be a better way to take the i++ outside but I don't know how
            counter++;
        } else {
            i++;
            continue;
        }
    }
    return counter;
}

console.log(countLetter('Today is the best day of my life!', 'o'));