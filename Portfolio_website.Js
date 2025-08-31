// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact button action
function contactMe() {
  window.location.href = "mailto:your-email@example.com";
}

// Simple fade-in animation
const elements = document.querySelectorAll(".card, .hero-right, .hero-left, section h3, section p");
elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  window.addEventListener("scroll", () => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.style.transition = "all 0.6s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});
