//                  TYPE OF OPERATORS 
//   1. arthematic operators 
//   2. Assignment operators
//   3. comparisoin operators
//   4. logical operators
//   5. bitwise operators
//   6. ternary oprators
//   7. typeof operators
//   8. string operators
//   9. coalescing & optional chaining
//   10.spread & rest operators

//        2+3=5;
//       + is an operator
//       2 and 3 are operands

// 1. Arthematic operators
// | operators  |  Description      | Example    |  Result   |
// |----------  |  ---------------- | ---------  |---------- |
// |   +        |  addition         |  5 + 2     |    7      |
// |   -        |  substraction     |  5 - 2     |    3      |
// |   *        |  multiplication   |  5 * 2     |    10     |
// |   /        |  division         |  5 / 2     |    2.5    |
// |   %        |  modules          |  5 % 2     |    1      |
// |   **       |  exponentiation   |  2 ** 3    |    8      |


// let a = 10 
// let b = 5 
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);




//         Assignments operators


// |  operators  |  Example  |  same as       |
// |  --------   | --------  | -------------  |
// |     =       |  x = 5    |   x = 5        |
// |     +=      |  x += 5   |   x = x + 5    |
// |     -=      |  x -= 5   |   x = x - 5    | 
// |     *=      |  x *= 5   |   x = x * 5    | 
// |     /=      |  x /= 5   |   x = x / 5    | 
// |     %=      |  x %= 5   |   x = x % 5    |
// |     **=     |  x **= 3  |   x = x ** 3   |


// let box = 5
// box += 5
// console.log(box)
// box -= 5
// console.log(box)
// box *= 5
// console.log(box)
// box /= 5
// console.log(box)
// box %= 5
// console.log(box)
// box **= 5
// console.log(box)




//             comparision operators
// output comes only in boolean(true and false)

let a = 3 
let b = 2

console.log(a>b);
console.log(a<b);

let c = 10;
let d = 2;
let e = "10"
let f = "2"
let g = true
let h = false
let i = 10
let j = "true"

console.log(c>d);
console.log(c<d);
console.log(c==i); // only value not datatype
console.log(c===i);// chcks value and datatype both
console.log(c===e);
console.log(g===j);
console.log(e==i);   
// console.log(object);
// gives the output in true or false.



//       logical operator

// logical operator deals with boolean values {true and false}

//|  operator      |         Name               |       example
//|    &&          |      logical AND           |         x&&y
//|    ||          |      logiacal OR           |         x||y
//|     !          |      logical NOT           |         !x or !y


/*
o==> false
1===> true

Logical AND
false && false = false
false && true  = false
true  && false = false
true  && true  = true

Logical OR
false||false = false
false||true  = true
true ||false = true
true || true = true

Logical NOT
true =! false
false =! true

Note : We use comparison and logical operators in decision-making and loops.


//        Bitwise operator

bitwise operator treat its operands as a set of 32 bit binary digits ( zeros and ones) and perform action . however , the result is shown as a decimal below.

//|operator          |   name         | example      |
//|    &             | Bitwise And    |   x&y        |
//|    |             | Bitwise Or     |   x|y        |
//|    ^             |  bitwise XOR   |   x^y        | 
//|    ~             |  Bitwise NOT   |   x~y        |

// Bitwise only works till 

-2 power 31 to  2 power 31-1 .

//      Bitwise AND
//|  x   |   y   |  x&y  |
//| 0    |  0    |  0    |
//| 0    |  1    |  0    |
//| 1    |  0    |  0    | 
//| 1    |   1   |   1   |*/

let a1= 10
let b2 = 2
console.log(a1 & b2);


//      Bitwise OR\

// |  x  |  y  |  x|y  |
// |  0  |  0  |  0    |
// |  0  |  1  |  1    | 
// |  1  |  0  |  1    |
// |  1  |  1  |  1    |

let a3 = 10 
let b3 = 2
console.log(a3|b3);

//        Bitwise XOR
//|  x  |  y  |  x^y |
//|  0  |  0  |  0   |
//|  0  |  1  |  1   |
//|  1  |  0  |  1   |
//|  1  |  1  |  0   |

 let a4 = 10 
 let b4 = 2
 console.log(a4 ^ b4);


 // bitwise NOT :
 
// |  x  |  ~X  |
// |  0  |   1  |
// |  1  |   0  |

// 0===>1
// 1===>0
 
let a5 = 10
console.log(~a5);
