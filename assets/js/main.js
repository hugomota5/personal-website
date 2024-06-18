const menuMobile = document.querySelector(".navbar__hamburger");

const navElement = document.querySelector(".navbar__menu");

menuMobile.addEventListener("click", function () {
  menuMobile.classList.toggle("navbar__hamburger--active");
  navElement.classList.toggle("navbar__menu--active");
});
