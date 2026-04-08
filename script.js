(function () {
  'use strict';

  function init() {
    var navToggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.nav');

    if (navToggle && nav) {
      navToggle.addEventListener('click', function () {
        nav.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', nav.classList.contains('is-open'));
      });
    }

    document.querySelectorAll('.nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
