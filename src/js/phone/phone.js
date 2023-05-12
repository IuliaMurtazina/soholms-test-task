import { phoneMask } from "./phoneMasks";

const countryList = document.querySelector(".country-list");
const countryButton = document.querySelector(".country-btn");
const countryFlag = document.querySelector(".country-flag");
export const selectedCountry = document.querySelector(".country-flag");
export const phoneInput = document.querySelector("#phone");

export const countryData = [
  { country: "Russia", code: "+7", flag: require(`../../img/russia.jpg`) },
  { country: "Italy", code: "+39", flag: require(`../../img/italy.jpg`) },
  { country: "Germany", code: "+49", flag: require(`../../img/germany.jpg`) },
  { country: "Latvia", code: "+371", flag: require(`../../img/latvia.jpg`) },
  { country: "Pakistan", code: "+92", flag: require(`../../img/pakistan.jpg`) },
];

const defaultCountry = () => {
  countryFlag.dataset.country = countryData[0].country;
  countryFlag.dataset.code = countryData[0].code;
  countryFlag.src = countryData[0].flag;
  phoneInput.value = countryData[0].code;
};
defaultCountry();

let selectedCountryValue = selectedCountry.dataset.country;
let showCountries = false;

const showCountriesHandler = () => {
  const markup = countryData
    .map((countryItem) => {
      return `<li class="country-list__item" data-country=${countryItem.country}><img class="country-flag-select" src=${countryItem.flag} /><span class="country-name">${countryItem.country}</span><span class="country-code">(${countryItem.code})</span></li>
      `;
    })
    .join("");
  countryList.innerHTML = "";
  countryList.classList.remove("hidden");
  countryList.insertAdjacentHTML("afterbegin", markup);
  showCountries = true;
};

const hideCountriesHandler = () => {
  countryList.classList.add("hidden");
  countryList.innerHTML = "";
  showCountries = false;
};

const countriesSelecthandler = (e) => {
  const clicked = e.target.closest(".country-list__item");
  if (!clicked) return;

  const selectedCountryFromData = countryData.find(
    (country) => country.country === clicked.dataset.country,
  );
  countryFlag.src = selectedCountryFromData.flag;
  countryFlag.dataset.country = selectedCountryFromData.country;
  countryFlag.dataset.code = selectedCountryFromData.code;
  phoneInput.value = selectedCountryFromData.code;
  selectedCountryValue = selectedCountry.dataset.country;

  hideCountriesHandler();
};

countryButton.addEventListener("click", () => {
  showCountries === true ? hideCountriesHandler() : showCountriesHandler();
});
document.addEventListener("click", (e) => {
  if (e.target.closest(".country-list") || e.target.closest(".country-btn"))
    return;
  hideCountriesHandler();
});
countryList.addEventListener("click", countriesSelecthandler);
phoneInput.addEventListener("input", (e) => {
  phoneMask.call(null, selectedCountryValue, e);
});
