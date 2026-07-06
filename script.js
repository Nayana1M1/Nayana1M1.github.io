// ===============================
// NOVATECH WEBSITE SCRIPT
// ===============================

// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ===============================
// Sticky Navbar Effect
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(15,23,42,0.95)";
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";

    } else {

        navbar.style.background = "rgba(255,255,255,0.12)";
        navbar.style.boxShadow = "none";

    }

});

// ===============================
// Fade-in Animation on Scroll
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(".card, .stat-box, .about-content, .contact-form").forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ===============================
// Contact Form
// ===============================

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("🎉 Thank you! Your message has been sent successfully.");

    form.reset();

});