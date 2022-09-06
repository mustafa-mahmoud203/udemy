import { getCard } from "./show-card.js";
export const createSwiper = (courses) => {
  let courseDiv;
  const container = document.querySelector(".swiper-wrapper");
  container.innerHTML = "";

  let allCards = [];

  courses.forEach((course) => {
    let courseCards = [];
    course.courses.forEach((val) => {
      courseDiv = getCard(val);
      const swip = document.createElement("div");
      swip.classList.add("swiper-slide");
      swip.appendChild(courseDiv);

      courseCards.push(swip);
    });
    allCards.push(...courseCards);
    console.log(courseCards);
    container.append(...allCards);
    getSwiper();
  });
};

export const getSwiper = () => {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    slidesPerColumn: 2,
    spaceBetween: 30,
    // Optional parameters
    direction: "horizontal",

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      // when window width is >= 1px
      1: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 575px
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 767px
      767: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 991px
      991: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      // when window width is >= 1399px
      1399: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });
};
