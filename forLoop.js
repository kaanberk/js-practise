/*

console.log("JavaScript");
console.log("JavaScript");
console.log("JavaScript");
console.log("JavaScript");
console.log("JavaScript");

for (var i = 0; i < 5; i++){
    console.log("js");
}

for (var i = 1; i <= 10; i +=2 ){
    console.log(i)
}
//  task
console.log("Task 1")
//  print all numbers between 0 and 50 that are divisible by 4
for(var i=0; i < 50; i++){
    if(i %4 == 0){
        console.log(i)
    }
}

console.log("Task 2")
//  print number 100 to 0 that are divisible by 3
for(var i = 100; i > 0; i--){
    if(i%3 == 0 ){
        console.log(i)
    }
}

console.log("Task 3")
//  User should be able to enter 2 values and program should display which number is largest.
//  If numbers are equal, it should display numbers are equal.
//  Above steps need to repeated to number of times tbat is also inputted by user.
var times = prompt("How many times required to repeate? ");
times = parseInt(times);

for(var i = 0; i < times; i++){

    var num1 = prompt("Enter your first number:");
    num1 = parseInt(num1);
    var num2 = prompt("Enter your second number");
    num2 = parseInt(num2)

    if(num1 == num2){
        console.log("Numbers are equal!")
    }else if( num1 > num2){
        console.log(num1 +" is greater than "+ num2);
    }else{
        console.log(num2+ " is greater than " + num1)
    }
}

console.log("Task 4")
//  Write a program that displays each even/odd number in popup between 1 and 32

for(var i = 1; i < 32; i++){
    if(i % 2 == 0 ){
        console.log(i + " is even")
    }else if(! i % 2 ==0 ){
        console.log(i +" is odd")
    }
}

console.log("Task 5")
//Let user to enter 5 numbers and print the total of those numbers
var total = 0
for(var i = 0; i<5; i++){
    var number = parseInt(prompt("Enter your number: "));
    total+=number;
}
alert("The total is: " + total);

*/

console.log("Task 6")
//  Write a program that prompts the user to input a positive integer. 
//  It should then print the multiplication table of the number.
var multi = parseInt(prompt("Please enter the number that you want multiplication table: "));
for(var i =0; i<=10; i++){
    console.log(multi + " * " + i + " = " + (multi * i));
}