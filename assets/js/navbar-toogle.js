// const togglerButton = document.getElementById("menu-toggle");

// function handleClick() {
//   togglerButton.classList.toggle("navbar__toggler-active");
// }
const navBarElemento = document.querySelector(".navbar__menu");
const toggleButtonElemento = document.querySelector(".navbar__toggle");

toggleButtonElemento.addEventListener("click", () => {
  navBarElemento.classList.toggle("navbar__menu--open");
  toggleButtonElemento.classList.toggle("navbar__toggle--open");
});
