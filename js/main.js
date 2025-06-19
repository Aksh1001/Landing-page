document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.querySelector(".hero__scroll-btn");
  if (scrollBtn) {
    scrollBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector("#scroll-down");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  const orderBtn = document.querySelector('a.btn.btn-outline-light');
  if (orderBtn) {
    orderBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "./contact/index.html";
    });
  }
});