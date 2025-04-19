"use strict";
// 21. Greet a User
// Write a function sayHello(username) that takes a name as a parameter and returns "Hello, <username>!".
function sayHello(username) {
    console.log(`Hello, ${username}`);
}
sayHello('Julian');
// 22. Multiply Two Values
// Write a function multiplyValues(x, y) that returns the result of x * y.
function multiplyValues(x, y) {
    return x * y;
}
console.log(multiplyValues(3, 5));
// 23. Get the Last Element in an Array
// Write a function lastItem(items) that returns the last element of an array items.
function lastItem(items) {
    let lastIndex = items.length - 1;
    if (items.length === 0) {
        return 'error: empty array';
    }
    return items[lastIndex];
}
console.log(lastItem(['first one', 'middle', 'last one']));
// 24. Check If a Number is Positive
// Write a function isPositive(value) that returns true if value is positive, and false otherwise.
function isPositive(value) {
    if (value > 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isPositive(-5));
// 25. Convert Minutes to Seconds
// Write a function toSeconds(minutes) that converts a number of minutes into seconds.
function toSeconds(minutes) {
    return minutes * 60;
}
console.log(toSeconds(2));
// 26. Repeat a Word
// Write a function repeatWord(word, times) that returns the word repeated times times.
function repeatWord(word, times) {
    for (let i = 0; i < times; i++) {
        console.log(word);
    }
}
repeatWord('hello', 3);
// 27. Check if a String Contains a Substring
// Write a function hasWord(text, keyword) that returns true if text contains keyword, otherwise false.
function hasWord(text, keyword) {
    let words = text.split(' ');
    if (words.indexOf(keyword) !== -1) {
        return true;
    }
    else {
        return false;
    }
}
console.log(hasWord('Dobro utro na vsichki', 'nas'));
// 28. Add an Item to an Array
// Write a function addToList(list, newItem) that adds newItem to the end of list and returns the updated array.
function addToList(list, newItem) {
    list.push(newItem);
    return list;
}
console.log(addToList(['melon', 'banana', 'apple'], 'sky'));
// 29. Check if a Number is Zero
// Write a function isZero(valueToCheck) that returns true if the number is 0, otherwise false.
function isZero(valueToCheck) {
    return valueToCheck === 0;
}
console.log(isZero(0));
// 30. Convert a Boolean to a String
// Write a function boolToString(flag) that returns "true" if flag is true, or "false" if it is false.
function boolToString(flag) {
    if (flag === true) {
        return 'true';
    }
    else if (flag === false) {
        return 'false';
    }
    else {
        return 'error';
    }
}
console.log(boolToString(true));
//# sourceMappingURL=js_practice_problems_21_to_30.js.map