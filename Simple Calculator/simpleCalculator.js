const readline = require("readline");

const rd = readline.createInterface({input: process.stdin, output: process.stdout});

function isInputValid(num1, num2)
{
    if(Number.isNaN(num1) || Number.isNaN(num2))
        return false;
    else
        return true;
}

function addition(num1, num2)
{
    return num1+num2;
}

function subtraction(num1, num2)
{
    return num1-num2;
}

function multiplication(num1, num2)
{
    return num1*num2;
}

function division(num1, num2)
{
    if(num2 !== 0)
        return num1/num2;
    else
    {
        console.log("Invalid operation: cannot divide by zero");
        return Infinity;
    }
}

function calculator()
{
    rd.question("1. Addition \n2. Subtraction \n3. Multiplication \n4. Division \nEnter the operation number: ", (data) =>
    {
        const op = Number(data.trim());
        if(Number.isNaN(op) || op<1 || op>4)
        {
            console.log("Invalid operation");
            rd.close();
            return;
        }
        rd.question("Enter first number: ", (data1) =>
        {
            const num1 = Number(data1.trim());
            rd.question("Enter second number: ", (data2) =>
            {
                const num2 = Number(data2.trim());
                const isValid = isInputValid(num1, num2);
                if(!isValid)
                {
                    console.log("Input is invalid");
                    return;
                }
                let result = null;
                switch(op)
                {
                    case 1:
                        result = addition(num1, num2);
                        break;
                    case 2:
                        result = subtraction(num1, num2);
                        break;
                    case 3:
                        result = multiplication(num1, num2);
                        break;
                    case 4:
                        result = division(num1, num2);
                        break;
                    default:
                        console.log("Invalid operation");
                        break;
                }
                if(result !== null)
                    console.log(`Result = ${result}`);
                rd.close();
            });
        });
    });
}

calculator();
