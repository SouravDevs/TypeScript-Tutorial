"use-strict";

/*
// Create an array in TypeScript
const nums: number[] = [1, 2, 3, 4, 5];
console.log(nums);
console.log();

const names: String[] = ["James", "Jasmin", "Dave"];
names.push("Calvin")
console.log(names);

console.log();

// Create a readonly array where you can't push any element
const cities: readonly String[] = ["London", "Mumbai", "Delhi"]

console.log(cities);
console.log();

// Create a tuple in TypeScript
const tuple: [number, String, boolean] = [1, "James", true];
console.log(tuple); 

tuple.push("Apple")
console.log();

console.log("Tuple after pushing");
console.log(tuple);

console.log();

// Create a function in TypeScript
function sum(a: number, b: number): number {
    return a + b;
}

function sayHii(): void {
    console.log("Hello World");
}

console.log(sum(10, 10));
console.log();

sayHii()

console.log();

const sum2 = (a:number, b: number, c?: number) => {
    return a + b ;
}

console.log(sum2(10, 10, 10)); 
console.log();

// Create an object in TypeScript
const obj: {id: number , username: string, password: string} [] = [
    {
        id: 100,
        username: "James",
        password: "secret"
    },
    {
        id: 200,
        username: "Harry",
        password: "secret"
    },
]

    console.log(obj); */

/*
const numbers: number[] = [10, 3, 2, 9, 3, 4, 90, 5];


function findMaxNum(arr: number[], value: number): number {
    value = arr[0];

    for(let i: number = 0; i < arr.length; i++) {
        if(arr[i] > value) {
            value = arr[i]
        }
    }
    return value
}

function findMinNum(arr: number[], value: number): number {
    value = arr[0];

    for(let i: number = 0; i < arr.length; i++) {
        if(arr[i] < value) {
            value = arr[i]
        }
    }
    return value;
}

console.log(findMaxNum(numbers, 0));
console.log(findMinNum(numbers, 0));

let words: string = "RRR 2021 Hindi";

function findWord(words:string, target: string, target2: string): string {
    if(words.toUpperCase().includes(target.toUpperCase()) && words.toUpperCase().includes(target2.toUpperCase())) {
        return words
    }
    else return "Not found."
}

console.log(findWord(words, "RRR", "hindi")); */

/*
const movies: { movieName: string; year: number }[] = [
  {
    movieName: "RRR 2021 Hindi",
    year: 2021,
  },

  {
    movieName: "KGF Chapter 2 2021 Hindi",
    year: 2021,
  },

  {
    movieName: "Fighter 2024 Hindi",
    year: 2024,
  },
];

const target1: string = "KGF";
const target2: string = "2021";

const findMovie: { movieName: string; year: number } | undefined = movies.find(
  (movie) =>
    movie.movieName.toUpperCase().includes(target1.toUpperCase()) &&
    movie.movieName.toUpperCase().includes(target2.toUpperCase())
);

if (findMovie) {
  console.log(findMovie);
} else {
  console.log("Not found");
}

console.log();

const searchMovie = (
  movieList: { movieName: string; year: number }[],
  target1: string,
  target2: string
): object => {
  const findMovie: { movieName: string; year: number } | undefined =
    movieList.find(
      (movie) =>
        movie.movieName.toUpperCase().includes(target1.toUpperCase()) &&
        movie.movieName.toUpperCase().includes(target2.toUpperCase())
    );

  if (findMovie) {
    return findMovie;
  } else {
    return { message: "Movie not found" };
  }
};

console.log(searchMovie(movies, "RRR", "2021"));
console.log(searchMovie(movies, "fighter", "2024"));
console.log();

const tuple: readonly [number, string, boolean] = [1, "James", true];
console.log(tuple);

const wordsArray: string[] = ["Good Morning", "Where are you going?", "Hey! How are you?", "What are you doing?", "Is it raining today?"];

function findMaxLengthWord(words: string[]): string {
  let maxLengthWord = words[0];

  for (let i: number = 0; i < words.length; i++) {
    if (words[i].length > maxLengthWord.length) {
      maxLengthWord = words[i];
    }
  }
  return maxLengthWord;
}

function findMinLengthWord(words: string[]): string {
  let minLengthWord = words[0];

  for (let i: number = 0; i < words.length; i++) {
    if (words[i].length < minLengthWord.length) {
      minLengthWord = words[i];
    }
  }
  return minLengthWord;
}

console.log();

console.log(`Maximum word is from : ${findMaxLengthWord(wordsArray)}`);
console.log(`Minimum word is from : ${findMinLengthWord(wordsArray)}`); */

