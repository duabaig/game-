var numberToGuess = Math.floor(Math.random() * 100) + 1;
var score = 0;

function makeGuess() {
    var guessInput = document.getElementById("guessInput");
    var feedback = document.getElementById("feedback");
    var scoreDisplay = document.getElementById("score");
    var guess = parseInt(guessInput.value);

    // Validate input
    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    // Provide feedback based on the guess
    if (guess < numberToGuess) {
        feedback.textContent = "Too low!";
    } else if (guess > numberToGuess) {
        feedback.textContent = "Too high!";
    } else {
        feedback.textContent = "Correct! You've guessed the number!";
        alert("Congratulations! You guessed it right!");
        score += 1; // Increase score on correct guess
        scoreDisplay.textContent = "Score: " + score;
        resetGame(); // Reset the game after a correct guess
    }

    // Clear the input field for the next guess
    guessInput.value = '';
}

function resetGame() {
    numberToGuess = Math.floor(Math.random() * 100) + 1; // Reset number
    document.getElementById("feedback").textContent = ''; // Clear feedback message
}













































// var numberToGuess = Math.floor(Math.random() * 100) + 1;
// var score = 0;

// function makeGuess() {
//     var guessInput = document.getElementById("guessInput");
//     var feedback = document.getElementById("feedback");
//     var scoreDisplay = document.getElementById("score");
//     var guess = parseInt(guessInput.value);

//     // Validate input
//     if (isNaN(guess) || guess < 1 || guess > 100) {
//         feedback.textContent = "Please enter a number between 1 and 100.";
//         return;
//     }

//     // Provide feedback based on the guess
//     if (guess < numberToGuess) {
//         feedback.textContent = "Too low!";
//     } else if (guess > numberToGuess) {
//         feedback.textContent = "Too high!";
//     } else {
//         feedback.textContent = "Correct! You've guessed the number!";
//         alert("Congratulations! You guessed it right!");
//         score += 1; // Increase score on correct guess
//         scoreDisplay.textContent = "Score: " + score;
//         resetGame(); // Reset the game after a correct guess
//     }

//     // Clear the input field for the next guess
//     guessInput.value = '';
// }

// function resetGame() {
//     numberToGuess = Math.floor(Math.random() * 100) + 1; // Reset number
//     // Optional: Clear feedback message and score display for the next game
//     document.getElementById("feedback").textContent = '';
// }






































































































// // var numberToGuess = Math.floor(Math.random() * 100) + 1;
// // var score = 0;

// // function makeGuess() {
// //     var guessInput = document.getElementById("guessInput");
// //     var feedback = document.getElementById("feedback");
// //     var scoreDisplay = document.getElementById("score");
// //     var guess = parseInt(guessInput.value);

// //     // Validate input
// //     if (isNaN(guess) || guess < 1 || guess > 100) {
// //         feedback.textContent = "Please enter a number between 1 and 100.";
// //         return;
// //     }

// //     // Provide feedback based on the guess
// //     if (guess < numberToGuess) {
// //         feedback.textContent = "Too low!";
// //     } else if (guess > numberToGuess) {
// //         feedback.textContent = "Too high!";
// //     } else {
// //         feedback.textContent = "Correct! You've guessed the number!";
// //         alert("Congratulations! You guessed it right!");
// //         score += 1; // Increase score on correct guess
// //         scoreDisplay.textContent = "Score: " + score;
// //         resetGame(); // Reset the game after a correct guess
// //     }

// //     // Clear the input field for the next guess
// //     guessInput.value = '';
// // }

// // function resetGame() {
// //     numberToGuess = Math.floor(Math.random() * 100) + 1; // Reset number
// //     // Optional: Clear feedback message and score display for the next game
// //     document.getElementById("feedback").textContent = '';
// // }


















































// var numberToGuess = Math.floor(Math.random() * 100) + 1;
// var score = 0;

// function makeGuess() {
//     var guessInput = document.getElementById("guessInput");
//     var feedback = document.getElementById("feedback");
//     var scoreDisplay = document.getElementById("score");
//     var guess = parseInt(guessInput.value);

//     if (isNaN(guess) || guess < 1 || guess > 100) {
//         feedback.textContent = "Please enter a number between 1 and 100.";
//         return;
//     }

//     if (guess < numberToGuess) {
//         feedback.textContent = "Too low!";
//     } else if (guess > numberToGuess) {
//         feedback.textContent = "Too high!";
//     } else {
//         feedback.textContent = "Correct! You've guessed the number!";
//         alert("Congratulations! You guessed it right!");
//         score += 1; // Increase score on correct guess
//         scoreDisplay.textContent = "Score: " + score;
//         resetGame(); // Reset the game after a correct guess
//     }

//     guessInput.value = '';
// }

// function resetGame() {
//     numberToGuess = Math.floor(Math.random() * 100) + 1; // Reset number
// }
