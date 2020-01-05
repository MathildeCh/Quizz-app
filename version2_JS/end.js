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
    title : "The Super Geek Chick.",
    content: "No way! Are you really there ? Wow. I'm glad to meet you, the strong and modern woman who still cries in front of the Lion King, like to feel pretty and to bitch about everybody on the beach, while spending hours in front of her computer to give birth to amazing projects. So if you feel right now like Hermione Granger in the 1st Harry Potter movie, don't forget that your evolution is a multiple-time rewarded Emma Watson. Don't give nothing up, and keep geeking while painting your nails. Kiss.",
    img1: 'img/image11.jpg',
    img2: "img/image13.jpg"
  },
  {
    title : "You are a Dr Jegeek and Mr Hyde.",
    content: "As your nickname suggests, you have two faces; your characteristic is to brilliantly combine two contradictory attributes. You are the unexpected geek, the geek with style. You can be a beautiful model, or wearing nerdy glasses and the hipster beard of Jamy, you can have 15 children and as many projects, or succeed in managing a time-consuming religious conviction and learning to code in the same time, or, in extreme cases, be an eccentric fashionista. What matters is that you like to code and it's surprising at first sight. Like the caterpillar, you never stop transforming, and your mental strength is your superpower. Congrats and stay strong, young padawan, on the long journey you just started. May you never sink into the Dark Side of the Force. Which consist on eating French fries with mayonnaise of course! Shame on you.",
    img1: "img/image15.jpg",
    img2: "img/image5.jpg",
    img3: "img/image3.jpg"
  },
  {
    title : "Ouh, you're an obsessive compulsive hacker!",
    content: "You are, or used to be, a rabid teen whose hobbie’s became an act of rebellion, driven by a thirst for justice, or an incredible desire to piss off any living souls on this earth. A kilo of daring, two teaspoons of insolence, an hint of obsessive obstinacy and a large cup of mischief are leading to your profile, which ranges from the benevolent hacker to the lawless Anonymous. You are always there, experimenting and tampering, like a dark knight. Why? For the fun, and mainly because you enjoy, above all, challenging yourself. And if by any chance it would also mean to change the world and create a more equal society, then why not? Often tormented and neglected, you are genuinely passionate. The power conferred to you by the new technologies, that you master to perfection, is astonishing. Though be careful little meerkat, not to abuse of cloud nine, otherwise in heaven you will end.",
    // img1: "img/image4.jpg",
    img2: "img/hacker.png"
  },
  {
    title : "Game over. you are a nerd.",
    content: "Oh no ! You’re a nerd. First in the class, always ready to unsheathe your glasses and the latest science and life magazine, the daily challenges are a big joke for you. You flee the gyms, adulates Captain America and Naruto. Rather psycho rigid and introverted, your computer and your right hand are your best friends. Even though your first consenting sexual experience is not for today, you can be glad because your future is fulfilled with cash. Indeed, your intelligence is only equalled by your lack of charisma.",
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
