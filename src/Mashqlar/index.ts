// 1mashq

// 1
// interface Person {
//     name: string;
//     age: number;
//     isStudent: boolean;
//   }

// 2
// interface Person {
//     name: string;
//     age: number;
//     isStudent: boolean;
//   }

//   const person: Person = {
//     name: "John Doe",
//     age: 25,
//     isStudent: false,
//   };

// 3
// interface Book {
//     title: string;
//     author: string;
//     publishedYear: number;
//   }

// 4
// interface Book {
//     title: string;
//     author: string;
//     publishedYear: number;
//   }

//   const book: Book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     publishedYear: 1925,
//   };

// 2 mashq

// 1
// const numbers = [1, 2, 3, 4, 5];

// 3
// const string = ["apple","banana","cherry"]

// 3 mashq

// 1
// type StudentRecord = [string, number, boolean];
// const student: StudentRecord = ["Alice", 22, true];

//4 mashq

//1

// let variable: any;
// variable = "Hello, world!";
// variable = 10;
// variable = true;

// 5 mashq

// 1
// let variable: unknown;
// variable = "Hello, world!";
// variable = 10;
// variable = true;
// variable = undefined

// 7 mashq

// 1
// function addNumbers(a: number, b: number): number {
//     return a + b;
//   }

//8 mashq

//1
// enum DaysOfWeek {
//     Monday = "Monday",
//     Tuesday = "Tuesday",
//     Wednesday = "Wednesday",
//     Thursday = "Thursday",
//     Friday = "Friday",
//     Saturday = "Saturday",
//     Sunday = "Sunday"
//   }

// 9 mashq

//1 
// interface Person {
//     name: string;
//     age: number;
// }

// interface Employee {
//     employeeId: number;
//     department: string;
// }

// interface intersection extends Person, Employee { }

// const employee: intersection = {
//     name: "Alice",
//     age: 30,
//     employeeId: 1234,
//     department: "Engineering"
// };

// 10 mashq 

// 1
// interface Vehicle {
//     make: string;
//     model: string;
//     year: number;
// }

// const car : Vehicle = {
//    make : "Mercedes",
//    model: "G-class",
//    year : 2015
// }


// 2
// interface Vehicle {
//     make: string;
//     model: string;
//     year: number;
// }
// interface Details {
//     numberOfDoors: number;
//     isElectric: boolean
// }

// const car : Vehicle  & Details= {
//    make : "Mercedes",
//    model: "G-class",
//    year : 2015,
//    numberOfDoors : 556,
//    isElectric : false
// }

// 11 mashq

//1
// type Address = {
//     street: string;
//     city: string;
//     postalCode: string;
// };


// const myAddress: Address = {
//     street: "Tashxirman",
//     city: "Fergana",
//     postalCode: "265"
// };

// 3
// type PersonWithAddress ={
//   name : string;
//   age : number;
//   isStudent: boolean;
//   address : string;
//   street : string;
//   city : string;
//   postalCode : number
// }

// const myAddress : PersonWithAddress={
//     name: "Mark",
//     age: 28,
//     isStudent: true,
//     address: "Fergana",
//     street: "Main St",
//     city: "Springfield",
//     postalCode: 12345,
// }
