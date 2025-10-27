//       

// In programming, type conversion is the process of converting data of one type to another. For example, converting string data to number.

// There are two types of type conversion in JavaScript:

// Implicit Conversion - Automatic type conversion.
// Explicit Conversion - Manual type conversion

// 1. implict conversion===> Automtic converison

//1. anything to string

let result = 2 + ""
console.log(result , typeof result);// 2,string

let b = 2 + "1"
console.log(b , typeof b);// 21 , string

let c = "2" + "1"
console.log(c , typeof c);

let d = undefined + "3"
console.log(d , typeof d);

let e = true + "3"
console.log(e , typeof e);
// anything added to a string will become a string and the two operands get join

let f = 3 - "2"
console.log(f , typeof f);

let f1 =  3 + 2
console.log(f1 , typeof f1);

let g = true - "afnaan"
console.log(g , typeof g);

// any datatype to boolean
// true = 1
// false = 0

let a1 = "5" - false
console.log(a1 , typeof a1);

let a2 = 2 - "true"
console.log(a2 , typeof a2);


////null to number
// null = 0

let b1 = 4 + null;
console.log(b1,typeof b1); // null = 0 


// undefined to null

let c1 = undefined * 4
console.log(c1 , typeof c1);

let c2 = 3 + undefined
let c3 = "4" + undefined

console.log(c2 , c3 , typeof c3,c2);

// let num = 6;
// console.log(num, typeof num);

let num2 = "123"
console.log(num2 , typeof num2);




// explict conversion 

//1. using number () method

// let a = Number("10")
// console.log(a, typeof a);
//  let a = Number(null)
// console.log(a);
// let a = Number(true)
// console.log(a);
// let a = Number(``)
// console.log(a);

//2. string method

let b2;
b2 = String(243)
console.log(b2 , typeof b2);
b2 = String(true)
console.log(b2 ,typeof b2);
b2 = String (null)
console.log(b2 , typeof b2);



// 3. Boolean method

let _c;
_c = Boolean(1);
console.log(_c , typeof _c );
_c = Boolean(null);
console.log(_c);
_c = Boolean(true);
console.log(_c);
_c = Boolean("1");
console.log(_c);
_c = Boolean("0");
console.log(_c);
_c = Boolean(undefined);
console.log(_c);
_c = Boolean(" ")
console.log(_c);
cd 