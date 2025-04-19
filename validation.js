"use strict";

// progressive validation;
export const valEvents = ["input", "focus"];
export const validateInput = function validateFormInputFieldForUserInt(input) {
  if (input.type === "text") {
    if (!input.value || input.value.length < 1) {
      input.classList.add("invalid");
    } else if (input.value && input.value.length >= 1) {
      input.classList.remove("invalid");
    }
  } else if (input.type === "number") {
    if (!input.value.length) {
      input.classList.add("invalid");
    } else if (input.value.length > 0) {
      input.classList.remove("invalid");
    }
  }
};

export const validateForm = function validateFormFieldsOnSubmitAttempt(form) {
  const inputArray = [...form.querySelectorAll("input")];
  return inputArray.reduce(
    (errors, input) => {
      validateInput(input);
      if (!input.value || !input.value.length) {
        errors.inputErrors.push(input.id);
      }
      return errors;
    },
    { inputErrors: [] }
  );
};
