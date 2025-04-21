document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form from submitting
  
      const username = form.querySelector("input[type='text']").value;
      const password = form.querySelector("input[type='password']").value;
  
      if (username && password) {
        alert("Login successful!"); // You can replace this with actual logic
      } else {
        alert("Please enter both username and password.");
      }
    });
  });
  