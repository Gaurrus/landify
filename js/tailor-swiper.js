let tailorSlider = null;
const mediaQuerrySize = 610;

function tailorSliderInit() {
  if (!tailorSlider) {
    tailorSlider = new Swiper(".tailor-cards", {
      // pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      
      keyboard: {
        enabled: true,
      },
      autoplay: {
        delay: 2500,
      },
      loop: true,
      spaceBetween: 16,
      breakpoints: {
        610: {
          slidesPerView: 1,
        },
        420: {
          slidesPerView: 1,
        },
        320: {
          slidesPerView: 1,
        },
      },
    });
  }
}

const tailorSliderDestroy = () => {
  if (tailorSlider) {
    tailorSlider.destroy();
    tailorSlider = null;
  }
};

const getTailorSlider = () => {
  // Если ширина экрана меньше или равна mediaQuerySize(1040)
  if (window.innerWidth <= mediaQuerrySize) {
    // Инициализировать слайдер
    tailorSliderInit();
  } else {
    // Уничтожить слайдер
    tailorSliderDestroy();
  }
};

getTailorSlider();

window.addEventListener("resize", () => {
  getTailorSlider();
});
