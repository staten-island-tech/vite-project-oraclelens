import "../styles/style.css";
import AOS from "aos";
import { burgeroptions } from "./burger";
import { DOMSelectors } from "./dom";
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

const remove = function () {
  document.querySelectorAll(".inner").forEach((e) => e.remove());
};

const options = {
  getAll: function () {
    document.getElementById("menuall").addEventListener("click", function () {
      remove();
      burgeroptions.forEach((el) => {
        console.log(el.name);
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `
      <div class="inner">
      <p>${el.name}</p>
      <img class="abby" src="${el.img}" alt="add image">        
      <p class=cals>Calories: ${el.calories}</p>
      </div>`
        );
      });
    });
  },

  getBurger: function () {
    document.getElementById("patty").addEventListener("click", function () {
      remove();
      burgeroptions
        .filter((el) => el.part.includes("patty"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
        <div class="inner">
        <p>${el.name}</p>
        <img class="abby" src="${el.img}" alt="add image">        
        <p class=cals>Calories: ${el.calories}</p>
        </div>`
          );
        });
    });
  },

  getCheese: function () {
    document.getElementById("cheese").addEventListener("click", function () {
      remove();
      burgeroptions
        .filter((el) => el.part.includes("cheese"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
          <div class="inner">
          <p>${el.name}</p>
          <img class="abby" src="${el.img}" alt="add image">        
          <p class=cals>Calories: ${el.calories}</p>
          </div>`
          );
        });
    });
  },

  getToppings: function () {
    document.getElementById("toppings").addEventListener("click", function () {
      remove();
      burgeroptions
        .filter((el) => el.part.includes("toppings"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
          <div class="inner">
          <p>${el.name}</p>
          <img class="abby" src="${el.img}" alt="add image">        
          <p class=cals>Calories: ${el.calories}</p>
          </div>`
          );
        });
    });
  },

  getVegetarian: function () {
    document
      .getElementById("vegetarian")
      .addEventListener("click", function () {
        remove();
        burgeroptions
          .filter((el) => el.vegetarian.includes("yes"))
          .forEach((el) => {
            console.log(el.name);
            DOMSelectors.box.insertAdjacentHTML(
              "beforeend",
              `
          <div class="inner">
          <p>${el.name}</p>
          <img class="abby" src="${el.img}" alt="add image">        
          <p class=cals>Calories: ${el.calories}</p>
          </div>`
            );
          });
      });
  },
};
options.getAll();
options.getBurger();
options.getCheese();
options.getToppings();
options.getVegetarian();
