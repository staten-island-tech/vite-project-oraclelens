import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import { burgeroptions } from "./burger";
import { DOMSelectors } from "./dom";
AOS.init();
document.querySelector("#titlecard").innerHTML = `
<h1 class=title>Make Your Own Burger</h1>`;

burgeroptions.forEach((el) => {
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `
      <div class="inner">
      <p>${el.name}</p>
      <img class="abby" src="${el.img}" alt="add image">
      <p class="cals">Calories: ${el.calories}</p>
      </div>`
  );
});

const options = {
  getToppings: function () {
    burgeroptions
      .filter((el) => el.part.includes(`toppings`))
      .forEach((el) => {
        console.log(el.name);
        DOMSelectors.box.insertAdjacentElement = `
          <h2>${el.name}</h2>`;
      });
  },
  getCheese: function () {
    burgeroptions
      .filter((el) => el.part.includes(`cheese`))
      .forEach((el) => {
        console.log(el.name);
        DOMSelectors.box.insertAdjacentElement = `
          <h2>${el.name}</h2>`;
      });
  },
  getMeat: function () {
    burgeroptions
      .filter((el) => el.part.includes(`patty`))
      .forEach((el) => {
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `
          <h2>${el.name}</h2>`
        );
      });
  },
};

DOMSelectors.button3.addEventListener("click", function () {
  options.getMeat();
});
