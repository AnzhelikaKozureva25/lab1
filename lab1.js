//співставляємо масив цифр, який ввів користувач та масив цифр, який загадав комп
function compare(user_number, secret_number){
    var bulls = 0;
    var cows = 0;
    for (var i = 0; i < 4; i++) {
        if (user_number[i] == secret_number[i]){
            bulls++;
        }
        else {
            var toInteger = Math.floor(user_number[i]);
            if (secret_number.indexOf(toInteger)!=-1){
                cows++;
            }
        }
    }
    var result = [];
    result.push(cows);
    result.push(bulls);
    return result;
}


var readline = require('readline-sync');

//комп загадує секретне число
function getSecretNumber(){
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var secret_number = [];
    for (var i = 0; i < 4; i++) {
    //рандомізація
        secret_number.push(numbers.splice(Math.floor(Math.random() * (numbers.length)), 1)[0]);
    }
    return secret_number;
}

var win = false;
var secret_number = getSecretNumber();
//console.log(secret_number);
while (!win){

    var input = readline.question("Please write your number: ");

    var user_digits = Array.from(input);

    var results = compare(user_digits, secret_number);
    var cows = results [0];
    var bulls = results[1];
    if (bulls==4){
        win = true;
        console.log("You've won");
    } else {
        console.log('Bulls: ' + bulls + ' Cows: ' + cows);
        console.log("Try again.");
    }
}
