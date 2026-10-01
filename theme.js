const button = document.getElementById("theme-toggle");
const root = document.documentElement; // the <html> element

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  button.textContent = theme === "dark" ? "Light mode" : "Dark mode";
}

const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(saved || (prefersDark ? "dark" : "light"));

button.addEventListener("click", function () {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  setTheme(next);
  localStorage.setItem("theme", next);
});
