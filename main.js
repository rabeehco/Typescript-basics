"use strict";
exports.__esModule = true;
var message = 'welcome back';
console.log(message);
var isValid = true;
var total = 23;
var name = 'rabeeh';
var sentence = "My name is ".concat(name, "\nI will rock the typescript");
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null; // Declaring boolean with null value
var myName = undefined;
var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3, 4]; // Array list of number types
var person1 = ['chris', 22]; // The order (string, number) must match
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {})); // enum are data structures of constant length that hold a set of constant values.
var c = Color.Green;
console.log(c);
var anyValue = 'hold on'; // use type 'any' to assign any values
anyValue = false;
anyValue = 'Ray';
var aVariable = 5; // we can use aVariable as any type. Typescript won't show errors
// aVariable()
console.log(aVariable.name);
aVariable.toUpperCase();
var bVariable = 5; // we can use bVariable as any type but 
function hasName(obj) {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj;
}
if (hasName(bVariable)) {
    console.log(bVariable.name);
}
/* bVariable(); */ // shows error when you declare other type.
// console.log(bVariable.name);
bVariable.toUpperCase(); // now the problem solve, as we added as string in bracket.
var a;
a = 10;
a = true;
var b = 11;
// b = false;  //this can't be done because type script already give the type when initializing variable
var multiType;
multiType = 20;
multiType = true;
function add(num1, num2) {
    if (num2) { // the question mark after num2 will make it undefined if we don't pass second parameter in the function
        return num1 + num2; // in function parameter you can give num1: number = 10, which will give 10 as default parameter for num1
    }
    return num1;
}
add(5, 5);
add(5, 'hello'); // shows error!
add(); // hover on the bracket. It shows the return type and arguments type
function fullName(person) {
    console.log("".concat(person.firstname, " ").concat(person.lastname));
}
var p = {
    firstname: 'Hari',
    lastname: 'Lal'
};
fullName(p);
