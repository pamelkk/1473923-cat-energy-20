var buttonClose = document.querySelector(".page-header__close-menu");
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

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

buttonOpen.addEventListener("click", function (evt) {
  console.log("Открыть меню!");
  if (!menu.classList.contains("main-nav-active")) {
    menu.classList.add("main-nav-active");
    buttonOpen.classList.add("menu-active");
    buttonClose.classList.remove("menu-active");
  }
});

buttonClose.addEventListener("click", function (evt) {
  console.log("Закрыть меню!");
  if (!menu.classList.contains("main-nav-active")) {
    menu.classList.remove("main-nav-active");
    buttonClose.classList.add("menu-active");
    buttonOpen.classList.remove("menu-active");
  }
});

buttonBefore.addEventListener("click", function (evt) {
  console.log("Покажите до!");
  if (!photoBefore.classList.contains("photo-active")) {
    photoBefore.classList.add("photo-active");
    photoAfter.classList.remove("photo-active");
  }
});

buttonAfter.addEventListener("click", function (evt) {
  console.log("Покажите после!");
  if (!photoAfter.classList.contains("photo-active")) {
    photoAfter.classList.add("photo-active");
    photoBefore.classList.remove("photo-active");
  }
});

form.addEventListener("submit", function (evt) {
  if (!inputEmail.value || !inputTel.value) {
    console.log("Не заполнены данные");
    evt.preventDefault();
    contacts.classList.remove("contacts__field-error");
    contacts.offsetWidth = popup.offsetWidth;
    contacts.classList.add("contacts__field-error");
  }
});

form.addEventListener("submit", function (evt) {
  if (!inputName.value || !inputWeight.value) {
    console.log("Не заполнены данные");
    evt.preventDefault();
    name.classList.remove("name__field-error");
    name.offsetWidth = popup.offsetWidth;
    name.classList.add("name__field-error");
  }
});
