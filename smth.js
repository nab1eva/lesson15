const sidebar = document.querySelector("aside");
const sidebarToggle = document.querySelector(".hamburger");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

const body = document.body;
const modeToggle = document.querySelector(".switch");

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});
