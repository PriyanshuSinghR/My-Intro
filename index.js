var readlineSync = require("readline-sync");
var score = 0;
var user = readlineSync.question("What is your Name?  ");

console.log(`Welcome ${user} to Do you know Priyanshu?`);

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right");
    score ++
  } else {
    console.log("Wrong");
  }
  console.log(`Current score: ${score}`)
  console.log("------------------------------------")
}

var questions = [{
  question: "What is my age? ",
  answer: "19"
},
{
  question: "Where do i live? ",
  answer: "lucknow"
},
{
  question: `What kind of nature is mine?
      Serious
      Funny
      Angry
      Shy
>` ,
  answer: "Funny"
},
{
  question: `What I am like to watch?
      Anime
      Bollywood
      Hollywood
      Sports
>`,
  answer: "Anime"
},
{
  question: `Which is my favourite Sport?
      Cricket
      Tennis
      Vollyball
      Basketball
>` ,
  answer: "Vollyball"
}]

for(var i=0; i<questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}

console.log(`${user} your score is ${score}/${questions.length}`)