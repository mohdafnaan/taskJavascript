//  Break statement
// the break statement terminates the loop immediately when its encountered.
// example :

// for (let i = 1 ; i<= 5 ; i++) {
    
//     if (i == 4) {
//          console.log("break");
//         break;
       
//     }
    

// console.log(i);
// }



for (let i = 1; i<100 ; i++){
    if(i == 98){
    console.log("i have stopped sir");
    break;
    }
    if(i == 96){
        console.log("i have started again");
        continue;
    }
    console.log(`100 X ${i} = ${100 * i}`);
}