const brightNess = document.querySelector(".uil-brightness-low");
const body = document.querySelector("body");

brightNess.addEventListener("click", function () {
  body.style.backgroundColor = "#d53c42";
  navHeader.style.backgroundColor = "#d53c42";
});

const navLeft = document.querySelector(".ulNavContainerLeft");
const togle = document.querySelector(".uil-bars");
const navHeader = document.querySelector(".nav--header");
const imgLogo = document.querySelector(".imageLogo");
const header = document.querySelector("header");
const forum = document.querySelector(".forum");
const blog = document.querySelector(".blog");
const search = document.querySelector(".uil-search");
const times = document.querySelector(".uil-times");
const navRight = document.querySelector(".ulNavContainerRight");
const rli = document.querySelector(".rli");
togle.addEventListener("click", function () {
  navLeft.style.flexDirection = "column";

  navLeft.style.borderRadius = "5px";
  navHeader.style.height = "300px";
  navHeader.style.borderBottom = "none";
  navLeft.style.marginTop = "120px";
  navLeft.style.marginLeft = "120px";
  imgLogo.style.visibility = "hidden ";
  forum.style.visibility = "visible";
  forum.style.display = "flex";
  blog.style.visibility = "visible";
  blog.style.display = "flex";
  search.style.display = "none";
  togle.style.visibility = "hidden";
  togle.style.display = "none";
  times.style.display = "flex";
  navRight.style.padding = "30px 0px 0 40px";
});

times.addEventListener("click", function () {
  navLeft.style.flexDirection = "row";
  navLeft.style.borderRadius = "0";
  navHeader.style.height = "80px";
  navHeader.style.borderBottom = "1px solid gray";
  navLeft.style.margin = "0 auto";
  imgLogo.style.visibility = "visible ";
  forum.style.display = "none";
  blog.style.display = "none";
  search.style.display = "flex";
  togle.style.visibility = "visible";
  togle.style.display = "flex";
  times.style.display = "none";
  navRight.style.padding = "30px 10px 0 60px";

});
