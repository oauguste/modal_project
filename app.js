const modalOpen = document.querySelector(".modal-btn");
const modalClose = document.querySelector(".close-btn");
const overlay = document.querySelector(".modal-overlay");

modalOpen.addEventListener("click", function () {
  overlay.classList.toggle("open-modal");
});

modalClose.addEventListener("click", function () {
  overlay.classList.remove("open-modal");
});
