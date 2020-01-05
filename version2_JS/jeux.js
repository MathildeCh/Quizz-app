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
    question: "Aimes-tu les gens?",
    choice4: "Je chéris le contact humain si enrichissant pour l’esprit, que vaut le bonheur lorsqu’il n’est pas partagé ? Amen.",
    choice1: "Oui, quand ils sont en pixels.",
    choice2: "Disons que moins j’en vois mieux je me porte.",
    choice3: "ça va !"
  },
  {
    question: "Quel personnage de fiction es-tu ?",
    choice4: "Hermione Granger",
    choice1: "Naruto Uzumaki",
    choice2: "Light Yagami",
    choice3: "Chandler"
  },
  {
    question: "Quelle est ta dernière recherche google ?",
    choice4: "cours de sup yoga TLV (Avec Ziv c'est pour les rookies)",
    choice1: "la technique du naked man, ça marche vraiment ?",
    choice2: "Télécharger Thor",
    choice3: "le code pour les nuls"
  },
  {
    question: "Quel animal es-tu ?",
    choice4: "Une mante religieuse",
    choice1: "Un hamster",
    choice2: "Un suricate",
    choice3: "Une chenille"
  },
  {
    question: "Choisir ses fringues, pour toi, c’est…",
    choice4: "A la Blake Lively dans Gossip Girl.",
    choice1: "Une activité qui me laisse perplexe et démuni.",
    choice2: "Détendu. On prend ce qui vient.",
    choice3: "Un minimum d’efforts… J’aime me sentir bien dans mes baskets."
  },
  {
    question: "Quel est ton repas préféré ?",
    choice4: "Sushiii",
    choice1: "Les bouts de chips coincés depuis deux jours dans le col de ma capuche.",
    choice2: "Pizza & Haribo, the perfect combo.",
    choice3: "Faut manger équilibré : un jour sur deux c'est salade bio, l'autre c'est mac do."
  },
  {
    question: "Côté série, es-tu plutôt…",
    choice4: "Mindhunter",
    choice1: "The Big Bang Theory",
    choice2: "La Casa de Papel",
    choice3: "Game of Thrones"
  },
  {
    question: "Que fais-tu avant d’aller te coucher ?",
    choice4: "Je matte Sex and the City 2.",
    choice1: "Je vérifie pour la 3ème fois que ma chemise est bien pliée pour le lendemain puis je relis mon essai sur le paradoxe de Fermi.",
    choice2: "Je ne me couche pas. Cette nuit c’est opération secrète.",
    choice3: "J’essaie de finir in extremis le daily challenge."
  },
  {
    question: "Quel super héros es-tu?",
    choice4: "Iron Man",
    choice1: "Captain America",
    choice2: "Bat Man",
    choice3: "Professor X"
  },
  {
    question: "Où iras-tu après ta mort ?",
    choice4: "Even",
    choice1: "Nerdvana",
    choice2: "Geek Eden",
    choice3: "Paradice in whiskey",
  },
  {
    question: "A 9h30 du matin :",
    choice4: "Et merde, je suis encore en retard.",
    choice1: "Je suis prêt pour présenter mon daily challenge au tableau.",
    choice2: "Je suis déjà en classe depuis 2 heures.",
    choice3: "J’en suis à mon deuxième café."
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
    return window.location.assign("/fin.html");
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
