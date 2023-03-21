const selectors = {
  brightnessButton: ".uil-brightness-low",
  body: "body",
  toggleButton: ".uil-bars",
  navHeader: ".nav--header",
  logo: ".imageLogo",
  forumButton: ".forum",
  blogButton: ".blog",
  searchButton: ".uil-search",
  closeButton: ".uil-times",
  leftNav: ".ulNavContainerLeft",
  rightNav: ".ulNavContainerRight",
};

const elements = {};
for (const key in selectors) {
  // eslint-disable-next-line no-undef
  elements[key] = document.querySelector(selectors[key]);
}

elements.brightnessButton.addEventListener("click", function () {
  elements.body.style.backgroundColor = "#d53c42";
  elements.navHeader.style.backgroundColor = "#d53c42";
});

elements.toggleButton.addEventListener("click", function () {
  elements.leftNav.style.flexDirection = "column";
  elements.leftNav.style.borderRadius = "5px";
  elements.navHeader.style.height = "300px";
  elements.navHeader.style.borderBottom = "none";
  elements.leftNav.style.margin = "120px 0 0 120px";
  elements.logo.style.visibility = "hidden";
  elements.forumButton.style.visibility = "visible";
  elements.forumButton.style.display = "flex";
  elements.blogButton.style.visibility = "visible";
  elements.blogButton.style.display = "flex";
  elements.searchButton.style.display = "none";
  elements.toggleButton.style.display = "none";
  elements.closeButton.style.display = "flex";
  elements.rightNav.style.padding = "30px 0 0 40px";
});

elements.closeButton.addEventListener("click", function () {
  elements.leftNav.style.flexDirection = "row";
  elements.leftNav.style.borderRadius = "0";
  elements.navHeader.style.height = "80px";
  elements.navHeader.style.borderBottom = "1px solid gray";
  elements.leftNav.style.margin = "0 auto";
  elements.logo.style.visibility = "visible";
  elements.forumButton.style.display = "none";
  elements.blogButton.style.display = "none";
  elements.searchButton.style.display = "flex";
  elements.toggleButton.style.display = "flex";
  elements.closeButton.style.display = "none";
  elements.rightNav.style.padding = "30px 10px 0 60px";
});
