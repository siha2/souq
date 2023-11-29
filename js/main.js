let toggler = document.querySelector(".toggle-menu");
let links = document.querySelector(".links-content");

toggler.addEventListener("click", function () {
  toggler.classList.toggle("menu-active");
  links.classList.toggle("open");
})