/*
let arr: number[] = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);

const arr2: number[] = [arr[0], 2];
arr2.push(5);

const arr3: [string, number, boolean] = ["Hii", 12000, true];
console.log(arr3);

const words: string[] = [
  "hii",
  "HII",
  "hello",
  "Good Morning",
  "how are you",
  "What are you doing?",
];

const findWordsStartsWithSmallLetter = (words: string[]): string[] => {
  let findWords: string[] = [];

  for (let i: number = 0; i < words.length; i++) {
    if (words[i][0] === words[i][0].toLowerCase()) {
      findWords.push(words[i]);
    }
  }
  return findWords;
};

const findStartsWithSmallLetterWords = findWordsStartsWithSmallLetter(words);
console.log(findStartsWithSmallLetterWords);
console.log();

const findWordsStartsWithCapitalLetter = (words: string[]): string[] => {
  const findWords: string[] = [];

  for (let i: number = 0; i < words.length; i++) {
    if (words[i][0] === words[i][0].toUpperCase()) {
      findWords.push(words[i]);
    }
  }
  return findWords;
};

const findStartsWithCapitalLetterWords =
  findWordsStartsWithCapitalLetter(words);
console.log(findStartsWithCapitalLetterWords);
console.log();

const findWordsWithSmallLetters = (words: string[]): string[] => {
  const findWords: string[] = [];

  for (let i: number = 0; i < words.length; i++) {
    if (words[i].toLowerCase().includes(words[i])) {
      findWords.push(words[i]);
    }
  }

  return findWords;
};

const findSmallLettersWords = findWordsWithSmallLetters(words);
console.log(findSmallLettersWords);
console.log();

const findWordsWithCapitalLetters = (words: string[]): string[] => {
  const findWords: string[] = [];

  for (let i: number = 0; i < words.length; i++) {
    if (words[i].toUpperCase().includes(words[i])) {
      findWords.push(words[i]);
    }
  }
  return findWords;
};

const findCapitalLettersWords = findWordsWithCapitalLetters(words);
console.log(findCapitalLettersWords); */

/*
//      Tuples    //
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

console.log(ourTuple);

// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong')
console.log(ourTuple);

// Define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
//throws error as it is readonly.
ourReadonlyTuple.push('Coding God took a day off');

// Named Tuples
const graph: [x: number, y:number]= [55.2, 41.3];

// Destructuring Tuples
const [x,y] = graph;
console.log(x, y);

let myNamedTuples: readonly [ID: number, username: string, password: string, phone: number, gender: string, isVoter: boolean];
myNamedTuples = [1, "Jacob", "secret", 10000, "Male", true];
console.log(myNamedTuples);

// Destructuring myNamedTuples
const [id, username] = myNamedTuples;
console.log(id, username); */

/*
//    Object Types    //
const car: {type: string, model: string, year: number} = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
}

const {year} = car;
console.log(year);
console.log(car);

// Type Inference
const car2 = {
  type: "Toyota"
};

car2.type = 'Ford';
car.type = 2; // Error: Type 'number' is not assignable to type 'string'

// Optional Properties
const car3: {type: string, mileage: number} = {type: "Toyota", mileage: 2000};

// Example with an optional property
const phone: {name: string, brand?: string} = {name: "SamSung"}

// Index Signatures
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = 50;
nameAgeMap.Jacob = 27;
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'
console.log(nameAgeMap);

const namesList: { [username: string] : string } = {};
namesList.jacob = "Jacob";
console.log(namesList); */

//    TypeScript Enums     //

