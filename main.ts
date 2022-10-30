export {}
let message = 'welcome back'
console.log(message)

let isValid: boolean = true;

let total: number = 23;

let name:string = 'rabeeh'

let sentence: string = `My name is ${name}
I will rock the typescript`

console.log(sentence)

let n: null = null
let u: undefined = undefined

let isNew: boolean = null // Declaring boolean with null value

let myName: string = undefined

let list1: number[] = [1,2,3,4,5]

let list2: Array<number> = [1,2,3,4] // Array list of number types

let person1: [string, number] = ['chris', 22] // The order (string, number) must match

enum Color {Red=5, Green, Blue} // enum are data structures of constant length that hold a set of constant values.

let c: Color = Color.Green
console.log(c)

let anyValue: any = 'hold on' // use type 'any' to assign any values

anyValue = false
anyValue = 'Ray'

let aVariable:any = 5; // we can use aVariable as any type. Typescript won't show errors
// aVariable()
console.log(aVariable.name)
aVariable.toUpperCase()

var bVariable: unknown = 5; // we can use bVariable as any type but 

function hasName(obj: any): obj is { name: string }{
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj
}

if(hasName(bVariable)){
    console.log(bVariable.name)
}

/* bVariable(); */       // shows error when you declare other type.
// console.log(bVariable.name);
(bVariable as string).toUpperCase(); // now the problem solve, as we added as string in bracket.

let a;
a=10
a = true;

let b = 11
// b = false;  //this can't be done because type script already give the type when initializing variable

let multiType: number | boolean;
multiType = 20;
multiType = true;

function add(num1:number, num2?:number): number { // "ber): number {" specifies the return type of the number.  
    if(num2){                                     // the question mark after num2 will make it undefined if we don't pass second parameter in the function
        return num1+num2;                         // in function parameter you can give num1: number = 10, which will give 10 as default parameter for num1
    }

    return num1;
}

add(5,5)
add(5, 'hello') // shows error!
add() // hover on the bracket. It shows the return type and arguments type

function fullName(person: {firstname: string})

