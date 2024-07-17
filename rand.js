
const run = document.getElementById("runbtn");
//const myLabel = document.getElementById("lableId");
const reset = document.getElementById("resetbtn");
const scoreValElement = document.getElementById("scoreval");
const finalScoreElement = document.getElementById("h2id");
let scoreValue;
let finalScore = 0;

run.onclick = function() {
    scoreValue = Math.floor(Math.random() * 6) + 1;
   // myLabel.textContent = `The score value is ${scoreValue}`;
   scoreValElement.textContent = `The Current score is : ${scoreValue}`;
    finalScore += scoreValue;
    finalScoreElement.textContent = `The final score is: ${finalScore}`;
};

reset.onclick = function() {
    finalScore = 0;
    scoreValue=0;
    scoreValElement.textContent = `The Current score is : ${scoreValue}`;
    finalScoreElement.textContent = `The final score is: ${finalScore}`;
};
