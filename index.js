let scoreArray = [];
let score = 0;
function addScore() {
  score = document.getElementById("score").value;
  scoreArray.unshift(Number(score));
  console.log(score)
  console.log(scoreArray);
  document.getElementById("scores").innerHTML = scoreArray;
  console.log(scoreArray);
}

function removeScore() {
  scoreArray.shift();
  document.getElementById("marks").innerHTML =scoreArray;
  console.log(scoreArray);
}

function getAverage() {
  let sum = 0;
  studentNumber = scoreArray.length;
  for (let i = 0; i < studentNumber; i++) {
    console.log(sum, "+", scoreArray[i]);
    sum += scoreArray[i];
  }
  console.log(sum);
  console.log(studentNumber);
  console.log(sum / studentNumber);
  document.getElementById("average").innerHTML = sum / studentNumber;
}
