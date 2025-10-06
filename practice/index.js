const button = document.querySelector(".btn");
const box = document.querySelector(".box");

button.addEvenrListener("click", function (event) {
  /* console.log(event);
    console.log(event.target); */
  let r = Math.floor(Math.random(0, 225));
  let g = Math.floor(Math.random(0, 225));
  let b = Math.floor(Math.random(0, 225));

  box.style.backgoundColor = "rgb(${r},${g},${b}";
});
