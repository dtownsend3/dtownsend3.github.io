document.addEventListener("DOMContentLoaded", () => {
  // Find all sections marked as collapsible
  const sections = document.querySelectorAll(".collapsible");

  sections.forEach((section) => {
    const button = section.querySelector(".toggle-btn");
    const content = section.querySelector(".content");

    button.addEventListener("click", () => {
      // Toggle the hidden class on the content div
      content.classList.toggle("hidden");

      // Change the button text based on state
      if (content.classList.contains("hidden")) {
        button.textContent = "+";
      } else {
        button.textContent = "-";
      }
    });
  });
});