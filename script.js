var dark = document.querySelector(".dark");
var img = document.querySelectorAll(".img");
var bulb = document.querySelector("#bulb");
dark.addEventListener("click", function () {
  console.log(dark.classList);
  if (dark.classList.value === "dark") {
    document.body.style.filter = "invert(1) hue-rotate(180deg)";
    img.forEach((e) => {
      e.style.filter = "invert(1) hue-rotate(180deg)";
    });
    localStorage.setItem("theme", "white");
    bulb.src = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
  } else {
    document.body.style.filter = "none";
    img.forEach((e) => {
      e.style.filter = "none";
    });
    localStorage.setItem("theme", "dark");
    bulb.src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
  }
  dark.classList.toggle("dark");
});

window.onload = () => {
  var theme = localStorage.getItem("theme");
  if (theme == "dark") {
    bulb.src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
    document.body.style.filter = "none";
    img.forEach((e) => {
      e.style.filter = "none";
    });
    bulb.style.filter = "none";
  } else {
    bulb.src = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
    document.body.style.filter = "invert(1) hue-rotate(180deg)";
    img.forEach((e) => {
      e.style.filter = "invert(1) hue-rotate(180deg)";
    });
    dark.classList.toggle("dark");
    bulb.style.filter = "invert(1) hue-rotate(180deg)";

  }
};
