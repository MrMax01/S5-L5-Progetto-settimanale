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
  // console.log(randomM);
  if (randomM.getAttribute("opacity") === "0") {
    // console.log("entra");
    svgShowed.push(randomM);
    randomM.setAttribute("opacity", "1");
  } else {
    app();
  }
};
let flag = true;

setInterval(() => {
  if (flag) {
    if (count < cicleNumber) {
      app();
      count++;
      if (count === cicleNumber) flag = false;
    }
  } else {
    // console.log(svgShowed);
    count--;
    svgShowed[count].setAttribute("opacity", "0");
    svgShowed.pop();
    if (count === 0) flag = true;
  }
}, 100);
