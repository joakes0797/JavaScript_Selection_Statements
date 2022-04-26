console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
//random number between 0 and 10
let j = Math.floor(Math.random() * 11);
let userInput = prompt(`I'm thinking of a number between 0 and 10.  Enter your guess: `);
if (userInput < j) {
    alert(`Too low!`);
} else if (userInput > j) {
    alert(`Too high!`);
} else {
    alert(`Congrats, you got it!`);
}

// Exercise 2
let userInput2 = prompt(`What's the best pizza topping?`);

switch (userInput2.toLowerCase) {
    case "pepperoni":
    case "pepperonis":
        alert(`Classic.  Reliable.  Let's eat!`);
        break;
    case "sausage":
    case "ground sausage":
        alert(`Sausage is my second favorite, after pepperoni.`);
        break;
    case "cheese":
    case "extra cheese":
        alert(`Can't go wrong with more cheese.`);
        break;
    case "peppers":
    case "pepper":
        alert(`Peppers are good!  Get a fraction of a vegetable in with your meal.`);
        break;
    case "mushroom":
    case "mushrooms":
        alert(`Mushrooms are fine if used sparingly.`);
        break;
    case "pineapple":
    case "pineapples":
    case "olive":
    case "olives":
    case "black olive":
    case "black olives":
        alert(`You monster!`);
        break;
    default:
        alert(`That could be good!`);
}