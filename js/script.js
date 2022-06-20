const header = document.querySelector(".header");
document.addEventListener("scroll", () => {
  if (window.pageYOffset > 25) {
    header.classList.add("header_active");
  } else {
    header.classList.remove("header_active");
  }
});