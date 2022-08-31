export const createCoursesDescription = () => {
  let mainDiv = document.querySelector(".description-course-content");
  let spanEl = document.createElement("span");
  spanEl.textContent= "Expand your career opportunities with Python";
 let  paragraph = document.createElement("p");
  paragraph.textContent =
    "Take one of Udemy's range of Python courses and learn how to codeusing this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You'll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...";

    let  button = document.createElement("div");
    button.className="explore-button";

    let  buttonLink = document.createElement("a");
    buttonLink.href="#";
    buttonLink.textContent="Explore Python";

    button.appendChild(buttonLink);
    mainDiv.append(spanEl,paragraph,button);

    return mainDiv;
};
