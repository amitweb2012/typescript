# Typescript Basics

**Typescript function**
```
function add(a: number, b: number): number {
    return a + b;
}
```

**Typescript anonymous function with contextually typeing**
```
let addNum = function (a: number, b: number): number {
  return a + b;
}
```

**Typescript arrow function**
```
let addNumArrow = (a: number, b: number): number => {
    return a + b;
}
```

**Typescript map function with string type**
```
let names = ['John', 'Doe', 'Smith'];
let lengths = names.map(function (name) {
    return name.length;
});
```

**Typescript never type function**
```function throwError(message: string): never {
    throw new Error(message);
}
```

**Typescript array type function**
```
function getArrayLength(arr: any[]): number {
    return arr.length;
}
```

**Typescript object type function**
```
function getFullName(person: { firstName: string, lastName: string }): string {
    return `${person.firstName} ${person.lastName}`;
}
```

**Typescript optional parameter function**
```
function getFullNameOptional(person: { firstName: string, lastName?: string }): string {
    return `${person.firstName} ${person.lastName}`;
}
```

**Typescript default parameter function**
```
function getFullNameDefault(person: { firstName: string, lastName: string = 'Doe' }): string {
    return `${person.firstName} ${person.lastName}`;
}
```

**Typescript rest parameter function**
```
function getFullNameRest(firstName: string, ...restOfName: string[]): string {
    return `${firstName} ${restOfName.join(' ')}`;
}
```

**Typescript function overloading**
```
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}
```
**Typescript function overloading with optional parameter**
```
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;
function add(a: any, b: any, c?: any): any {
    return a + b + c;
}
```

**Typescript function with destructuring**
```
function getFullNameDestructuring({ firstName, lastName }: { firstName: string, lastName: string }): string {
    return `${firstName} ${lastName}`;
}
```

**Typescript function with ... rest parameter**
```
function getFullNameRestDestructuring(firstName: string, ...restOfName: string[]): string {
    return `${firstName} ${restOfName.join(' ')}`;
}
getFullNameRestDestructuring('John', 'Doe', 'Smith');
```

**Tyepescrit Union type**
```
function getLength(input: string | string[]): number {
    return input.length;
}
```
**Type script object**
```
let person: { firstName: string, lastName: string } = {
    firstName: 'John',
    lastName: 'Doe'
};
```
**Typescript object with readonly property**
```
let person: { readonly firstName: string, lastName: string } = {
    firstName: 'John',
    lastName: 'Doe'
};
```

**Typescript object with array property**
```
let person: { firstName: string, lastName: string, hobbies: string[] } = {
    firstName: 'John',
    lastName: 'Doe',
    hobbies: ['Reading', 'Travelling']
};
```
**Typescript object with tuple property**
```
let person: { firstName: string, lastName: string, hobbies: [string, string] } = {
    firstName: 'John',
    lastName: 'Doe',
    hobbies: ['Reading', 'Travelling']
};
```
**Typescript object with any property**
```
let person: { firstName: string, lastName: string, hobbies: any } = {
    firstName: 'John',
    lastName: 'Doe',
    hobbies: ['Reading', 'Travelling']
};
```

**Typescript object with object property type**
```
let person: { firstName: string, lastName: string, address: { city: string, state: string } } = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        city: 'New York',
        state: 'NY'
    }
};
```
**Typescript object with function property type and return type**
```
let person: { firstName: string, lastName: string, getFullName: () => string } = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};
```

**Typescript object with function property type and return type**
```
let person: { firstName: string, lastName: string, getFullName: (firstName: string, lastName: string) => string } = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function (firstName: string, lastName: string) {
        return `${firstName} ${lastName}`;
    }
};
```

**Typescript object with function property type and return type**
```
let person: { firstName: string, lastName: string, getFullName: (firstName: string, lastName: string) => string } = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: (firstName: string, lastName: string) => {
        return `${firstName} ${lastName}`;
    }
};
```
**Type script enums**
```
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
```

**Typescript enums with string values**
```
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
```

**Typescript interface**
```
interface Person {
    firstName: string;
    lastName: string;
}
let person: Person = {
    firstName: 'John',
    lastName: 'Doe'
};
```
**Typescript interface extends another interface**
```
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
```

**Typescript difference between interface and type**
```
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
```

**Typescript interface with method signature and parameter**
```
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
```
