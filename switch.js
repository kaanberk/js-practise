
var foodType = prompt("Enter Your Favoruite Cuisine: ");
switch(foodType){
    case "Turkish":
        console.log("You Love Kebab! ");
        break;
    case "Italian":
        console.log("You Love Pizza!");
        break;
    case "Uyghu":
        console.log("You Love Laghman");
        break;
    default:
        console.log("No More Option!");
        break;
}

//Task
// Write a program that lets user to enter apple, dell, acer, laptop models,
// if it apple show "Apple-no virus"
// if is dell show "Tough one"
// if it acer show "Cheap one"
// else "do not buy that one"

var model = prompt("Please Enter A Laptop Model")
switch(model){
    case "apple":
        console.log("Apple-no virus");
        break;
    case "dell":
        console.log("Tough one");
        break;
    case "acer":
        console.log("Cheap one");
        break;
    default:
        console.log("DO NOT BUY THAT ONE");
        break;
}