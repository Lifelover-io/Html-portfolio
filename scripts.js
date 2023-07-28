// Smooth scroll effect when clicking on navigation links
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
      link.addEventListener("click", smoothScroll);
    });
  });
  
  function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 100; // Adjust the offset if you have a fixed header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;
  
      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }
  