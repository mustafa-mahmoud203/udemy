export const createCarousel = (course) => {
  let mainDivCarouser = document.createElement("div");
  mainDivCarouser.className = "row";

  let carouselSlide = document.createElement("div");
  carouselSlide.classList = "carousel slide";
  carouselSlide.id = course.name;
  carouselSlide.setAttribute("data-bs-ride", carousel);

  const prev = carouselBtn("prev", course.name);

  const next = carouselBtn("next", course.name);

  carouselSlide.append(prev, next);
  mainDivCarouser.appendChild(carouselSlide);

  return carouselSlide;
};

export const createInner = () => {
  let carouselInner = document.createElement("div");
  carouselInner.className = "carousel-inner";
  return carouselInner;
};

export const createItem = () => {
  const carouselItem = document.createElement("div");
  carouselItem.classList = "carousel-item";
  return carouselItem;
};

export const carouselBtn = (val, id) => {
  let ControlBtn = document.createElement("button");
  ControlBtn.className = `carousel-control-${val}`;
  ControlBtn.type = "button";
  ControlBtn.setAttribute("data-bs-target", `#${id}`);
  ControlBtn.setAttribute("data-bs-slide", val);

  let ControlBtnIcon = document.createElement("span");
  ControlBtnIcon.className = `carousel-control-${val}-icon`;
  ControlBtnIcon.setAttribute("aria-hidden", true);
  let ControlBtnIconVisuallyHidden = document.createElement("span");
  ControlBtnIconVisuallyHidden.className = "visually-hidden";
  ControlBtnIconVisuallyHidden.textContent = val;

  ControlBtn.append(ControlBtnIcon, ControlBtnIconVisuallyHidden);
  return ControlBtn;
};
