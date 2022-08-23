export function showCards(courseRespons) {
  let coursesCards = document.querySelector(".list-of-courses");

  // coursesCards.innerHTML = '';
  let blockOfCourses = document.createElement("div");
  blockOfCourses.className = "grid-list-of-courses";
  for (let i = 0; i < courseRespons.length; i++) {
    for (let j = 0; j < courseRespons[i].courses.length; j++)
      blockOfCourses.appendChild(getCard(courseRespons[i].courses[j]));
  }
  coursesCards.appendChild(blockOfCourses);
}

function getCard(course) {
  let coursesLink = document.createElement("a");
  coursesLink.href = course.link;
  //coursesLink.target=blank;

  let coursesCard = document.createElement("div");
  coursesCard.className = "style-courses-card";
  coursesLink.appendChild(coursesCard);

  let coursesCardImg = document.createElement("img");
  coursesCardImg.setAttribute("src", course.image);
  let coursesCardH5 = document.createElement("h5");
  coursesCardH5.textContent = course.title;
  let coursesCardParagraph = document.createElement("p");
  coursesCardParagraph.className = "author-name";
  coursesCardParagraph.textContent = course.instructor;

  let coursesCardPrice = document.createElement("div");
  coursesCardPrice.className = "course-price";
  coursesCardPrice.textContent = course.price;
  let coursesCardRating = document.createElement("span");
  coursesCard.append(
    coursesCardImg,
    coursesCardH5,
    coursesCardParagraph,
    coursesCardRating,
    coursesCardPrice
  );

  let coursesCardRatingNum = document.createElement("span");
  coursesCardRatingNum.className = "rating-num";
  coursesCardRatingNum.textContent = course.rating;
  let coursesCardRatingStars = document.createElement("span");
  coursesCardRatingStars.className = "rating-stars";
  coursesCardRatingStars.appendChild(createCoursesStars(course.rating));

  let coursesCardNumOFStudents = document.createElement("span");
  coursesCardNumOFStudents.className = "num-of-students";
  coursesCardNumOFStudents.textContent = course.views;
  coursesCardRating.append(
    coursesCardRatingNum,
    coursesCardRatingStars,
    coursesCardNumOFStudents
  );

  return coursesLink;
}

function createCoursesStars(rating) {
  let ratingStars = document.createElement("span");
  for (let i = 0; i < parseInt(rating); i++) {
    let stars = document.createElement("i");
    stars.classList = "fa-solid fa-star gold-star";
    ratingStars.appendChild(stars);
  }
  if (rating - parseInt(rating) > 0) {
    let stars = document.createElement("i");
    stars.classList = "fa-solid fa-star-half-stroke gold-star";
    ratingStars.appendChild(stars);
  }
  for (let i = 0; i < 5 - Math.ceil(rating); i++) {
    let stars = document.createElement("i");
    stars.classList = "fa-solid fa-star gray-star";
    ratingStars.appendChild(stars);
  }
  return ratingStars;
}
