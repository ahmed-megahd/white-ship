const sectionAside = document.getElementById("section-aside");
const headerCtaToggle = document.getElementById("header-cta-toggle");
const headerCtaClose = document.getElementById("section-aside-close");
const overlay = document.createElement("div");

// const aboutSubBtn = document.getElementById("dropdown-btn--about");
// const aboutSub = document.getElementById("sub-menu-about");

const servicesSubBtn = document.getElementById("dropdown-btn--services");
const servicesSub = document.getElementById("sub-menu-services");

const termsSubBtn = document.getElementById("dropdown-btn--terms");
const termsSub = document.getElementById("sub-menu-terms");

overlay.classList.add("overlay");
document.body.appendChild(overlay);

// aboutSubBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   aboutSub.classList.toggle("mobile-menu_sub-active");
// });

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
  // sectionAside.classList.toggle("section-aside-close");
  sectionAside.classList.remove("section-aside-open");
  // overlay.style.display = "none";
});

//Slider Functionality Start
let slideIndex = 1;
let slideIndexService = 1;
showSlides(slideIndex, "slideshow-slide", "dot");
// showSlides(slideIndexService, "slideshow-slide-service", "dot-service");

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n), "slideshow-slide", "dot");
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n), "slideshow-slide", "dot");
}

// Automatic slide change every 2 seconds
setInterval(function () {
  plusSlides(1); // Move to the next slide every 2 seconds
}, 4000);

function showSlides(n, slideClassName, dotClassName) {
  let i;
  let slides = document.getElementsByClassName(slideClassName);
  let dots = document.getElementsByClassName(dotClassName);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active-dot";
}

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   // direction: horizontal,
//   // loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
