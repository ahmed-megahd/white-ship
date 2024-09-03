const sectionAside = document.getElementById("section-aside");
const headerCtaToggle = document.getElementById("header-cta-toggle");
const headerCtaClose = document.getElementById("section-aside-close");

const servicesSubBtn = document.getElementById("dropdown-btn--services");
const servicesSub = document.getElementById("sub-menu-services");

const termsSubBtn = document.getElementById("dropdown-btn--terms");
const termsSub = document.getElementById("sub-menu-terms");

servicesSubBtn.addEventListener("click", (e) => {
  e.preventDefault();
  servicesSub.classList.toggle("mobile-menu_sub-active");
});

termsSubBtn.addEventListener("click", (e) => {
  e.preventDefault();
  termsSub.classList.toggle("mobile-menu_sub-active");
});

headerCtaToggle.addEventListener("click", () => {
  sectionAside.classList.add("section-aside-open");
});

headerCtaClose.addEventListener("click", () => {
  sectionAside.classList.remove("section-aside-open");
});