/*
//Numeric Enums - Default
enum CardinalDirections {
  North,
  East,
  South,
  West
};

let currentDirection = CardinalDirections.North;

// logs 0
console.log(currentDirection);

// throws error as 'North' is not a valid num
// currentDirection = "North"; // Error: "North" is not assignable to type 'CardinalDirections'.

// Numeric Enums - Initialized
enum CardinalDirections2 {
  North = 1,
  East,
  South,
  West
}

// logs 1
console.log(CardinalDirections2.North);
// logs 4
console.log(CardinalDirections2.West);

// Numeric Enums = Fully Initialized
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
};

// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

// String Enums
enum CardinalDirections3 {
  North = "North",
  East = "East",
  South = "South",
  West = "West"
}

// logs "North"
console.log(CardinalDirections3.North);
// logs "West"
console.log(CardinalDirections3.West);

enum userDetails {
  id = 100,
  name = "Jacob Binnie",
  gender = "Male",
  age = 27,
  city = "Auckland",
  country = "New Zealand"
}

console.log(userDetails.name); */

/*
//      TypeScript Type Aliases and Interfaces     //

// Type Aliases
type CarYear = number
type CarType = string
type CarModel = string

type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear : CarYear = 2000;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";

const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
}

console.log(car);

// Interfaces
interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {height: 20, width: 10};
console.log(rectangle);

export default interface userCredentials {
  username: string,
  password: string
}

const userCreds: userCredentials = {username: "jacob", password: "secret"}
console.log(userCreds);

// Extending Interfaces
interface Rectangle2 {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle2 {
  color: string
}

const coloredRectangle: ColoredRectangle = {height: 20, width: 10, color: "red"}
console.log(coloredRectangle);

interface ExtendedUserCredentials extends userCredentials {
  phone: number,
  gender: string,
  isVoter: boolean
}

const extendedUserCredentials: ExtendedUserCredentials = {username: "Jacob", password: "secret", phone: 100000, gender: "Male", isVoter: true}
console.log(extendedUserCredentials); */

/*

//    TypeScript Union Types      //
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}`);
}

printStatusCode(404)
printStatusCode('404')

// Union Type Errors
function printStatusCode2(code: string | number) {
  console.log(`My status code is ${code}.`);
}

interface myUnionUserCreds {
  username: string,
  phone: string | number
}

const myUniUserCreds: myUnionUserCreds = {username: "Jacob", phone: "1234567890"}
console.log(myUniUserCreds); */

/*
//      TypeScript Functions      //

// Return Type
function getTime(): number {
  return new Date().getTime();
}

console.log(getTime());

// Void Return Type
function printHello(): void {
  console.log("Hello!");
}

printHello();

// Parameters
function multiply(a: number, b: number) {
  return a * b;
}

console.log(multiply(10, 10));

// Optional Parameters
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

console.log(add(10, 10, 10));

// Default Parameters
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

console.log(pow(2, 10));

// Named Parameters
function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}

// Rest Parameters
function add2(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

console.log(add2(10, 10, 10, 10, 10));

// Type Alias
type Negate = (value: number) => number;

const negateFunction: Negate = (value) => value * -1;
console.log(negateFunction(10)); */

/*
//      Casting with as     //
let x: unknown = 'hello';
console.log((x as string).length);

let y: unknown = 4;
console.log((y as string).length);

// Casting with <>
let z: unknown = 'hello';
console.log((<string>x).length);

// Force casting
let a:unknown = 'hello';
// console.log(((a as unknown) as number).length); */

