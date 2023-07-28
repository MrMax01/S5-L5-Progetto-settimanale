const nav = document.querySelector("nav");
document.addEventListener("scroll", (event) => {
  if (window.scrollY > 400) {
    nav.classList.add("bianco");
  } else {
    nav.classList.remove("bianco");
  }
});

// const svg = document.querySelectorAll("g");

// console.log(svg);
// setInterval(() => {}, 500);
