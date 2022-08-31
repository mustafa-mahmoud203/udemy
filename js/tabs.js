const createTapEl = (tabs) => {
  // let tap = document.createElement("a");
  let tap = document.createElement("button");
  let tapId = `${tabs.name.toLowerCase()}`;
  tapId.replace(" ", "-");

  tap.classList = "nav-link";
tap.type="button";
  // tap.setAttribute("href", "");
  // tap.setAttribute("data-bs-toggle", "tab");
  // tap.setAttribute("data-bs-target", `#${tapId}`);
  tap.textContent = tabs.name;

  return tap;
};

export let createNavTaps = (tabs) => {
  let nav = document.querySelector(".nav");

  for (let i = 0; i < tabs.length; i++) {
    nav.appendChild(createTapEl(tabs[i]));
  }

  return nav;
};
