export const createCoursesDescription = (courses) => {
  let mainDiv = document.querySelector(".description-course-content");
  courses.forEach(item => {
    mainDiv.innerHTML="";
    let spanEl = document.createElement("span");
  spanEl.textContent= item.heading;
 let  paragraph = document.createElement("p");
  paragraph.textContent =item.description;
    
    let  button = document.createElement("div");
    button.className="explore-button";

    let  buttonLink = document.createElement("a");
    buttonLink.href="#";
    buttonLink.textContent=`Explore ${item.name}`;

    button.appendChild(buttonLink);
    mainDiv.append(spanEl,paragraph,button);
  });
  

    return mainDiv;
};
