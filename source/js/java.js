var buttonClose = document.querySelector(".page-header__close-menu");
var buttonOpen = document.querySelector(".page-header__open-menu");

buttonClose.addEventListener("click", function (evt) {
  console.log("Клик!");
  if (!buttonClose.classList.contains("menu-active")) {
    buttonOpen.classList.remove("menu-active");
    buttonOpen.classList.add("menu-inactive");
  } else {
    buttonClose.classList.add("menu-active");
  }
});

buttonOpen.addEventListener("click", function (evt) {
  console.log("Клик!");
  if (!buttonOpen.classList.contains("menu-active")) {
    buttonClose.classList.remove("menu-active");
    buttonClose.classList.add("menu-inactive");
  } else {
    buttonOpen.classList.add("menu-active");
  }
});
