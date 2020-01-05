const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log("choices", choices);
const questionCounterText = document.getElementById('qu-counter');
const progressText = document.getElementById('progressBar');
const progressBarFull = document.getElementById('progressBarFull');
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let maxQuestions = 11;
let availableQuestions = [];

let questions = [
  {
    question: "Do you like people?",
    choice4: "I cherish human contact so rewarding for the soul, what is happiness when it is not shared ? Amen.",
    choice1: "Yes, when they are made of pixels.",
    choice2: "Let’s say that less I see one, better I am.",
    choice3: "It's okay."
  },
  {
    question: "Which fictional character are you ?",
    choice4: "Hermione Granger",
    choice1: "Naruto Uzumaki",
    choice2: "Light Yagami",
    choice3: "Chandler"
  },
  {
    question: "What is your last google search ?",
    choice4: "Sup yoga class TLV (‘caus with Ziv it’s for rookies)",
    choice1: "Is the naked man's technic really reliable ?",
    choice2: "Downloading Thor",
    choice3: "Learn how to code for dummies"
  },
  {
    question: "Which animal are you ?",
    choice4: "A praying mantis",
    choice1: "A hamster",
    choice2: "A meerkat",
    choice3: "a caterpillar"
  },
  {
    question: "For you, choosing your clothes, it’s…",
    choice4: "Like Blake Lively from Gossip Girl.",
    choice1: "An activity that leaves me puzzled and helpless.",
    choice2: "Relaxed, I take what comes.",
    choice3: "A certain effort. I like to feel good with myself."
  },
  {
    question: "What is your favourite meal ?",
    choice4: "Sushiii",
    choice1: "The bits of chips stuck in the collar of my hood for two days.",
    choice2: "Pizza & Haribo, the perfect combo.",
    choice3: "We must eat balanced: one day is organic salad, the next is fast food."
  },
  {
    question: "What about tv shows?",
    choice4: "Mindhunter",
    choice1: "The Big Bang Theory",
    choice2: "La Casa de Papel",
    choice3: "Game of Thrones"
  },
  {
    question: "What are you doing before going to bed ?",
    choice4: "I watch Sex and the City 2.",
    choice1: "I check for the third time that I correctly fold my shirt for the morning then i proofread my essay about the Fermi paradox.",
    choice2: "I don't go to bed. Tonight is secret operation night.",
    choice3: "I try in extremis to finish the daily challenge."
  },
  {
    question: "What kind of super hero are-you ?",
    choice4: "Iron Man",
    choice1: "Captain America",
    choice2: "Bat Man",
    choice3: "Professor X"
  },
  {
    question: "Where would you go after your death ?",
    choice4: "In Even",
    choice1: "Nerdvana",
    choice2: "Geek Eden",
    choice3: "Paradice in whiskey",
  },
  {
    question: "It's 9:30am :",
    choice4: "Damn it. I am late. Again.",
    choice1: "I am all set for the daily challenge presentation in front of the class.",
    choice2: "I am already in class for two hours.",
    choice3: "This is my second coffee."
  }
];

//CONSTANTS
const MAX_QUESTIONS = 11;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log("available question", availableQuestions);
  getNewQuestion();
}

getNewQuestion = () => {

  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //go to the results
    return window.location.assign("/end.html");
  }
  questionCounter++;
  questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;
  // progressText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

  //UPDATE PROGRESS BAR

  const questionIndex = (Math.floor(Math.random() * availableQuestions.length));
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach( choice => {
    const number = choice.dataset['number'];
    console.log(number);
    choice.innerText = currentQuestion['choice' + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach( choice => {
  choice.addEventListener('click', e => {
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];

    console.log(selectedAnswer == currentQuestion.answer//j'en ai pas moi//
    );

    incrementScore(selectedAnswer);
    getNewQuestion();
  });
});

incrementScore = (selectedAnswer) => {
  score += parseInt(selectedAnswer);
  scoreText.innerText = score;
  localStorage.setItem("score", score);
};

startGame();

// const array = [[1],[2],[3],[[[4]]],[[[5]]]];
//
// const arr2 = array.flat(2);
//
// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
//
// const greeting2 = greeting.flatMap(x => {
//   return x.join(" ");
// });
// console.log(greeting2);
//
//
// const greeting3 = greeting.flat().join(" ");
// console.log(greeting3);
//
// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
//
// const notTrapped = trapped.flat(Infinity);
// console.log(notTrapped);
//
// const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
// const email = userEmail3.trim();
// console.log(email);
//
// const users = { user1: 18273, user2: 92833, user3: 90315 };
//
// // const arrUsers = Object.keys(users).map(function(key) {
// //   return [String(key), users[key]];
// // });
// const arrUsers = Object.entries(users);
// console.log(arrUsers);
