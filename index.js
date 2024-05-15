var menuButton = document.getElementById("menu_btn");
var nav = document.getElementById("nav");
var header = document.getElementById("header");

menuButton.addEventListener("click", function () {
  nav.classList.toggle("hidden");
  header.classList.toggle("height_header");
  header.style.borderRadius = "50px";
});

//Hide and show header as you scroll

let lastScrollTop = 0;

window.addEventListener(
  "scroll",
  function () {
    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // scrolling down
      document.getElementById("header").style.top = "-100px"; // Hides the header
    } else {
      // scrolling up
      document.getElementById("header").style.top = "1rem"; // Shows the header
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  },
  false
);

// rise up text animation
document.addEventListener("DOMContentLoaded", function () {
  const popups = document.querySelectorAll(".popup");

  function checkPopup() {
    popups.forEach((popup) => {
      const triggerPosition = window.innerHeight - 20; // Adjust trigger position as per need
      const popupPosition = popup.getBoundingClientRect().top;

      if (popupPosition < triggerPosition) {
        popup.classList.add("active");
      } else {
        popup.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", checkPopup);
  window.addEventListener("resize", checkPopup);

  // Initial check in case some popups are already visible on page load
  checkPopup();
});

//fadeIn animation
document.addEventListener("DOMContentLoaded", function () {
  const fadeIns = document.querySelectorAll(".fade-in");

  function checkFadeIn() {
    fadeIns.forEach((fadeIn) => {
      const triggerPosition = window.innerHeight - 100; // Adjust trigger position as per need
      const fadeInPosition = fadeIn.getBoundingClientRect().top;

      if (fadeInPosition < triggerPosition) {
        fadeIn.classList.add("active");
      } else {
        fadeIn.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", checkFadeIn);
  window.addEventListener("resize", checkFadeIn);

  // Initial check in case some elements are already visible on page load
  checkFadeIn();
});
