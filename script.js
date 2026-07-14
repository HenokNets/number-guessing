let randomNum = Math.floor (Math.random()*51);

const guessBtn = document.querySelector("button");

guessBtn.addEventListener ('click', () => {
    let userInput = Number (prompt("Enter your guess"));
    let distance = Math.abs (userInput - randomNum);
    if (userInput === randomNum) {
        console.log("You got the right answer!");
        return;
    } else if (distance<= 5) {
        console.log("You're very close!");
    } else if (distance <= 10) {
        console.log("You're getting close!");
    } else if (distance<= 20) {
        console.log("You're not too far away.");
    } else {
        console.log("You're way off!");
    }

    


})