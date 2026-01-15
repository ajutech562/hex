/* =========================
   SCROLL TO TOP BUTTON
========================= */
const topBtn = document.getElementById("topBtn");

function handleScrollTopBtn() {
  if (!topBtn) return;

  const visible = window.scrollY > 300;
  topBtn.style.opacity = visible ? "1" : "0";
  topBtn.style.pointerEvents = visible ? "auto" : "none";
}

window.addEventListener("scroll", handleScrollTopBtn, { passive: true });

topBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =========================
   REVEAL ON SCROLL (SMOOTH)
========================= */
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(el => {
    if (el.classList.contains("active")) return;

    if (el.getBoundingClientRect().top < window.innerHeight - 60) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll, { passive: true });
window.addEventListener("load", revealOnScroll);

/* =========================
   GALLERY SLIDER (SMOOTH)
========================= */
const slides = document.querySelectorAll(".gallery-slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function updateSlider(index) {
  slides.forEach((slide, i) =>
    slide.classList.toggle("active", i === index)
  );

  dots.forEach((dot, i) =>
    dot.classList.toggle("active", i === index)
  );
}

// Initial state
if (slides.length) updateSlider(currentSlide);

// Auto play
setInterval(() => {
  if (!slides.length) return;

  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider(currentSlide);
}, 3500);
