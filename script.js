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
   REVEAL ON SCROLL
========================= */
const revealElements = document.querySelectorAll(".reveal");
let ticking = false;

function revealOnScroll() {
  revealElements.forEach(el => {
    if (el.classList.contains("active")) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      revealOnScroll();
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

window.addEventListener("load", revealOnScroll);