/*
//      TypeScript Classes      //
class Person {
  name: string;
}

const person = new Person();
person.name = "Jane";

console.log(person.name);

// Members: Visibility
class Person2 {
  private name: string;

  public constructor (name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person2 = new Person2("Jane");
console.log(person2.getName());

// Parameters Properties
class Person3 {
  public constructor (private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const person3 = new Person3("Jane");
console.log(person3.getName());

// Readonly
class Person4 {
  private readonly name: string;

  public constructor (name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person4 = new Person4("Jane");
console.log(person4.getName());

// Inheritence: Implements
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

// Inheritance: Extends
interface Shape {
  getArea: () => number
}

class Rectangle2 implements Shape{
  public constructor (protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle2 {
  public constructor (width: number) {
    super(width, width)
  }
  // getArea gets inherited from Rectangle2
}

// Override
interface Shape {
  getArea: () => number
}

class Rectangle3 implements Shape {
  // using protected for these members allows access from classes that extend from this cases, such as Square
  public constructor (protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`
  }
}

class Square2 extends Rectangle3 {
  public constructor (width: number) {
    super(width, width)
  }

  // this toString replaces the toString from Rectangle
  public override toString(): string {
    return `Square[width=${this.width}]`
  }
}

// Abstract Classes
abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`
  }
}

class Rectangle4 extends Polygon {
  public constructor (protected readonly width: number, protected readonly height: number) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
} */

//      TypeScript Utility Types      //

/*
// Partial
interface Point {
  x: number,
  y: number
}

let pointPart: Partial<Point> = {};
// `Pertial` allows x and y to be optional

pointPart.x = 10;
console.log(pointPart.x);

// Required
interface Car {
  make: string,
  model: string,
  mileage?: number
}

let myCar: Required<Car> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000  // `Required` forces mileage to be defined
} ;

// Record
const nameAgeMap: Record<string, number> = {
  'Alice': 21,
  'Bob': 25
}

console.log(nameAgeMap);

// Omit
interface Person {
  name: string,
  age: number,
  location?: string
}

const bob: Omit<Person, 'age' | 'location'> = {
  name: 'Bob',
};
// `Omit` has removed age and location from the type and they can't be defined here

// Pick
interface Person {
  name: string,
  age: number,
  location?: string
}

const jacob: Pick<Person, 'name'> = { name: 'Jacob Binnie' }
console.log(jacob);
// `Pick` has only kept name, so age and location were removed from the type and they can't be defined here

// Exclude
type Primitive = string | number | boolean;
const value: Exclude<Primitive, string> = true;
// a string cannot be used here since Exclude removed it from the type.

// ReturnType
type PointGenerator = () => {x: number, y: number};
const point: ReturnType<PointGenerator> = {x: 10, y: 10}

console.log(point);

// Parameters
type PointPrinter = (p: {x: number, y: number}) => void;
const point2: Parameters<PointPrinter>[0] = {x: 10, y: 10};
console.log(point2);

// Readonly
interface Person {
  name: string,
  age: number
}

const person: Readonly<Person> = {name: "Dylan", age: 35};
person.name = "Jacob"; // prog.ts(11, 8): error TS2540: Cannot assign to 'name' because it is a read-only property. */

/*
//      TypeScript Keyof      //
// keyof with explicit keys
interface Person {
  name: string,
  age: number
}

// `keyof Person` here creates a union type of "name" and "age" other strings will not be allowed
function printPersonProperty(person: Person, property: keyof Person) {
  console.log(`Printing person property ${property}: ${person[property]}`);
}

let person = {
  name:"Max",
  age: 27
}

printPersonProperty(person, "name"); // Printing person property name: Max

// keyof with index signatures
type StringMap = {[key: string]: unknown};
// `keyof StringMap` resolves to 'string' here
function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value }
} */

//      TypeScript Nill & Undefined
let value: string | undefined | null = null;
value = "hello";
value = undefined;

// Optional Chaining
interface House {
  sqft: number;
  yard?: {
    sqft: number
  };
}

function printYardSize(house: House) {
  const yardSize = house.yard?.sqft;
  
  if(yardSize === undefined) {
    console.log("No yard");
  }
  else {
    console.log(`Yard is ${yardSize} sqft`);
  }
}

let home: House = {
  sqft: 500
}

printYardSize(home); // Prints 'No yard'

// Nullish Coalescence
function printMileage(mileage: number | null | undefined) {
  console.log(`Mileage : ${mileage ?? 'Not available'}`);
}

printMileage(null); // Prints 'Mileage: Not Avaialbe'
printMileage(0)