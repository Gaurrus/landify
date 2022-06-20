const burgerItem = document.querySelector(".header-burger");
const menu = document.querySelector(".header-nav");
const menuCloseItem = document.querySelector(".header-nav-close");
const body = document.querySelector(".body");
const headerLinks = document.querySelectorAll(".header-link");

const onChangeClass = () => {
  menu.classList.toggle("header-nav-active");
  body.classList.toggle("body-unactive");
};

burgerItem.addEventListener("click", () => {
  onChangeClass();
});

menuCloseItem.addEventListener("click", () => {
  onChangeClass();
});

headerLinks.forEach((headerLink) =>
  headerLink.addEventListener("click", () => {
    onChangeClass();
  })
);