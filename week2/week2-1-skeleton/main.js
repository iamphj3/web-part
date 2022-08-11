import pic1 from "./assets/김규민.jpeg";
import pic2 from "./assets/전희선.jpeg";
import pic3 from "./assets/서혜은.jpg";
import pic4 from "./assets/황주희.jpeg";
import pic5 from "./assets/백지연.png";

const $ = (selector) => document.querySelector(selector);

let currentStep = 0;

const quizList = [
  {
    src: pic1,
    answer: "김규민",
  },
  {
    src: pic2,
    answer: "전희선",
  },
  {
    src: pic3,
    answer: "서혜은",
  },
  {
    src: pic4,
    answer: "황주희",
  },
  {
    src: pic5,
    answer: "백지연",
  },
];

function attachEvent({ score, answer, image }) {
  answer.addEventListener("click", (e) => {
    // if (e.target.closest(".answer__list > li") {}
    if (!(e.target instanceof HTMLLIElement)) return;

    const selectedAnswer = e.target.innerText;
    const realAnswer = quizList[currentStep].answer;

    if (selectedAnswer === realAnswer) {
      if (currentStep < 4) {
        goNextStep(score, image);
      } else {
        goInitStep();
      }
    } else {
      stayCurrentStep();
    }
  });
}
function initGame({ score, image }) {
  currentStep = 0;
  score.innerText = currentStep;
  image.src = quizList[currentStep].src;
}
function gameManager(gameInfo) {
  initGame(gameInfo);
  attachEvent(gameInfo);
}
window.onload = () => {
  gameManager({
    score: $(".scoreBoard__score"),
    answer: $(".answer__list"),
    image: $(".imageBoard > img"),
  });
};
