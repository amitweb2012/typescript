# Typescript Basics
    
**Type script function**

// Type script function
function add(a: number, b: number): number {
    return a + b;
}

// Type script anonymous function with contextually typeing
let addNum = function (a: number, b: number): number {
  return a + b;
}

// Type script arrow function
let addNumArrow = (a: number, b: number): number => {
    return a + b;
}

// Type script map function with string type
let names = ['John', 'Doe', 'Smith'];
let lengths = names.map(function (name) {
    return name.length;
});

// Type script never type function
function throwError(message: string): never {
    throw new Error(message);
}
  
// Strin type function
function greet(name: string): string {
    return `Hello ${name}`;
}
// array type function
function getArrayLength(arr: any[]): number {
    return arr.length;
}
// object type function
function getFullName(person: { firstName: string, lastName: string }): string {
    return `${person.firstName} ${person.lastName}`;
}
// optional parameter function
function getFullNameOptional(person: { firstName: string, lastName?: string }): string {
    return `${person.firstName} ${person.lastName}`;
}
// default parameter function
function getFullNameDefault(person: { firstName: string, lastName: string = 'Doe' }): string {
    return `${person.firstName} ${person.lastName}`;
}
// rest parameter function
function getFullNameRest(firstName: string, ...restOfName: string[]): string {
    return `${firstName} ${restOfName.join(' ')}`;
}
// function overloading
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}
// function overloading with optional parameter
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;
function add(a: any, b: any, c?: any): any {
    return a + b + c;
}
// function overloading with default parameter
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

// typescript function with destructuring
function getFullNameDestructuring({ firstName, lastName }: { firstName: string, lastName: string }): string {
    return `${firstName} ${lastName}`;
}
 // typescript function with ... rest parameter
function getFullNameRestDestructuring(firstName: string, ...restOfName: string[]): string {
    return `${firstName} ${restOfName.join(' ')}`;
}
getFullNameRestDestructuring('John', 'Doe', 'Smith');

// tyepescrit Union type
function getLength(input: string | string[]): number {
    return input.length;
}

**Type script object**

// Typescript objects
let person: { firstName: string, lastName: string } = {
    firstName: 'John',
    lastName: 'Doe'
};
// typescript object with optional property
let person: { firstName: string, lastName?: string } = {
    firstName: 'John'
};
// typescript object with readonly property
let person: { readonly firstName: string, lastName: string } = {
    firstName: 'John',
    lastName: 'Doe'
};
// typescript object with array property
let person: { firstName: string, lastName: string, hobbies: string[] } = {
    firstName: 'John',
    lastName: 'Doe',
    hobbies: ['Reading', 'Travelling']
};
// typescript object with tuple property
let person: { firstName: string, lastName: string, hobbies: [string, string] } = {
    firstName: 'John',
    lastName: 'Doe',
    hobbies: ['Reading', 'Travelling']
};
// typescript object with any property
let person: { firstName: string, lastName: string, hobbies: any } = {
    firstName: 'John',
    lastName: 'Doe',
    hobbies: ['Reading', 'Travelling']
};
// typescript object with object property type
let person: { firstName: string, lastName: string, address: { city: string, state: string } } = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        city: 'New York',
        state: 'NY'
    }
};
// typescript object with function property type and return type
let person: { firstName: string, lastName: string, getFullName: () => string } = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};
// typescript object with function property type and return type
let person: { firstName: string, lastName: string, getFullName: (firstName: string, lastName: string) => string } = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function (firstName: string, lastName: string) {
        return `${firstName} ${lastName}`;
    }
};
// typescript object with function property type and return type
let person: { firstName: string, lastName: string, getFullName: (firstName: string, lastName: string) => string } = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: (firstName: string, lastName: string) => {
        return `${firstName} ${lastName}`;
    }
};

**Type script enums**

// Typescript enums
enum Direction {
    Up,
    Down,
    Left,
    Right
}
let direction: Direction;
direction = Direction.Up;
direction = Direction.Down;
direction = Direction.Left;
direction = Direction.Right;

// Typescript enums with string values
enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}
let direction: Direction;
direction = Direction.Up;
direction = Direction.Down;
direction = Direction.Left;
direction = Direction.Right;

** Type script interface **

// Typescript interfaces
interface Person {
    firstName: string;
    lastName: string;
}
let person: Person = {
    firstName: 'John',
    lastName: 'Doe'
};
// typescript interface extends another interface

interface Person {
    firstName: string;
    lastName: string;
}
interface Employee extends Person {
    empCode: number;
}
let emp: Employee = {
    empCode: 1001,
    firstName: 'John',
    lastName: 'Doe'
};

// typescript difference between interface and type

type Person = {
    firstName: string;
}

type Person = {
    age: number;
}

const person: Person = {
    firstName: 'John',
    age: 30 // age did not exist in the original type
}

interface Person {
    firstName: string;
}

interface Person {
    age: number;
}

const person: Person = {
    firstName: 'John',
    age: 30 // existing property
}

// typescript type
type Name = {
    firstName: string;
    lastName: string;
}

type Person = Name & {
    age: number;
}

const person: Person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30 // extened property
}

interface Name {
    firstName: string;
    lastName: string;
    sayHi: () => string;
}

interface Person extends Name {
    age: number;
}

const person: Person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30; // extened property
    sayHi: () => 'Hello';
}

// typescript interface with method signature and parameter
interface Product {
    name: string;
    price: number;
    calculateTax: (tax: number) => number;
}

const maggi: Product = {
    name: 'Maggi',
    price: 20,
    calculateTax: (tax: number) => {
        return this.price * tax;
    }
}
maggi.calculateTax(0.05);
