const DOMSelectors = {
  button: document.getElementById("darkmode"),
  button1: document.getElementById("menuall"),
  button2: document.getElementById("patty"),
  button3: document.getElementById("cheese"),
  button4: document.getElementById("toppings"),
  box: document.getElementById("box"),
  container: document.getElementById("container"),
};

export { DOMSelectors };

DOMSelectors.button.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});
