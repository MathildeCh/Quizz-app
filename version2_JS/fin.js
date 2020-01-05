const resultTitle = document.getElementById('finalScore');
const resultText = document.getElementById('finalScoreText');
// const profil = document.getElementById('profilBtn');
const scoreProfil = localStorage.getItem("score");
console.log(scoreProfil);
const image1 = document.getElementById("img1");
const image2 = document.getElementById("img2");
const image3 = document.getElementById("img3");
const div = document.getElementById("pic");


const profilsInEnglish = [
  {
    title : "La Super Geek Chick.",
    content: "No way ! Tu es là? Incroyable!! Bienvenue à toi, femme moderne, inconsciente sans honte, écervelée sans pudeur. Si l’ordinaire stupidité de ton esprit borné ne t’as pas arrêté, c’est que tu dois être une femme hors norme, surement pourvue de pouvoirs magiques. Que nenni ! En réalité, tu es une vraie badass, même si tu pleures encore devant le Roi Lion, aimes les manicures et surtout bitcher sur tout ce qui bouge à la plage. Alors même si actuellement tu te sens un peu comme Hermione Granger dans l’opus 1, n’oublie pas que c’est une Emma Watson aux multiples Awards qui t’attend bientôt. Fonce.",
    img1: 'img/image11.jpg',
    img2: "img/image13.jpg"
  },
  {
    title : "Tu es Dr Jegeek and Mr Hyde.",
    content: "Comme ton surnom l’indique, tu as deux visages ; ta caractéristique est d’allier avec brio deux attributs contradictoires. Tu es le geek inattendu, le geek qui a du style, que tu sois beau gosse mannequin, que tu portes des lunettes de nerds et une barbe de hipster à la Jamy, que tu aies 15 enfants et autant de projets, que tu réussisses à gérer conviction religieuse chronophage et apprentissage du code ou, pour les extrêmes, que tu sois une fashionista excentrique ; tu aimes coder et cela surprend aux premiers abords. Telle la chenille, tu ne cesses de te métamorphoser, et ta force mentale est ton super-pouvoir. Bravo à toi et courage, jeune padawan, sur le long chemin qui est le tien. Puisses-tu ne jamais sombrer du côté obscur de la force. Qui est de manger des frites avec de la mayonnaise bien sûr ! Shame on you.",
    img1: "img/image15.jpg",
    img2: "img/image5.jpg",
    img3: "img/image3.jpg"
  },
  {
    title : "Ouh, tu es un hacker obsessionnel compulsif!",
    content: "Actuellement ou anciennement ado enragé, tu as fait de ton hobbie un acte de rébellion, poussé par une soif de justice ou bien une incroyable envie de faire chier. Un kilo d’audace, deux cuillères à soupe d’insolence, une pointe d’obstination obsessionnelle et un grand verre de malice nous donne ton profil, qui s’étend du hacker bienveillant à l’Anonymous sans foi ni loi. Tu ne cesses d’expérimenter et de trafiquer, à la Bat Man, pour le fun mais aussi car tu aimes par-dessus tout te challenger personnellement et si tu pouvais, d’une pierre deux coups, changer le monde et créer une société plus juste, tu ne dis pas non. Souvent tourmenté et négligé, tu es un vrai passionné et le pouvoir que te confères les nouvelles technologies que tu maîtrises à la perfection t’étourdis. Mais attention petit suricate, à ne pas te prendre trop au sérieux, sinon comme Light tu finiras aux cieux.",
    // img1: "img/image4.jpg",
    img2: "img/hacker.png"
  },
  {
    title : "Game over. Tu es un nerd.",
    content: "Il paraîtrait que tu appartiennes à l’espèce des nerds. Premier de la classe, toujours prêt à dégainer tes lunettes et la dernière revue de sciences et vie, les daily challenges sont une vaste blague pour toi. Tu fuis les salles de sport, adule Captain America et Naruto, plutôt psycho rigide et introverti, ton ordinateur et ta main droite sont tes meilleurs amis. Mais réjouis-toi car si ta première expérience sexuelle consentante n'est pas pour tout de suite, tu auras un futur dépourvu de problèmes financiers, car ton intelligence n’a d’égale que ton manque de charisme.",
    img1: "img/image8.jpg",
    // img1: "img/image14.jpg",
  }
];



const displayProfil = (scoreProfil) => {
  if (scoreProfil >= 38) {
    resultTitle.innerText = profilsInEnglish[0].title;
    resultText.innerText = profilsInEnglish[0].content;
    image2.setAttribute("src", profilsInEnglish[0].img1);
    image1.setAttribute("src", profilsInEnglish[0].img2);
    image1.setAttribute("class", "imge1");
    image2.setAttribute("class", "imge2");
    div.setAttribute("class", "pics");

  } else if (scoreProfil >= 27) {
    resultTitle.innerText = profilsInEnglish[1].title;
    resultText.innerText = profilsInEnglish[1].content;
    image1.setAttribute("src", profilsInEnglish[1].img1);
    image2.setAttribute("src", profilsInEnglish[1].img2);
    image3.setAttribute("src", profilsInEnglish[1].img3);
    image1.setAttribute("class", "image1");
    image2.setAttribute("class", "image2");
    image3.setAttribute("class", "image3");
    div.setAttribute("class", "other");

  } else if (scoreProfil >= 19) {
    resultTitle.innerText = profilsInEnglish[2].title;
    resultText.innerText = profilsInEnglish[2].content;
    image1.setAttribute("src", profilsInEnglish[2].img1);
    image2.setAttribute("src", profilsInEnglish[2].img2);
    image2.setAttribute("class", "image2");
    div.setAttribute("class", "other");
  } else {
    resultTitle.innerText = profilsInEnglish[3].title;
    resultText.innerText = profilsInEnglish[3].content;
    image1.setAttribute("src", profilsInEnglish[3].img1);
    image2.setAttribute("src", profilsInEnglish[3].img2);
    image1.setAttribute("class", "image2");
    div.setAttribute("class", "other");
  }
};

displayProfil(scoreProfil);
