// Light/dark mode switch
const button = document.getElementById("theme-toggle");
const root = document.documentElement; // the <html> element

// Set the theme and update the button text
function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  button.textContent = theme === "dark" ? "Light mode" : "Dark mode";
}

// On page load: use the saved choice, otherwise follow the computer's setting
const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(saved || (prefersDark ? "dark" : "light"));

// On click: flip the theme and remember it for the next visit / other page
button.addEventListener("click", function () {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  setTheme(next);
  localStorage.setItem("theme", next);
});
