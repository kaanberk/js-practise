/*
//  Task
// Write a program to calculate the sum of the following series where n is input by user 
// 1+ 1/2 + 1/3 + ....+1/n
var number;
var total = 0; 
number = prompt("Enter a value");
number= parseInt(number)
for(var i =1 ; i <= number; i++){
    total += 1 / i;
    console.log(total);
}

*/

for(var i = 0; i < 5; i++){
    console.log("Outer Loop at state: " + i + "\n");
    for(var p = 0; p < 2; p++){
        console.log("Inner Loop ast state: " + p);
        if(p == 1 ){
            console.log("\n"); 
        }
    }
}