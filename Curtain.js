const welcomeText = document.getElementById("welcomeText");

function openCurtainAndRedirect() {
  welcomeText.classList.add("zoom-out");

  // Redirect after animation completes
  setTimeout(() => {
    window.location.href = "About.html";
  }, 1000); // must match CSS transition duration
}

// Trigger on click anywhere
window.addEventListener("click", () => {
  if (!welcomeText.classList.contains("zoom-out")) {
    openCurtainAndRedirect();
  }
});