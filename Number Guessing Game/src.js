const readline = require("readline");

const rd = readline.createInterface({input: process.stdin, output: process.stdout});

function generateRandomNumber()
{
    let number = Math.floor(Math.random() * 100) + 1;
    return number;
}

function isGuessCorrect(num, guess)
{
    if(Number.isNaN(guess))
        return "Not a number";
    if(num === guess)
        return "Correct!";
    else if (num > guess)
        return "Too low";
    else
        return "Too high";
}

function keepGuessing()
{
    let result = "";
    rd.question("Guess the number", 
        (input) => {
            const guess = Number(input.trim());
            result = isGuessCorrect(num, guess);
            if(result !== "Correct!")
            {
                console.log(result);
                keepGuessing();
            }
            else
                rd.close();
        });
        
}

rd.on("close", () => {console.log("You got it right!!!");})

const num = Number(generateRandomNumber());
keepGuessing();
