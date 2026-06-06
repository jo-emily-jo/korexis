/* ===================================================================
   Korexis — landing page interactions
   Vanilla JS, no dependencies. Two small jobs:
   1. Mobile navigation toggle.
   2. Close the mobile menu after an in-page anchor is tapped.
   (Smooth scrolling is handled natively via CSS `scroll-behavior`.)
   =================================================================== */

(function () {
  "use strict";

  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  if (!toggle || !mobileNav) return;

  // Open / close the mobile menu and keep aria-expanded in sync.
  function setMenu(open) {
    mobileNav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }

  toggle.addEventListener("click", function () {
    const isOpen = mobileNav.classList.contains("open");
    setMenu(!isOpen);
  });

  // Collapse the menu once a navigation link is chosen.
  mobileNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenu(false);
    });
  });

  // Collapse the menu if the viewport grows back to desktop width.
  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) setMenu(false);
  });
})();
