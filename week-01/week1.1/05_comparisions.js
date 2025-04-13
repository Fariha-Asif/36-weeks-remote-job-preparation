// comparision:

console.log( 2 > 1) // true
console.log( 2 < 1) // false
console.log( 2 >= 1) // true
console.log( 2 <= 1) // false
console.log( 2 == 1) // false
console.log( 2 != 1) // true
console.log( 2 === 1) // false
console.log( 2 !== 1) // true
console.log( 2 == "2") // true => loose equality => type conversion hota hy
console.log( 2 === "2") // false => strict equality => type conversion nahi hota hy

console.log("2" > 1); //typescript me yeh allow hota hi nh hy phle hi error ajata hy
console.log(2 > "1");

/*
console.log(null > 0); // false => null ko number me convert krne pr 0 milega
console.log(null == 0); // false => null ko number me convert krne pr 0 milega
console.log(null >= 0); // true => null ko number me convert krne pr 0 milega

console.log(undefined > 0); // false => undefined ko number me convert krne pr NaN milega
console.log(undefined == 0); // false => undefined ko number me convert krne pr NaN milega
console.log(undefined >= 0); // false => undefined ko number me convert krne pr NaN milega
console.log(undefined < 0); // false => undefined ko number me convert krne pr NaN milega
console.log(undefined > null); // false => undefined ko number me convert krne pr NaN milega
console.log(undefined == null); // true => undefined ko number me convert krne pr NaN milega

yeh sb bht confusing hota hy to isliye koshish kren yeh nh kren

*/

// strict checking:

// console.log("2" === 2 ); it will through error


