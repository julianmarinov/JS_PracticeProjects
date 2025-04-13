// 1. Sum of Two Numbers
// Write a function sum(a, b) that returns the sum of two numbers.

function sum(a, b) {
    return a + b;
}

console.log(sum(5, 10));

// 2. Even or Odd
// Write a function isEven(num) that returns "Even" if the number is even and "Odd" if the number is odd.

function isEven(num) {
    if (isNaN(num)) {
        console.log(`"${num}" is not a number!`);
    } else if ((num % 2) === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

console.log(isEven(14));

// 3. Find the Largest Number
// Write a function maxOfThree(a, b, c) that returns the largest of three numbers.

function maxOfThree(a, b, c) {
    let max = a;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return `"${a}" is not a number!`;
    } else if (max < b) {
        max = b;
    } else if (max < c) {
        max = c;
    }
    // or just use Math.max(a, b, c);
    return `Between ${a}, ${b} and ${c}, the largest number is ${max}.`;
}

console.log(maxOfThree(-4, 18, -423));

// 4. Reverse a String
// Write a function reverseString(str) that returns the reverse of the given string.

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('Test'));

// 5. Factorial
// Write a function factorial(n) that returns the factorial of a non-negative integer n.

function factorial(n) {
    let fact = n;
    if (isNaN(n) || n < 0) {
        return `"${n}" is not a positive number!`;
    }
    if (n === 0 || n === 1) {
        return `${n} factorial = 1`;
    }
    for (let i = 1; i < n; i++) {
        fact = fact*i;
    }
    return `${n} factorial = ${fact}`;
}

console.log(factorial(5));

// 6. FizzBuzz
// Write a function fizzBuzz(n) that prints the numbers from 1 to n. For multiples of 3, print "Fizz", for multiples of 5 print "Buzz", and for multiples of both 3 and 5 print "FizzBuzz".



// 7. Palindrome Check
// Write a function isPalindrome(str) that returns true if the given string is a palindrome (same forwards and backwards), otherwise false.



// 8. Find the Smallest Number in an Array
// Write a function minInArray(arr) that returns the smallest number in an array.



// 9. Count Vowels
// Write a function countVowels(str) that returns the number of vowels in a given string.



// 10. Remove Duplicates from an Array
// Write a function removeDuplicates(arr) that returns a new array with all duplicates removed.



// 11. Sum of Numbers in an Array
// Write a function sumArray(arr) that returns the sum of all numbers in an array.



// 12. Convert Celsius to Fahrenheit
// Write a function celsiusToFahrenheit(c) that converts Celsius to Fahrenheit using the formula F = C * 9/5 + 32.



// 13. Generate a Random Number
// Write a function randomNumber(min, max) that returns a random number between min and max (inclusive).



// 14. Capitalize First Letter
// Write a function capitalize(str) that capitalizes the first letter of a string.



// 15. Check Prime Number
// Write a function isPrime(num) that returns true if the number is prime, otherwise false.



// 16. Get All Prime Numbers up to N
// Write a function getPrimes(n) that returns an array of all prime numbers up to n.



// 17. Convert String to Array
// Write a function stringToArray(str) that splits a string into an array of words.



// 18. Find Longest Word in a Sentence
// Write a function longestWord(sentence) that returns the longest word in a sentence.



// 19. Count Occurrences of a Character
// Write a function countChar(str, char) that counts how many times char appears in str.



// 20. Check if Array is Sorted
// Write a function isSorted(arr) that returns true if the array is sorted in ascending order, otherwise false.