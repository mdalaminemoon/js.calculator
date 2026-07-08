let num1 = prompt("Enter 1st Number:");
let choice = prompt("What do you want to do?(Enter +, -, *, /,%,>,<):");
let num2 = prompt("Enter 2nd Number:");
let result;
if (choice === "+")
{
    result = Number(num1) + Number(num2);
    console.log("sum: " , result);
}
else if (choice === "-")
{
    result = Number(num1) - Number(num2);
    console.log("sub: " , result);
} 
else if (choice === "*") 
{
    result = Number(num1) * Number(num2);
    console.log("mul: " , result);
} 
else if (choice === "/") 
{
    result = Number(num1) / Number(num2);
    console.log("div: " , result);
} 
else if (choice === "%") 
{
    result = Number(num1) % Number(num2);
    console.log("Modulus: ", result);
}
else if (choice === ">") 
{
    result = Number(num1) >> Number(num2);
    console.log("Bitwise Right Shift: " , result);
}
else if (choice === "<") 
{
    result = Number(num1) << Number(num2);
    console.log("Bitwise Left Shift: " , result);
}
else
{
    console.log("Invalid Choice")

}