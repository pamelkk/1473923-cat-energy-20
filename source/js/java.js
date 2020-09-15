var buttonOpen = document.querySelector(".page-header__menu");
var menu = document.querySelector(".main-nav");
var buttonBefore = document.querySelector(".sample__button-before");
var buttonAfter = document.querySelector(".sample__button-after");
var photoBefore = document.querySelector(".sample__photo-before");
var photoAfter = document.querySelector(".sample__photo-after");
var form = document.querySelector(".selection__form");
var name = document.querySelector(".fs-name__field");
var contacts = document.querySelector(".fs-contacts__field");
var inputElements = document.querySelectorAll("input");
var isStorageSupport = true;
var storage = "";

menu.classList.add("main-nav-inactive");
buttonOpen.classList.add("closed-menu");

buttonOpen.addEventListener("click", function (evt) {
  console.log("Открыть меню!");
  if (!menu.classList.contains("main-nav-inactive")) {
    menu.classList.add("main-nav-inactive");
    buttonOpen.classList.add("closed-menu");
  } else {
    menu.classList.remove("main-nav-inactive");
    buttonOpen.classList.remove("closed-menu");
  }
});

[].forEach.call(inputElements, function (item) {
  item.addEventListener('focus', function(){
    item.classList.toggle('fs-active', true);
  });
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
