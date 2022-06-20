let catalogSlider = null;
const mediaQuerySize = 1040;

function catalogSliderInit() {
  if (!catalogSlider) {
    catalogSlider = new Swiper(".adds-swiper", {
      keyboard: {
        enabled: true,
      },
      autoplay: {
        delay: 2000,
      },
      loop: true,
      spaceBetween: 8,
      breakpoints: {
        767: {
          slidesPerView: 5,
        },
        651: {
          slidesPerView: 3,
        },
        420: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      },
    });
  }
}

const catalogSliderDestroy = () => {
  if (catalogSlider) {
    catalogSlider.destroy();
    catalogSlider = null;
  }
};

const getCotalogSlider = () => {
  // Если ширина экрана меньше или равна mediaQuerySize(1040)
  if (window.innerWidth <= mediaQuerySize) {
    // Инициализировать слайдер
    catalogSliderInit();
  } else {
    // Уничтожить слайдер
    catalogSliderDestroy();
  }
};

getCotalogSlider();

window.addEventListener("resize", () => {
  getCotalogSlider();
});
