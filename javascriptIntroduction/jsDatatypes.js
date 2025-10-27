// data types in javascript

// there are 2 types pf datatypes in javascript

//1. primitive data type
//2. non primitive data type

//1. primitive data type: its a type of data which stores single type 
//   of data

//2. non pimitive data type : its a type of data type whhich 
//   can store multiple data type and values

// Example for primitive data type
/*
1. string : ex : anything in "" , '' , ``
2. number : ex: 1234, 45.24, -34, 0 
3. boolean: ex: true, false
4. bigint : ex: 2135432524523n 
5. null   : ex: it denotes a empty value : let a = null;
6. undefined : ex: let a; if you dont store any value it will become undefined.
*/
/*
|data type  |   description   |   example  |

|string     |  textual data   | "helloworld",'helloworld'

|number     |an integer or a  | 2, 3.22, 34
|             floating number 
boolean    | true or false   | true and false

big int    | a big number    |  7687231651245n
 
undefined  | a variable whose 
/             value is empty  | let a;

null       |  it denotes a    | let a = 
//             empty value        
             
  
*/

let a = "afnaan"
console.log(a,"," ,typeof a); // string

let b = 3
console.log(b, "," , typeof a );

let c = true
console.log(c,"," , typeof c);

let d = 47564786576n
console.log(d , "," , typeof d);

let e;
console.log(e , "," , typeof e);//undefined

let f = null
console.log(f ,"," , typeof f);// by default null datatype is object.



 //non pimitive data type : its a type of data type whhich 
//                          can store multiple data type and values.

let studentDetails = {
    firstname : "mohammed",
    lastname : "afnaan",
    location :"asifnagar",
    class    : "cfib25" , 
   age  : 20,
   bankbalance : 987463598732n ,
   issleeping : true ,
}
console.log(studentDetails, typeof studentDetails);
