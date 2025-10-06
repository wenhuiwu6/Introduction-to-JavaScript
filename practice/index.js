//select elements
const button = document.querySelector(".btn");
const box = document.querySelector(".box");
//use events
function makeRGB(event) {
  /* console.log(event);
    console.log(event.target); */
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  box.style.backgoundColor = "rgb(${r},${g},${b}";
}
button.addEventListener("click", makeRGB);
