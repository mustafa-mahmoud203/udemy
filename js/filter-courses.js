// export const filterCourses = (e) => {
//   e.preventDefault();
//   let filterEl = document.querySelector(".filter-el");
//   let filterQuery = filterEl.value.toLowerCase();

//   let filteredCourses = allCourses.filter((tab) => {
//     return tab.name === filterQuery; // return true if tab.name === query
//   });

//   if (filterQuery !== "") showCards(filteredCourses);
//   else showCards(allCourses);

//   return filteredCourses;
// };

export const filterCourses = (query, courses) => {
  let filteredCourses = courses.filter((tab) => {
    return tab.name === query;
  });

  return filteredCourses;
};


// export const searchCourses = (courses, filterCourses) => {
//   let filterEl = document.querySelector(".filter-el");
//   let filterQuery = filterEl.value.toLowerCase();

//   let filteredCourses = filterCourses(filterQuery, courses);

//   if (filterQuery !== "") showCards(filteredCourses);
//   else showCards(courses);
// } 