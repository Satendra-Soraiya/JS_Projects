let NUM = Math.floor(Math.random() * 100) + 1;

let remainingAttempts = 10;

const form = document.querySelector(".form")

const userGuess = document.querySelector(".numinput");

const guessSlot = document.querySelector(".guesses");

const remaining = document.querySelector(".remaining");

const lowOrHigh = document.querySelector(".lowOrHigh")


const submitbutton = document.querySelector(".submitbutton")

let prevguess = [];


let playGame = true;


const playagain = document.createElement('button')
playagain.className = "playAgaian";
playagain.innerText = "Play Again";
playagain.style.height = "40px";
playagain.style.width = "200px";
playagain.style.backgroundColor = "#D99B21";
playagain.style.border = "none";
playagain.style.borderRadius = "15px";
playagain.style.cursor = "pointer";


form.addEventListener('submit', function (e) {
    if (!playGame) {
        return;
    }
    e.preventDefault();
    const guessNum = Number(userGuess.value)

    validateGuess(guessNum);

})




function validateGuess(guessNum) {

    if (isNaN(guessNum) || guessNum < 1 || guessNum > 100) {

        alert("invalid");
        return;

    }
    else {

        prevguess.push(guessNum)
        if (Number(remainingAttempts) > 0) {

            checkGuess(guessNum);
            displayGuess(guessNum);
            if (remainingAttempts === 0 && playGame) {
                displayMessage(`Out of attempts. The number was ${NUM}`);
                endGame();
            }

        } else {
            displayGuess(guessNum);
            displayMessage(`out of  attempts, The number was: ${NUM}`)

            endGame();

            submitbutton.replaceWith(playagain)
        }
    }


}
function checkGuess(guessNum) {
    if (guessNum == NUM) {

        displayMessage("correct");

        endGame();

    }
    else if (guessNum < NUM) {
        displayMessage("number is Low")
        remainingAttempts--;
    }
    else {
        displayMessage("number is High")
        remainingAttempts--;

    }
}

function displayGuess(guessName) {

    guessSlot.innerHTML = prevguess.join(", ");
    userGuess.value = ""
    remaining.innerHTML = `${remainingAttempts}`

}

function displayMessage(message) {
    lowOrHigh.innerHTML = `${message}`
}

function endGame() {
    playGame = false;
}

function newGame() {

}





