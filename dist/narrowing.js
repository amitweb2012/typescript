"use strict";
// Typescript narrowing
function triple(value) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}
// Truthiness Narrowing:
const printLetters = (word) => {
    if (word) {
        return word.toUpperCase();
    }
    else {
        throw new Error("Please enter word");
    }
};
// EQUALITY NARROWING
const someDemo = (x, y) => {
    if (x === y) {
        x.toUpperCase();
    }
};
const getRuntime = (media) => {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
};
console.log(getRuntime({ title: "Mr India", duration: 140 }));
console.log(getRuntime({ title: "Friends", numEpisodes: 80, episodeDuration: 30 }));
// Instanceof Narrowing:
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
// Instanceof Narrowing:
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        entity;
    }
    else {
        entity;
    }
}
const isCat = (animal) => {
    return animal.numLives !== undefined;
};
function makeNoise(animal) {
    if (isCat(animal)) {
        return "Meow";
    }
    else {
        return "Woof!";
    }
}
function getFarmAnimalSound(animal) {
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
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
const stevie = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    type: "rooster",
};
console.log(getFarmAnimalSound(stevie));
