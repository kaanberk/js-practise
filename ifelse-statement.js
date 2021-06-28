
// IF ELSE STATEMENTS

var isWeatherNice = true;
if (isWeatherNice){
    console.log("Lets go swimming")
}else {
    console.log("Stay at home and watch movie")
}


var username = "Kaan",
    password = "abc123",
    inputUsername = prompt("Enter Username"), 
    inputPassword = prompt("Enter Password");

    if(username == inputUsername && password == inputPassword){
        console.log("Access Granted !")
        console.log("Welcome " + username)
    }else{
        console.log("Invalid username or password")
    }


// IF ELSE IF STATEMENTS 

/*  Write a program that accepts student scores and print out grade
    
    score > 90 -- A
    score > 80 -- B
    score > 70 -- C
    score >= 60 -- D
    score <= 59  -- F
*/
var score;
score = parseInt(prompt("Please enter the score of the student:"))

if(score > 90) {
    console.log("Grade is A!")
}else if(score > 80) {
    console.log("Grade is B!")
}else if(score > 70) {
    console.log("Grade is C!")
}else if(score >= 60) {
    console.log("Grade is D!")
}else{
    console.log("Grade is F!")
}
