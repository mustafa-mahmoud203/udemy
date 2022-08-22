let coursesRespons;
async function getCourses() {
    coursesRespons= await (await fetch("http://localhost:3000/tabs")).json();
   
   showCards(coursesRespons);
    
}

function showCards(courseRespons){
    let coursesCards=document.querySelector(".list-of-courses");

    coursesCards.innerHTML = ''; 

    for(let i=0;i<courseRespons.length;i++){
        for(let j=0;j<courseRespons[i].courses.length;j++)
        coursesCards.appendChild( getCard(courseRespons[i].courses[j]));

    }
}

getCourses();

function getCard(course){

    let coursesLink=document.createElement('a');
         coursesLink.href=course.link;
        //coursesLink.target=blank;
       
    let coursesCard=document.createElement('div');
         coursesCard.className="style-courses-card"
         coursesLink.appendChild(coursesCard);

    let coursesCardImg=document.createElement('img');
        coursesCardImg.setAttribute("src" ,course.image);
    let coursesCardH5=document.createElement('h5');
         coursesCardH5.textContent=course.title;
    let coursesCardParagraph=document.createElement('p');
         coursesCardParagraph.className ="author-name";
         coursesCardParagraph.textContent=course.instructor;
  
    let coursesCardPrice=document.createElement('div');
         coursesCardPrice.className="course-price";
         coursesCardPrice.textContent=course.price;
    let coursesCardRating=document.createElement('span');
         coursesCard.append(coursesCardImg,coursesCardH5,coursesCardParagraph,coursesCardRating,coursesCardPrice);
 
    let coursesCardRatingNum=document.createElement('span')
        coursesCardRatingNum.className="rating-num";
        coursesCardRatingNum.textContent=course.rating;
    let coursesCardRatingStars=document.createElement('span')
        coursesCardRatingStars.className= "rating-stars";
        coursesCardRatingStars.appendChild(createCoursesStars(course.rating))
    
    let coursesCardNumOFStudents=document.createElement('span')
        coursesCardNumOFStudents.className= "num-of-students";
        coursesCardNumOFStudents.textContent= course.views;
        coursesCardRating.append(coursesCardRatingNum,coursesCardRatingStars,coursesCardNumOFStudents)
      

    return coursesLink;
  }

  function createCoursesStars( rating){
      let ratingStars=document.createElement('span');
      for(let i=0;i<parseInt(rating);i++){
          let stars=document.createElement('i');
          stars.classList="fa-solid fa-star gold-star";
          ratingStars.appendChild(stars);
      }
      if(rating-parseInt(rating)>0){
        let stars=document.createElement('i');
        stars.classList="fa-solid fa-star-half-stroke gold-star";
        ratingStars.appendChild(stars);
      }
      for(let i=0;i<5-Math.ceil(rating);i++){
        let stars=document.createElement('i');
        stars.classList="fa-solid fa-star gray-star";
        ratingStars.appendChild(stars);
    }
    return ratingStars;
  }
 

function filterCourses(e){
    e.preventDefault();
    let filterEl = document.querySelector(".filter-el") 
    let filterQuery = filterEl.value.toLowerCase(); 

    let filteredCourses = coursesRespons.filter(tab => {
        return tab.name === filterQuery; // return true if tab.name === query
    });
    
    if(filterQuery!=='')
        showCards(filteredCourses);
     else 
        showCards(coursesRespons);

}

let searchBtn = document.getElementById("search_btn") 
searchBtn.addEventListener('click', filterCourses) 








