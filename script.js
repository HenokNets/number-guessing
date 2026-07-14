let randomNum = Math.floor (Math.random()*51);

const guessBtn = document.querySelector("button");
const input = document.querySelector ("input");
let guessct = document.querySelector (".guessct");
let status = document.querySelector (".status");
let guessCount = 0;

guessBtn.addEventListener ('click', () => {
    let userInput = Number (input.value);
    let distance = Math.abs (userInput - randomNum);
    if (userInput === randomNum) {
        status.textContent = "You got the right answer!"
    } else if (distance<= 5) {
        status.textContent = "You're very close!";
    } else if (distance <= 10) {
        status.textContent = "You're getting close!";
    } else if (distance<= 20) {
        status.textContent = "You're not too far away.";
    } else {
        status.textContent = "You're way off!";
    }

    guessct.textContent = ++guessCount
    input.value = "";

})