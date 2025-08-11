// Data types summary according to interview cracked details:

// Javascript is a      typed language...

// kis trh c data ko memory me store kia jata hy us hisab c data ko data types me categorize kia jata hy
// data types ko 2 categories me divide kia jata hy:

// Primitive: (called by value hote hen) iska original data nh diya jata jb b hm isko call krte hen copy kr k memory me phr reference dia jata hy or jo b hm changes krte hen wo original me nh hotin copy me hoti hen
// 1. string, 2. number, 3. boolean, 4. null(empty string) 5. undefined, 6. symbol 7. BigInt

const string = "Fariha";
const integer = 23;

const float = 23.4;
const boolean = true;

const outSideTemperatur = null;   // null ki data type object hoti hy
const notDefined = undefined;      // undefined ki data type bhi object hoti hy
let userEmail;

const id = Symbol('1223');
const anotherId = Symbol('1223');
console.log(id === anotherId);

const BigInt = 243512819289231n;

// Reference type / non-primitive type: 
// 1. Arrays, 2. Objects, 3. functions   // inki data types hmesha function hi ata hy array, objects and function ki

const array = ["Fariha", "Faham", "Faraz", "Falak"];

const object = {
    name: "Fariha",
    age: 24,
    isMarried: true,
}

const myFunc = function(){
    console.log("My function")
}

let myFunc2 = () => {
    console.log("My function 2")
}

/* Primitive Data Type (Call by Value) => 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt. 
1) The data type of null is an object.
2) The data type of String is a string.
3) The data type of Boolean is Boolean.
4) The data type of Undefined is undefined.
5) The data type of Symbol is a symbol.
6) The data type of Number is number.
7) The data type of BigInt is BigInt. 
Non-Primitive Data Type (Call by Reference) => 3 types: Array, Object, Function.
1) The data type of Array is an object. 
And the Data Types of Non primitive data type is Function object. 
*/

