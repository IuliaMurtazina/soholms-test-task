export const phoneMask = (country, e) => {
  if (country === "Russia") {
    phoneMaskRussia.call(null, e);
  } else if (country === "Italy") {
    phoneMaskItaly.call(null, e);
  } else if (country === "Germany") {
    phoneMaskGermany.call(null, e);
  } else if (country === "Latvia") {
    phoneMaskLatvia.call(null, e);
  } else if (country === "Pakistan") {
    phoneMaskPakistan.call(null, e);
  } else return;
};

const phoneMaskRussia = (e) => {
  const value = e.target.value.replace(/\D+/g, "");
  const numberLength = 11;

  let result = "+7 (";

  for (let i = 0; i < value.length && i < numberLength; i++) {
    switch (i) {
      case 0:
        continue;
      case 4:
        result += ") ";
        break;
      case 7:
        result += "-";
        break;
      case 9:
        result += "-";
        break;
      default:
        break;
    }
    result += value[i];
  }

  e.target.value = result;
};

const phoneMaskItaly = (e) => {
  const value = e.target.value.replace(/\D+/g, "");
  const numberLength = 12;

  let result = "+39 (";

  for (let i = 0; i < value.length && i < numberLength; i++) {
    switch (i) {
      case 0:
      case 1:
        continue;
      case 5:
        result += ") ";
        break;
      case 8:
        result += "-";
        break;
      default:
        break;
    }
    result += value[i];
  }

  e.target.value = result;
};

const phoneMaskGermany = (e) => {
  const value = e.target.value.replace(/\D+/g, "");
  const numberLength = 13;

  let result = "+49 (";

  for (let i = 0; i < value.length && i < numberLength; i++) {
    switch (i) {
      case 0:
      case 1:
        continue;
      case 5:
        result += ") ";
        break;
      case 8:
        result += "-";
        break;
      default:
        break;
    }
    result += value[i];
  }
  e.target.value = result;
};

const phoneMaskLatvia = (e) => {
  const value = e.target.value.replace(/\D+/g, "");
  const numberLength = 11;

  let result = "+371 (";

  for (let i = 0; i < value.length && i < numberLength; i++) {
    switch (i) {
      case 0:
      case 1:
      case 2:
        continue;
      case 6:
        result += ") ";
        break;
      case 9:
        result += "-";
        break;
      default:
        break;
    }
    result += value[i];
  }
  e.target.value = result;
};

const phoneMaskPakistan = (e) => {
  const value = e.target.value.replace(/\D+/g, "");
  const numberLength = 12;

  let result = "+92 (";

  for (let i = 0; i < value.length && i < numberLength; i++) {
    switch (i) {
      case 0:
      case 1:
        continue;
      case 5:
        result += ") ";
        break;
      case 8:
        result += "-";
        break;
      default:
        break;
    }
    result += value[i];
  }
  e.target.value = result;
};
