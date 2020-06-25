var link=document.querySelector(".write-us");
var popup=document.querySelector(".connection");
var close=popup.querySelector(".close-button");
var form=popup.querySelector(".appointment-form");
var username=popup.querySelector(".appointment-name");
var useremail=popup.querySelector(".appointment-email");
var textarea=popup.querySelector(".appointment-comments");

var isStorageSupport=true;
var storage="";

try {
  storage = localStorage.getItem("username");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("connection-show");

  if (storage) {
    login.value = storage;
    useremail.focus();
  } else {
    username.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("connection-show");
  popup.classList.remove("connection-error");
});

form.addEventListener("submit", function (evt) {
  if (!username.value || !useremail.value || !textarea.value) {
    evt.preventDefault();
    popup.classList.remove("connection-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("connection-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("username", username.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("connection-show")) {
      evt.preventDefault();
      popup.classList.remove("connection-show");
      popup.classList.remove("connection-error");
    }
  }
});
