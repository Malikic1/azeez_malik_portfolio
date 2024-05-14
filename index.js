var menuButton = document.getElementById("menu_btn");
var nav = document.getElementById("nav");
var header = document.getElementById("header");

menuButton.addEventListener("click", function () {
  nav.classList.toggle("hidden");
  header.classList.toggle("height_header");
  header.style.borderRadius = "50px";
});
