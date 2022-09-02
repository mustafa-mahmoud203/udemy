import { createNavTaps } from "./tabs.js";
import { filterCourses} from "./filter-courses.js";
import { showTopCategoriesCard } from "./top-categories.js";
import { createSwiper, getSeiper } from "./carousel.js";
import {createCoursesDescription} from "./courses-description.js";

//getCourses
const getCourses = async () => {
  const allCourses = await fetch("http://localhost:3000/tabs");

  return await allCourses.json();
};

//getCategories
const getCategories = async () => {
  const allCategories = await fetch("http://localhost:3000/categories");

  return await allCategories.json();
};

let allCategories = await getCategories();
let allCourses = await getCourses();



//Search-filter-Courses.js
// let searchBtn = document.getElementById("search_btn");
// searchBtn.addEventListener("click", searchCourses(allCourses,filterCourses));

//Nav courses Taps
createNavTaps(allCourses);

//CoursesDescription 




let nav = document.querySelector(".nav");
let navLink = nav.querySelectorAll(".nav-link");


let defultCourses= filterCourses("python",allCourses);
createSwiper(defultCourses);
createCoursesDescription(defultCourses);

navLink.forEach((item, index) => {
  item.addEventListener("click", ()=>{
   let filteredCourses= filterCourses(item.textContent,allCourses);
  
   createCoursesDescription(filteredCourses);
   createSwiper(filteredCourses)
  })
 
  
});


// Swiper section

getSeiper();

// Top Categories section
showTopCategoriesCard(allCategories);