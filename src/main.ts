type TextOrNumber = string | number

const value1: TextOrNumber = "Assalomu alaykum"
const value2: TextOrNumber = 99

console.log(value1);
console.log(value2);



//======================================================================================

function checkType(value: string | number) : string {
  if(typeof value === "string") {
    return "Matn"
  } else {
    return "Raqam"
  }
}

const result1 = checkType("Hello")
const result2 = checkType(17)

console.log(result1);
console.log(result2);


//======================================================================================

type User = {
  id: number;
  name: string;
  age: number
}
const user1: User =  {
  id: 1,
  name: "Abdulaziz",
  age: 14
}

console.log(user1);


//=======================================================================================

interface Person {
  id: number;
  name: string;
  age?:number
}

const person1: Person = {
  id: 2,
  name: "Abdurrohman"
}

console.log(person1);


//========================================================================================

let userTuple: [number, string, boolean]
userTuple = [1, "Salom" , true]

console.log(userTuple);

//======================================================================================

type NumberArray = number[]

const numbers : NumberArray = [1, 3, 12, 15, 21]

console.log(numbers);

//=======================================================================================

const enum Direction {
  Up = "UP",
  Down = "DOWN",
  Right = "RIGHT",
  Left = "LEFT"
}

let move: Direction = Direction.Right

console.log(move);


