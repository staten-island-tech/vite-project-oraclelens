import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import "../js/burger.js";
AOS.init();
document.querySelector("#app").innerHTML = `
<h1 class=title>Build-A-Burger</h1>`;
