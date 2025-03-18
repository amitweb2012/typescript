// Typescript narrowing
function triple(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}

// Truthiness Narrowing:
const printLetters = (word?: string): string => {
  if (word) {
    return word.toUpperCase();
  } else {
    throw new Error("Please enter word");
  }
}

// EQUALITY NARROWING
const someDemo = (x: string | number, y: string | boolean ) => {
  if (x === y) {
    x.toUpperCase();
  }
}

// IN Operator Narrowing
interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number
  episodeDuration: number
}

const getRuntime = (media: Movie | TVShow): number => {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
}

console.log(getRuntime({ title: "Mr India", duration: 140 }));
console.log(
  getRuntime({ title: "Friends", numEpisodes: 80, episodeDuration: 30 })
);

// Instanceof Narrowing:
function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}

// Instanceof Narrowing:
class User {
  constructor(public username: string) {}
}
class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    entity;
  } else {
    entity;
  }
}

// Type Predicates

interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string
}

const isCat = (animal: Cat | Dog): animal is Cat => {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog) {
  if (isCat(animal)) {
    return "Meow"; 
  } else {
    return "Woof!";
  }
}

// Discriminated Unions
interface Rooster {
  name: string;
  weight: number;
  age: number;
  type: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  type: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  type: "pig";
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  type: "sheep";
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.type) {
    case "pig":
      return "Oink!";
    case "cow":
      return "Moooo!";
    case "rooster":
      return "Cockadoodledoo!";
    case "sheep":
      return "Baaa!";
    default:
      // We should never make it here, if we handled all cases correctly
      //   const shouldNeverGetHere: never = animal;
      //   return shouldNeverGetHere
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}

const stevie: Rooster = {
  name: "Stevie Chicks",
  weight: 2,
  age: 1.5,
  type: "rooster",
};

console.log(getFarmAnimalSound(stevie));