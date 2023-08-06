document.addEventListener("DOMContentLoaded", function () {
  var openModalBtn = document.querySelector("[data-modal-open]");
  var closeModalBtn = document.querySelector("[data-modal-close]");
  var modal = document.querySelector("[data-modal]");
  var modalForm = document.querySelector(".modal-form");
  var nameField = document.querySelector("#user-name");
  var phoneField = document.querySelector("#user-phone");
  var emailField = document.querySelector("#user-email");
  var commentField = document.querySelector("#user-comment");
  var checkbox = document.querySelector("#user-privacy");
  var sendButton = document.querySelector(".modal-form-button");

  openModalBtn.addEventListener("click", function () {
    toggleModal();
  });

  closeModalBtn.addEventListener("click", function () {
    toggleModal();
    resetForm();
  });

  modalForm.addEventListener("submit", function () {
    toggleModal();
    resetForm();
  });

  nameField.addEventListener("input", validateFields);
  phoneField.addEventListener("input", validateFields);
  emailField.addEventListener("input", validateFields);
  commentField.addEventListener("input", validateFields);
  checkbox.addEventListener("change", validateFields);

  function toggleModal() {
    modal.classList.toggle("is-hidden");
  }

  function resetForm() {
    modalForm.reset();
    sendButton.disabled = true;
  }

  function setErrorMessage(field, message) {
    if (message) {
      field.setCustomValidity(message);
    } else {
      field.setCustomValidity("");
      field.checkValidity();
    }
    field.reportValidity();
  }

  function validateFields(event) {
    var field = event.target;

    setErrorMessage(field, "");

    if (field === nameField && !nameField.validity.valid) {
      setErrorMessage(nameField, "Please enter a valid name. It should contain only letters.");
    } else if (field === phoneField && !phoneField.validity.valid) {
      setErrorMessage(phoneField, "Please enter a valid phone number. It should contain 10 to 15 digits.");
    } else if (field === emailField && !emailField.validity.valid) {
      setErrorMessage(emailField, "Please enter a valid email address.");
    } else if (field === commentField && commentField.value.trim() === "") {
      setErrorMessage(commentField, "Comment field cannot be empty.");
    } else if (field === checkbox && !checkbox.checked) {
      setErrorMessage(checkbox, "You must accept the terms and conditions.");
    }

    if (
      nameField.validity.valid &&
      phoneField.validity.valid &&
      emailField.validity.valid &&
      commentField.value.trim() !== "" &&
      checkbox.checked
    ) {
      sendButton.disabled = false;
    } else {
      sendButton.disabled = true;
    }
  }
});
