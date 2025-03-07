// script.js
document.addEventListener("DOMContentLoaded", function() {
  console.log("Website loaded successfully.");

  // Log navigation link clicks (for potential future enhancements)
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      console.log(`Navigating to ${this.getAttribute("href")}`);
    });
  });
});
