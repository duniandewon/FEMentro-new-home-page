import "./styles/main.scss";

const openMenuBtn = document.querySelector("#open-menu");
const closeMenuBtn = document.querySelector("#close-menu");
const mobileMenu = document.querySelector("#mobile-menu");

openMenuBtn?.addEventListener("click", () => {
  mobileMenu?.classList.add("active");
});

closeMenuBtn?.addEventListener("click", () => {
  mobileMenu?.classList.remove("active");
});
