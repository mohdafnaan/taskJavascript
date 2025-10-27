
//     if statement
/* the if keyword checks the condition inside the parentheses ().

If the condition is evaluated to true, the code inside { } is executed.
If the condition is evaluated to false, the code inside { } is skipped.*/




let a = 2;
if(a < 0 ){
    console.log("greater");
}
console.log("samaller");

let age = 20;
if(age>18){
    console.log("you can vote");
}
console.log("you cant vote");// if condition is to be true both the codes get print



//       if else statement

/*The if...else statement checks the condition and executes code in two ways:

If condition is true, the code inside if is executed. And, the code inside else is skipped.
If condition is false, the code inside if is skipped. Instead, the code inside else is executed.*/


let num = 20
if(num >= 21){
    console.log("can party");
}
else{
    console.log("cant party");
}


//              if..elseif...if statement
/* Suppose we need to assign different grades to students based on their scores.

If a student scores above 90, assign grade A.
If a student scores above 75, assign grade B.
If a student scores above 65, assign grade C.
These conditional tasks can be achieved using the if...else statement.*/

let marks = 65

if(marks>= 90){
    console.log("A+");
}
else if(marks>= 80){
    console.log("A");
}
else if (marks>= 70){
    console.log("B+");
}
else if (marks >= 60){
    console.log("B");
}
else if(marks >= 50){
    console.log("C");
}
else if (marks>= 40){
    console.log("D");
}
else{
    console.log("fail");
}