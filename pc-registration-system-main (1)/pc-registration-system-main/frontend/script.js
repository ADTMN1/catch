document.addEventListener("DOMContentLoaded", function () {
  // Login form handling (only if it exists)
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); 

      const usernameField = document.getElementById("username");
      const passwordField = document.getElementById("password");
      const errorMessage = document.getElementById("error-message");

      const usernameInput = usernameField.value.trim();
      const passwordInput = passwordField.value;

      const correctUsername = "admin";
      const correctPassword = "1234";

      usernameField.value = passwordField.value = '';

      if (usernameInput === correctUsername && passwordInput === correctPassword) {
        window.location.href = "admin-dashboard.html";
      } else {
        errorMessage.textContent = "Incorrect username or password.";
      }
    });
  }

  // Sign out button
  const signOutBtn = document.querySelector(".sign-out-btn");
  if (signOutBtn) {
    signOutBtn.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }

  // Register button
  const regBtn = document.querySelector(".registor-btn");
  if (regBtn) {
    regBtn.addEventListener("click", function () {
      window.location.href = "registor.html";
    });
  }
});

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;

    // Remove 'active' class from all tab contents
    tabContents.forEach(content => content.classList.remove('active'));

    // Add 'active' to the selected tab
    document.querySelector(`.tab-content--${tab}`).classList.add('active');
  });
});

// Get the cancel button and input fields
const cancelButton = document.querySelector('.cancel-btn');
const submitButton=document.querySelector('.submit-btn');
const inputFields = document.querySelectorAll('.pc-details-info input');


// Add event listener for the cancel button
cancelButton.addEventListener('click', (event) => {
event.preventDefault();

inputFields.forEach(input => {
  input.value = '';
});
});
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
    
    inputFields.forEach(input => {
      input.value = '';
    });
  });