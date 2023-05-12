import { professionsData, professionsList } from "./professions";

export let showProfessions = false;

export const showProfessionshandler = () => {
  const markup = professionsData
    .map((profession) => `<li class="professions__item">${profession}</li>`)
    .join("");
  professionsList.classList.remove("hidden");
  professionsList.insertAdjacentHTML("afterbegin", markup);
  showProfessions = true;
};

export const hideProfessionshandler = () => {
  professionsList.classList.add("hidden");
  professionsList.innerHTML = "";
  showProfessions = false;
};
