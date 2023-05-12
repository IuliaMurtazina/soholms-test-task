import { selectedCountry } from "../phone/phone";

const form = document.querySelector(".form");
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const professionInput = document.querySelector("#profession");
const phoneInput = document.querySelector("#phone");

const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");
const popupText = document.querySelector(".popup__text");
const popupClose = document.querySelector(".popup__сlose");

const inputs = [nameInput, surnameInput, professionInput, phoneInput];

const showPopup = (message) => {
  overlay.classList.remove("hidden");
  popup.classList.remove("hidden");
  popupText.textContent = message;
};

const closePopup = () => {
  overlay.classList.add("hidden");
  popup.classList.add("hidden");
};

const submitFormHandler = (e) => {
  e.preventDefault();
  const emptyInputs = inputs.some((input) => input.value.trim() === "");
  if (emptyInputs) {
    showPopup("Заполните все поля.");
    return;
  }

  inputs.forEach((input) => (input.value = ""));
  phoneInput.value = selectedCountry.dataset.code;

  showPopup("Вы успешно зарегистрированы!");
};

form.addEventListener("submit", submitFormHandler);
overlay.addEventListener("click", closePopup);
popupClose.addEventListener("click", closePopup);
