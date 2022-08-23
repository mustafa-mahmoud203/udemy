import { createNavTaps } from "./taps.js";
import { showCards } from "./show-card.js";
import { filterCourses } from "./filter-courses.js";
import {createCarousel,createInner,createItem,carouselBtn} from "./carousel.js";
const getCourses = async () => {
  const allCourses = await fetch("http://localhost:3000/tabs");

  return await allCourses.json();
};
let allCourses = await getCourses();

//showCards.js
showCards(allCourses);

//filter-Courses.js
let searchBtn = document.getElementById("search_btn");
searchBtn.addEventListener("click", filterCourses);



createNavTaps(allCourses);
