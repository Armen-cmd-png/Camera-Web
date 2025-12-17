const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav-menu");
const navClose = document.querySelector(".nav-close");
const navLinks = document.querySelectorAll(".nav-menu a");
const body = document.body;

function openMenu() {
  navMenu.classList.add("active");
  burgerMenu.classList.add("active");
  body.style.overflow = "hidden";
}

function closeMenu() {
  navMenu.classList.remove("active");
  burgerMenu.classList.remove("active");
  body.style.overflow = "";
}

burgerMenu.addEventListener("click", openMenu);
navClose.addEventListener("click", closeMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("click", function (event) {
  if (
    !navMenu.contains(event.target) &&
    !burgerMenu.contains(event.target) &&
    navMenu.classList.contains("active")
  ) {
    closeMenu();
  }
});

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    const answer = button.nextElementSibling;

    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== faqItem) {
        item.querySelector(".faq-answer").classList.remove("active");
        item.querySelector(".faq-question").classList.remove("active");
      }
    });
    button.classList.toggle("active");
    answer.classList.toggle("active");
  });
});

document
  .getElementById("contactForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Спасибо! Ваша заявка отпралена.");
    this.reset();
  });
