// Menu toggle functionality
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

// Close menu when menu link is clicked
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Custom cursor
const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

document.addEventListener("mousedown", () => {
  cursor.style.width = "15px";
  cursor.style.height = "15px";
});

document.addEventListener("mouseup", () => {
  cursor.style.width = "20px";
  cursor.style.height = "20px";
});

// Hover effect for interactive elements
const interactiveElements = document.querySelectorAll(
  "a, button, .project-item, .social-icon"
);

interactiveElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursor.style.width = "40px";
    cursor.style.height = "40px";
  });

  element.addEventListener("mouseleave", () => {
    cursor.style.width = "20px";
    cursor.style.height = "20px";
  });
});

// Parallax effect for featured project
const featuredProject = document.querySelector(".featured-project");
const featuredImage = featuredProject.querySelector("img");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  if (featuredImage) {
    featuredImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
  }
});

// Touch device detection
function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

// Hide custom cursor on touch devices
if (isTouchDevice()) {
  cursor.style.display = "none";
}
