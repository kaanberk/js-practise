
//  Break: This keyword caueses the termination of the loop and tells the interpreter to go
//         onto the next statement of code outside of the loop

//  Continue: The continue statement skips the current iteration of the loop and jumps to the 
//            next iteration

//  Task
//      Write a program that calculates the sum of numbers entered by the user until the user 
//      enters a negative number
/*
var sum = 0;
var num;
while(true){
    num = parseInt(prompt("Please Enter a Number:"));
    if(num < 0){
        break;
    }
    sum = sum + num;
}
console.log(sum)

*/

// Task 
//     Write a program that calculates the sum of maxiumum of 5 positive numbers entered by the user.
//     if the user enters negative number or zero, it skippied from calculation

var sum = 0;
for(var i =0; i < 5; i++){
    var num = parseInt(prompt("Enter a Number:"));
    if(num <= 0){
        continue;
    }
    sum = sum + num;
}
console.log(sum);



//  SUMMARY OF LOOPS
//      - Conditional statements allow your code to make a decision about what to do next
//      - Comparison operators(==,===,!=,!==,<,>...) are used to compare two operands
//      - Logical operatires allow you to combine more that one set of comparison operators
//      - if ... else statemetns alloe you to run one set of code of a condition is true, and another of it is false
//      - Switch statement allow you to compare a value against possible outcomes
//      - There are three types of loop: for, while. and do ...while. Each repeats a ser of statements