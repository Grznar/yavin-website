// Add custom JavaScript here
function userScroll() {
  const navbar = document.querySelector(".navbar");
  const toTopBtn = document.querySelector(".to-top-btn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("navbar-sticky");
      toTopBtn.classList.add("show");
    } else {
      navbar.classList.remove("navbar-sticky");
      toTopBtn.classList.remove("show");
    }
  });
}

function scrollUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function icrementStats() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.innerText = 0;
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerText;

      const increment = target / 50000;

      if (c < target) {
        counter.innerText = Math.ceil(c + increment);
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

//EVENT LISTENERS
document.addEventListener("DOMContentLoaded", userScroll);
document.addEventListener("DOMContentLoaded", icrementStats);
document.addEventListener("DOMContentLoaded", () => {
  userScroll();
  icrementStats();
  document.querySelector(".to-top-btn").addEventListener("click", scrollUp);
});
