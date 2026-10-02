document.addEventListener("DOMContentLoaded", function () {
  // ==============================
  // Mobile Navigation
  // ==============================
  var menu = document.querySelector(".menu");
  var nav = document.getElementById("nav");

  if (menu && nav) {
    menu.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");

      menu.setAttribute("aria-expanded", String(isOpen));
      menu.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );
    });

    // Close the menu after clicking a navigation link.
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        menu.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-label", "Open navigation menu");
      });
    });
  }

  // ==============================
  // Current Page Navigation
  // ==============================
  var currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("nav a").forEach(function (link) {
    var href = link.getAttribute("href");

    if (href === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });

  // ==============================
  // Footer Year
  // ==============================
  var year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // ==============================
  // Project Filters
  // ==============================
  var filterButtons = document.querySelectorAll(".filters button");
  var projects = document.querySelectorAll(".project[data-cat]");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.dataset.f;

      // Update active filter button.
      filterButtons.forEach(function (item) {
        var isActive = item === button;

        item.classList.toggle("on", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      // Show/hide projects based on category.
      projects.forEach(function (project) {
        var category = project.dataset.cat;

        project.hidden =
          filter !== "all" && category !== filter;
      });
    });
  });
});