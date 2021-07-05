/*
Question 1:
    Write a js program for following logic. 

        If marks < 60, then print "Failed",
        if marks >= 60 but less than 90, then print "Passed",
        if marks >= 90, then print "Passed with Distinction".

    this solution uses if, else if and else statements.
*/
/*
var mark = parseInt(prompt("Please Enter Your Result"));

if(mark < 60 ){
    console.log("FAILED!");
}else if(mark >= 60 && mark < 90){
    console.log("PASSED!");
}else if(mark >= 90){
    console.log("PASSED WITH DISTINCTION!!");
}
*/
/*
    Question 2:
        Login Functionality Logic
    UserName / Password
    - Program will ask to enter username and password
    - If both username and password are blank
        - "Username and Password fields cannot be empty"
    - If username is blank and password is not blank
        - "Username cannot be empty" 
    - If username is not blank and password is blank
        - "Password connot be empty"
    - If the username or password is not valid
        - "Username or password is not valid"
    - If the username and password are both valid
        - "User Logged in Sucesfully"
*/
/*
var username = prompt("Please Enter Your User Name:"),
    password = prompt("Please Enter Your Password:"),
    expectedUserName = "kaan", 
    expectedPassword = 123;

if(username == "" && password == ""){
    console.log("Username and Password fields cannot be empty !");
}else if(username == "" && password != ""){
    console.log("Username cannot be empty !");
}else if( username != "" && password == ""){
    console.log("Password cannot be empty !")
}else if(username != expectedUserName || password != expectedPassword){
    console.log("Username or password is invalid. Please verify!")
}else if(username == expectedUserName && password == expectedPassword){
    console.log("User Logged in Succesfully !")
}
*/

/* 
    Question 3: 
        Calculator Logic with 2 numbers;
            User is able to enter 2 numbers 
            User is able to enter one of these operators:
                 +. -, /, *
            Program needs to perform the operation and display the result.
            If either number1 or number 2 blank:
                "Please Enter A Valid Number"
*/
/*
var num1 = parseInt(prompt("Please Enter Your First Number:"));
var num2 = parseInt(prompt("PLease Enter Your Second Number:"));
var oper = prompt("Please Enter An Operator That You Want To Do:");

if(num1 == "" || num2 == "" || oper == ""){
    console.log("Please Enter A Valid Number!");
}else if(oper == "+"){
    console.log(num1 + num2);
}else if(oper == "-"){
    console.log(num1 - num2);
}else if(oper == "/"){
    console.log(num1 / num2)
}else if(oper == "*"){
    console.log(num1 * num2)
}
*/
//  NESTED FOR LOOPS
/* 
Question-1

Write a JS program to print the following pattern

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
*/

for (var i = 1; i <= 7; i++){
    var str="";
    for (var j = 1; j <= i; j++){ 
        str=str+j+" ";
    } 
    console.log(str);
}
//Printing lower half of the pattern 
for (var i = 6; i >= 1; i--){
    var str="";
    for (var j = 1; j <= i; j++){
        str=str+j+" ";
    }
    console.log(str);
}
/*
Question-2

Write a JS program to print the following pattern

1 2 3 4 5 6 7
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
*/

//Printing upper half of the pattern
for (var i = 7; i >= 1; i--){
    var str="";
    for (var j = 1; j <= i; j++){
        str=str+j+" ";
    }
    console.log(str);
}
         
//Printing lower half of the pattern
for (var i = 2; i <= 7; i++) {
    var str="";
    for (var j = 1; j <= i; j++){
        str=str+j+" ";
    }
    console.log(str);
}

/*
Question-3

Write a JS program to print the following pattern

1 2 3 4 5 6 7
 2 3 4 5 6 7
  3 4 5 6 7
   4 5 6 7
    5 6 7
     6 7
      7
     6 7
    5 6 7
   4 5 6 7
  3 4 5 6 7
 2 3 4 5 6 7
1 2 3 4 5 6 7
*/

//Printing upper half of the pattern
for (var i = 1; i <= 7; i++){
    var str="";
    //Printing i spaces at the beginning of each row
    for (var j = 1; j < i; j++){
        str=str+" ";
    }
    //Printing i to rows value at the end of each row
    for (var j = i; j <= 7; j++){ 
        str=str+j+" "; 
    } 
    console.log(str);
} 
         
//Printing lower half of the pattern 
for (var i = 6; i >= 1; i--){
    var str="";
    //Printing i spaces at the beginning of each row
    for (var j = 1; j < i; j++){
        str=str+" ";
    }
    //Printing i to rows value at the end of each row
    for (var j = i; j <= 7; j++){
        str=str+j+" ";
    }
    console.log(str);
}

/*
Question-4
Write a JS program to print the following pattern

1
10
101
1010
10101
101010
1010101
*/
for(var i=1;i<9;i++){
    var str="";
    for(var j=1;j<i;j++){
        if(j%2==1){
        str=str+1+" ";
        }else{
          str=str+0+" ";  
        }
    }
    console.log(str);
}

/*
Question-5
Write a JS program to print the following pattern

1111111
1111122
1111333
1114444
1155555
1666666
7777777
*/
var row=7;
for (var i = 1; i <= 7; i++){
    var str="";
    for (var j = 1; j <= row-i; j++){
        str=str+"1";
    }
    for (var j = 1; j <= i; j++){
        str=str+i;
    }
    console.log(str);
}


/*
Question-6
Write a JS program to print the following pattern

1
2 6
3 7 10
4 8 11 13
5 9 12 14 15
*/
var row=5;
for (var i = 1; i <= row; i++){
    var str="";
    var num = i;
    for (var j = 1; j <= i; j++){
        str=str+num+" ";
        num = num+row-j;
    }
    console.log(str);
}

