const sectionAside = document.getElementById("section-aside");
const headerCtaToggle = document.getElementById("header-cta-toggle");
const headerCtaClose = document.getElementById("section-aside-close");
const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

headerCtaToggle.addEventListener("click", () => {
  sectionAside.classList.add("active");
  overlay.style.display = "block";
});

headerCtaClose.addEventListener("click", () => {
  sectionAside.classList.remove("active");
  overlay.style.display = "none";
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
}, 3000);

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
