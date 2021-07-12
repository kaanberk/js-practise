// CREATING AN ARRAY
/*
        var scores = new Array();   --> The scores array is empty, hold no element
        var scores = Array(10);     --> The scores array with initial size
        var scores = new Array(9,10,8,7);   --> The scores array with initial elements
        var colors = ["red","green","black"];   --> Colors array with three element
        var emptyArray=[];          --> Creating an empty array

    ACCESING ARRAY ELEMENTS

        var mountains = ["Everest","Fuji","Agri"];

        console.log(mountains[0]); --> "Everest"
        console.log(mountains[1]); --> "Fuji"
        console.log(mountains[2]); --> "Agri"
*/
console.log("Task 1")
// TASK
// Create a car array that holds 4 car names inside
// Check if your array has the car name "Honda"
// If it is, print "I found your car Honda in this array"
// If it is not, print "I could not find your car Honda in this array"

var cars = ["Mercedes", "BMW", "Honda", "Audi"];
for(var i = 0; i < cars.length; i++){
    if(cars[i] == "Honda"){
        console.log("found it");
        break;
    }else if(i == cars.length-1){
        console.log("not found it");
    }
}

//  OR
var bool = false;
for(var i = 0; i < cars.length; i++){
    if(cars[i] == "Honda"){
        bool = true;
    }
}
if(bool == true){
    console.log("Found it");
}else{
    console.log("not found it");
}

//  BASIC OPERATIONS ON ARRAYS
//      - To check if a variable is an array, you use Array.isArray() method
//      var cars = ["Mercedes", "BMW", "Honda", "Audi"];
//      console.log(Array.isArray(cars)); //true

//      - When you call the toString() method of an array, you get a string represented as a comma-seperated list of element
//      var cars = ["Mercedes", "BMW","Audi"];
//      console.log(cars.toString()); //Mercedes,BMW,Audi
console.log("Task 2")
//TASK
//  Check if shoppingListvariable is an Array and if it is, display comma-separated list of elements in the console.
var shoppingList=["cheese","bread", "water"];
if(Array.isArray(shoppingList)){
    console.log(shoppingList.toString());
}else{
    console.log("This not an array");
}