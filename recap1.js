
// 1
console.log("Practise 1:");
var x = 5 + 5;
console.log(x); // 10

var y = "5" + "5";
console.log(y); // 55

var z = 5 + "5";
console.log(z); // 55

var v = "5" + 5;
console.log(v) // 55

// 2
console.log("Practise 2:");
var a, b, c;
a = 25;
b = 35;
c = a; //c = 25
a = b; // a =35

console.log(a); //35
console.log(b); //35
console.log(c); //25

// 3
console.log("Practise 3:");
var x = 5, y = 4;

console.log(x< 10 && y > 1);
console.log(!(x==y));

// 4
console.log("Practise 4:");
var num1 = parseInt(prompt("Please Enter A Number: "));
if(num1 % 2 ==0){
    console.log("Your number is even!");
}else{
    console.log("Your number is odd!");
}