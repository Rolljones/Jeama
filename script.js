// ===============================
// MOBILE NAVIGATION
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("open");
});

// ===============================
// CATEGORY NAVIGATION
// ===============================

const navLinks = document.querySelectorAll(".nav-link");
const categorySections = document.querySelectorAll(".category-section");

const categoryTitle = document.getElementById("categoryTitle");
const productCount = document.getElementById("productCount");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    // Get selected category
    const category = link.dataset.category;

    // Remove active state from all navigation links
    navLinks.forEach(function (item) {
      item.classList.remove("active");
    });

    // Add active state to clicked link
    link.classList.add("active");

    // Hide every category
    categorySections.forEach(function (section) {
      section.classList.remove("active-section");
    });

    // Show selected category
    const selectedSection = document.getElementById(category);

    if (selectedSection) {
      selectedSection.classList.add("active-section");
    }

    // Update heading
    categoryTitle.textContent = link.textContent.trim();

    // Count products in selected category
    if (selectedSection) {
      const products = selectedSection.querySelectorAll(".product-card");

      productCount.textContent = `${products.length} Items`;
    }

    // Close mobile menu
    navMenu.classList.remove("open");
  });
});
