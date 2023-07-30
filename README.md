
# Medium clone
Clone site of medium given by EPICODE.


## Screenshots

![image](https://github.com/MrMax01/S5-L5-Progetto-settimanale/assets/135627515/5eaa546a-ff4f-4a20-81f4-61f9bc4131a7)




## Lessons Learned

The peculiarity was working to manipulate the svg and create the animation. I learned how to manage an svg with many elements. I saved the elements in an array which I then reused to back-animate the SVG.


## Usage/Examples

```javascript
import Component from 'my-project'

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
  if (randomM.getAttribute("opacity") === "0") {
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
    count--;
    svgShowed[count].setAttribute("opacity", "0");
    svgShowed.pop();
    if (count === 0) flag = true;
  }
}, 100);
```


## 🛠 Skills
 HTML, CSS, javascript


## Authors

- [@Massimo](https://www.github.com/MrMax01)

