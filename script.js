const nav = document.querySelector("nav");
document.addEventListener("scroll", (event) => {
  if (window.scrollY > 400) {
    nav.classList.add("bianco");
  } else {
    nav.classList.remove("bianco");
  }
});

// const svg = document.querySelectorAll("g");
const svg = document.querySelectorAll('[stroke-linecap="butt"]');
const svgShowed = [];
const cicleNumber = 100;
let count = 0;
const pickRandomM = () => {
  const randomIndex = Math.floor(Math.random() * svg.length);
  return svg[randomIndex];
};

const app = () => {
  const randomM = pickRandomM();
  console.log(randomM);
  if (randomM.getAttribute("opacity") === "0") {
    console.log("entra");
    svgShowed.push(randomM);
    randomM.setAttribute("opacity", "1");
  } else {
    app();
  }
};

setInterval(() => {
  if (count < cicleNumber) {
    app();
    count++;
  } else {
    while (count === 0) {
      svgShowed[count].setAttribute("opacity", "0");
      count--;
    }
  }
}, 100);
