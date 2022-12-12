import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import { burgeroptions } from "../js/burger.js";
AOS.init();
document.querySelector("#titlecard").innerHTML = `
<h1 class=title>Make Your Own Burger</h1>`;

const menu = {
  getPatty: function () {
    burgeroptions
      .filter((el) => el.part === "patty")
      .forEach((el) => {
        console.log(el.name);
        DOMSelectors.box.insertAdjacentHTML = `
        <h2>${el.name}</h2>`;
      });
  },
};
