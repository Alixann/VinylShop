const showAllBtn = document.querySelector(".bnt-show-all");
const sectionNewProducts = document.querySelector(".section-flex-new-products");

showAllBtn.addEventListener("click", () => {
  sectionNewProducts.classList.add("active");
  showAllBtn.classList.add("active");
});


