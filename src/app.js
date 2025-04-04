import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  generateExcuse();
  document.getElementById("generateButton").addEventListener("click", generateExcuse);
};
function generateExcuse() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  let excuse =
    `${who[Math.floor(Math.random() * who.length)]} ${action[Math.floor(Math.random() * action.length)]} ${when[Math.floor(Math.random() * when.length)]}${what[Math.floor(Math.random() * what.length)]}.`;
  document.getElementById("excuse").innerText = excuse;
  console.log(excuse)
}
