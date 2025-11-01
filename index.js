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
  // Intersection Observer for animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // Once the animation is triggered, we don't need to observe this element anymore
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(
    handleIntersection,
    observerOptions
  );

  // Observe all animated elements
  document.querySelectorAll(".popup, .fade-in").forEach((element) => {
    observer.observe(element);
  });

  // Add active class to elements above the fold immediately
  document.querySelectorAll(".popup, .fade-in").forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add("active");
    }
  });
});
