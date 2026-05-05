const emailInput = document.getElementById("email");
const form = document.querySelector("form");
const errorMessage = document.getElementById("error-message");

if (emailInput && form && errorMessage) {
  form.addEventListener("submit", function (event) {
    if (!emailInput.checkValidity()) {
      event.preventDefault();
      if (
        emailInput.validity.valueMissing ||
        emailInput.validity.typeMismatch
      ) {
        errorMessage.textContent = "Oops! Please check your email";
      }
      errorMessage.classList.add("visible");
    } else {
      errorMessage.classList.remove("visible");
    }
  });

  emailInput.addEventListener("input", function () {
    if (emailInput.checkValidity()) {
      errorMessage.classList.remove("visible");
    }
  });
}
