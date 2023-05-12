import {
  showProfessionshandler,
  hideProfessionshandler,
  showProfessions,
} from "./professionsListVisibility";
import { professionSearchHandler } from "./searchByProfession";

export const professionsList = document.querySelector("#professions");
export const professionsInput = document.querySelector("#profession");

export const professionsData = [
  "IT-специалист",
  "Менеджер",
  "Маркетолог",
  "Бухгалтер",
  "PR-менеджер",
  "Юрист",
  "Педагог",
  "Риэлтор",
  "Архитектор",
  "Стилист",
  "Журналист",
];

// select profession
const professionsSelecthandler = (e) => {
  const clicked = e.target.closest(".professions__item");
  if (!clicked) return;
  professionsInput.value = clicked.textContent;
  hideProfessionshandler();
};

// Event Listeners
professionsInput.addEventListener("click", showProfessionshandler);
document.addEventListener("click", (e) => {
  if (!showProfessions || e.target.closest("#profession")) return;
  hideProfessionshandler();
});

professionsInput.addEventListener("input", professionSearchHandler);
professionsList.addEventListener("click", professionsSelecthandler);
