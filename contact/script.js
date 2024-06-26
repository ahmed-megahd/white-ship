const sectionAside = document.getElementById("section-aside");
const headerCtaToggle = document.getElementById("header-cta-toggle");
const headerCtaClose = document.getElementById("section-aside-close");

const aboutSubBtn = document.getElementById("dropdown-btn--about");
const aboutSub = document.getElementById("sub-menu-about");

const servicesSubBtn = document.getElementById("dropdown-btn--services");
const servicesSub = document.getElementById("sub-menu-services");

aboutSubBtn.addEventListener("click", (e) => {
  e.preventDefault();
  aboutSub.classList.toggle("mobile-menu_sub-active");
});

servicesSubBtn.addEventListener("click", (e) => {
  e.preventDefault();
  servicesSub.classList.toggle("mobile-menu_sub-active");
});

headerCtaToggle.addEventListener("click", () => {
  sectionAside.classList.add("section-aside-open");
});

headerCtaClose.addEventListener("click", () => {
  sectionAside.classList.remove("section-aside-open");
});
