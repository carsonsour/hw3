var secretPassword = "secret";
var response;
var tries = 0;
var entryLimit = 3;
var error = false;
    prompt("What is the password?");
while (response != secretPassword && !error){
    if(tries < entryLimit){
        response = prompt("Incorrect password. Please try again");
        tries++;
    } else {
        error = true;
    }
}

if(error){
    alert("Too many tries");
} else {
    alert("Correct password");
}