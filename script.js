(function () {
  'use strict';

  document.addEventListener("DOMContentLoaded", () => {

    const site = document.getElementById("site-content");
    if (site) {
      site.classList.remove("hidden");
      document.body.classList.remove("no-scroll");
    }

    // Header animation
    const header = document.querySelector('.header-image');
    if (header) {
      header.classList.add('animate');
    }

    // Invitation image animation
    const image = document.querySelector('.invitation-image');
    if (image) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            image.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      observer.observe(image);
    }

    // DETAILS toggle animation
    document.querySelectorAll('details').forEach(detail => {
      const summary = detail.querySelector('summary');
      if (summary) {
        summary.addEventListener('click', e => {
          e.preventDefault();
          if (detail.classList.contains('open')) {
            detail.classList.remove('open');
            setTimeout(() => detail.removeAttribute('open'), 400);
          } else {
            detail.setAttribute('open', '');
            setTimeout(() => detail.classList.add('open'), 10);
          }
        });
      }
    });

    // FAQ opacity effect
    const allDetails = document.querySelectorAll('.faq-item details');

    allDetails.forEach((detail) => {
      detail.addEventListener('toggle', () => {
        const anyOpen = Array.from(allDetails).some(d => d.open);

        allDetails.forEach((d) => {
          d.style.opacity = anyOpen
            ? (d.open ? '1' : '0.4')
            : '1';
        });
      });
    });

    // Scroll animations
    const animatedSelectors = [
      ".header-image",
      ".invitation-image",
      ".split-page",
      ".wedding-details",
      ".attire-section",
      ".faqs-section",
      ".rsvp"
    ];

    const scrollObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -80px 0px"
      }
    );

    animatedSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        scrollObserver.observe(el);
      });
    });

  });

})();
