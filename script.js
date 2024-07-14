var dark = document.querySelector(".dark");
var main = document.querySelector(".main");
var footer = document.querySelector("footer");
var img = document.querySelectorAll(".img");
var bulb = document.querySelector("#bulb");
function invert_elem(elem) {
  elem.style.filter = "invert(1) hue-rotate(180deg)";
}
function invert_none(elem) {
  elem.style.filter = "none";
}
dark.addEventListener("click", function () {
  if (dark.classList.value === "dark") {
    invert_elem(main);
    invert_elem(footer);
    img.forEach((e) => {
      invert_elem(e);
    });
    bulb.src = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
  } else {
    invert_none(main);
    invert_none(footer);
    img.forEach((e) => {
      invert_none(e);
    });
    bulb.src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
  }
  dark.classList.toggle("dark");
});
// window.onload = () => {
//   var theme = localStorage.getItem("theme");
//   if (theme == "dark") {
//     bulb.src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
//     main.style.filter = "none";
//     img.forEach((e) => {
//       e.style.filter = "none";
//     });
//     bulb.style.filter = "none";
//   } else {
//     bulb.src = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
//     main.style.filter = "invert(1) hue-rotate(180deg)";
//     img.forEach((e) => {
//       e.style.filter = "invert(1) hue-rotate(180deg)";
//     });
//     dark.classList.toggle("dark");
//     bulb.style.filter = "invert(1) hue-rotate(180deg)";

//   }
// };
