import { professionsInput, professionsList } from "./professions";

export const professionSearchHandler = () => {
  const value = professionsInput.value.trim().toLowerCase();
  const professions = Array.from(
    document.querySelectorAll(".professions__item"),
  );

  if (value !== "") {
    professions.forEach((profession) => {
      if (profession.textContent.toLowerCase().search(value) === -1) {
        profession
          .closest(".professions__item")
          .classList.add("professions__item-hide");
        profession.innerHTML = profession.textContent;
      } else {
        profession
          .closest(".professions__item")
          .classList.remove("professions__item-hide");
        let str = profession.textContent;
        profession.innerHTML = professionsSearchHighlight(
          str,
          profession.textContent.toLowerCase().search(value),
          value.length,
        );
      }
    });
  } else {
    professions.forEach((profession) => {
      profession
        .closest(".professions__item")
        .classList.remove("professions__item-hide");
      profession.innerHTML = profession.textContent;
    });
  }

  const isListEmpty = professions.every((profession) =>
    profession.classList.contains("professions__item-hide"),
  );
  const emptyListMarkup = `<li class="professions__item--empty">Не найдено подходящей профессии</li>`;
  const emptyListElement = document.querySelector(".professions__item--empty");

  if (isListEmpty && !emptyListElement) {
    professionsList.insertAdjacentHTML("afterbegin", emptyListMarkup);
  }

  if (emptyListElement && !isListEmpty) {
    document.querySelector(".professions__item--empty").remove();
  }
};

export const professionsSearchHighlight = (string, position, length) => {
  return (
    string.slice(0, position) +
    "<b>" +
    string.slice(position, position + length) +
    "</b>" +
    string.slice(position + length)
  );
};