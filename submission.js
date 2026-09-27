
// Data Types Assignmenet 1
function printAgeIn2026(birthYear){
    let age = 2026 - Number(birthYear); //calculate age in 2026 

    console.log("This person will turn " + age + " in 2026.")
    return age;
}

function printAgeIn10Years(age){
    let newAge = Number(age) +10; // calculate age in 10 years

    console.log("This person will be " + newAge + " in 10 years.")
    return newAge;
}

function checkIfAdult(age){
    let isAdult = Number(age) >= 18; // adultBool contains True if age is at least 18

    console.log("The person is " + (isAdult ? "" : "not")  + " adult.")
    return isAdult;
}


function checkIfZero(number){
    let isZero = typeof number === "number" && number === 0; //check if the input is a Number type with value 0

    
    console.log("The input is " + (isZero ? "" : "not")  + " 0.")
    return isZero;
}

function checkIfEquivalent(string, number){
    let isEquivalent = Number(string) === number; // check if thefirst input is a digit string equivalent in value to the second input

    console.log("The string is " + (isEquivalent ? "" : "not")  + " equivalent to the number.")
    return isEquivalent;
}

// Short Circuits Part 2- Tutorial 1
function unreadAlert(unreadCount){ 

    unreadCount && console.log("You have " + unreadCount + " messages.") //check if unreadCount is defined, not 0, and not null, then print the output message, using a single short-circuiting operator. 
}


function unreadAlertValidated(unreadCount){ 

    typeof unreadCount === "number" && unreadCount > 0 && console.log("You have " + unreadCount + " messages.") //message notification will only be printed if unreadCount is a Number greater than zero.
}

function unreadAlertStringInput(unreadCount){
    (typeof unreadCount === "string" || typeof unreadCount === "number") && Number(unreadCount) > 0 && console.log("You have " + unreadCount + " messages.") //if unreadCount is defined, a Number greater than zero OR a string of digits representing a number greater than 0, and not null, then print the output message. 
}

function showScore(score){

    let correctedScore = score || "N/A"; // correctedScore will contain "N/A" if the score is undefined, or null and the original score (including 0) otherwise.

    console.log("The score is:" + score)
    return correctedScore;
}

function printWelcomeMessage(username){

    let userOrPlaceholder = username || "Mustang"; //userOrPlaceholder contains the original username if username is a non-empty string or "Mustang" otherwise

    console.log("Welcome, " + userOrPlaceholder + "!")
    return userOrPlaceholder;
}