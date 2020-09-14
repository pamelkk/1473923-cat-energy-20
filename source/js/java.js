var buttonOpen = document.querySelector(".page-header__open-menu");
var menu = document.querySelector(".main-nav");
var buttonBefore = document.querySelector(".sample__button-before");
var buttonAfter = document.querySelector(".sample__button-after");
var photoBefore = document.querySelector(".sample__photo-before");
var photoAfter = document.querySelector(".sample__photo-after");
var form = document.querySelector(".selection__form");
var name = document.querySelector(".fs-name__field");
var contacts = document.querySelector(".fs-contacts__field");
var isStorageSupport = true;
var storage = "";

buttonOpen.addEventListener("click", function (evt) {
  console.log("Открыть меню!");
  if (!menu.classList.contains("main-nav-active")) {
    menu.classList.add("main-nav-active");
    buttonOpen.classList.add("close-menu");
  }
});

buttonBefore.addEventListener("click", function (evt) {
  if (!photoBefore.classList.contains("photo-active")) {
    photoBefore.classList.add("photo-active");
    photoAfter.classList.remove("photo-active");
  }
});

buttonAfter.addEventListener("click", function (evt) {
  if (!photoAfter.classList.contains("photo-active")) {
    photoAfter.classList.add("photo-active");
    photoBefore.classList.remove("photo-active");
  }
});
