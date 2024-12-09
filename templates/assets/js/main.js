// Highlight active link
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("text-blue-400");
    }
  });
});

function toggleMenu() {
  const mobileNav = document.getElementById("mobile-nav");
  const hamburger = document.querySelector(".hamburger");
  mobileNav.classList.toggle("open");
  hamburger.classList.toggle("open");
}
