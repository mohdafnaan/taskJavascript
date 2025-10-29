// what is a switch statement?
//a switch statement is used to compare one value against multiple possible cases.
// its often cleaner than writing multiple if....else if statement

/* switch (expression){
  case value 1 :
    // code block if expression === value 1
    break;

    case value 2 :
        // code block if expression === value2
        break;

        default :
        // code block if no cases matches 
}*/

let day = "sunday";
switch (day){
    case "sunday" :
        console.log("its sunday");
        break ;
        case "monday" :
            console.log("monday");
            break;
            case "tuesday":
                console.log("tuesday");
                break;
                case "wednesday" :
                    console.log("tuesday");
                    break;

}

