// script.js
const correctAnswer = "atmosphere"; // Replace with the actual answer

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.toLowerCase();

    if (userAnswer === correctAnswer) {
        alert("Congratulations! You solved the riddle. Go towards Entrance--right, the next clue is awaiting you.. ");
    } else {
        alert("Oops! Try again.");
    }
}
