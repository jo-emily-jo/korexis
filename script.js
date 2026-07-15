/* ===================================================================
   Korexis — landing page interactions
   Vanilla JS, no dependencies. Small jobs:
   1. EN / KO language toggle (persisted, mobile-friendly).
   2. Mobile navigation toggle.
   3. Close the mobile menu after an in-page anchor is tapped.
   (Smooth scrolling is handled natively via CSS `scroll-behavior`.)
   Initial language is set inline in <head> to avoid a flash of the
   wrong language. This file keeps the toggle in sync on click.
   =================================================================== */

(function () {
  "use strict";

  /* --- Language toggle ------------------------------------------- */
  const LANG_KEY = "korexis-lang";
  const langButtons = document.querySelectorAll(".lang-btn");

  // Per-language <title> and meta description (attributes cannot be dual-block).
  const META = {
    en: {
      title: "Korexis — Korea ↔ Australia Clean Energy Bridge",
      desc: "Korexis helps Korean clean energy companies enter the Australian market, and works with Australian developers, integrators, and advisers."
    },
    ko: {
      title: "Korexis — 한국 ↔ 호주 클린에너지 브릿지",
      desc: "Korexis는 한국 클린에너지 기업의 호주 시장 진출을 현지에서 돕고, 호주 개발사·인테그레이터·어드바이저와 협력합니다."
    }
  };

  function applyLang(lang) {
    if (lang !== "en" && lang !== "ko") lang = "en";
    const root = document.documentElement;
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);

    const meta = META[lang];
    document.title = meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", meta.desc);

    langButtons.forEach(function (btn) {
      const active = btn.getAttribute("data-set-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const lang = btn.getAttribute("data-set-lang");
      try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
      applyLang(lang);
    });
  });

  // Sync button state / title / meta with the language chosen inline in <head>.
  applyLang(document.documentElement.getAttribute("data-lang") || "en");

  /* --- Mobile navigation ----------------------------------------- */
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
