// script.js

// Handle Login Form Validation
document.getElementById("loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
  
    // Get values from login form
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
  
    // Dummy validation (Replace with real authentication logic if needed)
    if (email === "user@example.com" && password === "password123") {
      alert("Login successful! Redirecting to the welcome page...");
      window.location.href = "welcome.html";
    } else {
      alert("Invalid login credentials. Please try again.");
    }
  });
  
  // Handle Signup Form Validation
  document.getElementById("signupForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
  
    // Get values from signup form
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
  
    // Validate form inputs
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    // Show success message and redirect
    alert("Signup successful! Redirecting to the welcome page...");
    window.location.href = "welcome.html";
  });
  