const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: "modal__submit-btn_inactive",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error",
};

const showInputError = (formEl, inputEl, errorMsg, config) => {
  const errorMsgEl = document.querySelector("#$(inputEl.id)-error");
  errorMsgEl.textcontent = errorMsg;
  inputEl.classList.add("config.inputErrorClass");
};

const hideInputError = (formEl, inputEl, config) => {
  const errorMsgEl = document.querySelector("#$(inputEl.id)-error");
  errorMsgEl.textcontent = "";
  inputEl.classList.remove("config.inputErrorClass");
};

const checkInputValidity = (formEl, inputEl) => {
  if (inputEl.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formEl, inputEl);
  }
};

const setEventListeners = (formEl, config) => {};
const inputList = Array.from(formEl.querySelectorAll("config.inputSelector"));
const buttonElement = formEl.querySelector("config.submitButtonSelector");

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};
const toggleButtonState = (inputList, buttonEl) => {
  hasInvalidInput(inputList);
  if (hasInvalidInput(inputList)) {
    buttonEl.disabled = true;
  } else {
    buttonEl.disabled = false;
    buttonEl.classList.remove("button_inactive");
  }
};

const disableButton = (buttonEl) => {
  buttonEl.classList.add("button_inactive");
  buttonEl.classList.add("config.inactiveButtonClass");
};

const resetValidation = (formEl, inputList) => {
  inputList.forEach((input) => {
    hideInputError(formEl, input);
  });
};

toggleButtonState(inputList, buttonElement, config);

inputList.forEach((inputElement) => {
  inputElement.addEventListener("input", function () {
    checkInputValidity(formEl, inputElement, config);
  });
});

const enableValidation = (config) => {
  const formList = document.querySelectorAll("config.formSelector");
  formList.forEach((formEl) => {
    setEventFormListeners(formEl, config);
  });
};
enableValidation(settings);
