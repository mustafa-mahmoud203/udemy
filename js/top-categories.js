export const showTopCategoriesCard = (allCategories) => {
  let TopCategories = document.querySelector(".top-categories");
  TopCategories.appendChild(TopCategoriesDiv(allCategories));
};

const TopCategoriesDiv = (allCategories) => {
  let mainDiv = document.createElement("div");
  mainDiv.className = "top-categories-maindiv";

  allCategories.forEach((val, index) => {
    mainDiv.appendChild(createContinerLink(val));
  });
  return mainDiv;
};

const createContinerLink = (Categories) => {
  let continerLink = document.createElement("a");
  continerLink.href = "#";
  continerLink.append(createImg(Categories), createSpanText(Categories));
  return continerLink;
};

const createImg = (Categories) => {
  let img = document.createElement("img");
  img.setAttribute("src", Categories.image);
  img.setAttribute("alt", Categories.name);
  return img;
};
const createSpanText = (Categories) => {
  let spanText = document.createElement("span");
  spanText.textContent = Categories.name;
  return spanText;
};

