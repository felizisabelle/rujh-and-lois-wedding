(function() {
  'use strict';

  document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("video-intro");
    const video = document.getElementById("intro-video");
    const site = document.getElementById("site-content");

    // Lock scroll initially
    document.body.classList.add("no-scroll");

    // Skip intro if already played 
    if (sessionStorage.getItem("introPlayed")) {
      intro.style.display = "none";
      site.classList.remove("hidden");
      document.body.classList.remove("no-scroll");
      return;
    }

    video.addEventListener("ended", () => {
      sessionStorage.setItem("introPlayed", "true");

      intro.classList.add("fade-out");

      setTimeout(() => {
        intro.style.display = "none";
        site.classList.remove("hidden");
        document.body.classList.remove("no-scroll"); 
      }, 1000);
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header-image');
    if (header) {
      header.classList.add('animate');
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
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
  });

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

  const allDetails = document.querySelectorAll('.faq-item details');

  allDetails.forEach((detail) => {
    detail.addEventListener('toggle', () => {
      const anyOpen = Array.from(allDetails).some(d => d.open);

      allDetails.forEach((d) => {
        if (anyOpen) {
          // Gray out if not open
          d.style.opacity = d.open ? '1' : '0.4';
        } else {
          // Restore all if nothing is open
          d.style.opacity = '1';
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const animatedSelectors = [
      ".header-image",
      ".invitation-image",
      ".split-page",
      ".wedding-details",
      ".attire-section",
      ".faqs-section",
      ".rsvp"
    ];

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            obs.unobserve(entry.target); // animate once
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
        observer.observe(el);
      });
    });
  });

})();