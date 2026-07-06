/* ================= COUNTER ANIMATION ================= */
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const target = +counter.getAttribute("data-target");
  let count = 0;
  const increment = target / 200;

  function updateCounter() {
    count += increment;
    if (count < target) {
      counter.textContent = Math.ceil(count) + "+";
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target + "+";
    }
  }

  updateCounter();
});

/* ================= NAME ANIMATION ================= */
window.addEventListener("load", () => {
  const firstName = document.querySelector(".first-name");
  const lastName = document.querySelector(".last-name");

  firstName.style.transition = "all 1s ease-out";
  firstName.style.transform = "translateX(0)";
  firstName.style.opacity = "1";

  lastName.style.transition = "all 1s ease-out";
  lastName.style.transform = "translateX(0)";
  lastName.style.opacity = "1";
});