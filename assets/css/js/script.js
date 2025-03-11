// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Contact Form Validation
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }

    alert("Message sent successfully!");
});