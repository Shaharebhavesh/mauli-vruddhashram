/* ===== MOBILE MENU ===== */
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

/* ===== CONTACT FORM ===== */
const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", function(e){
        e.preventDefault();
        document.getElementById("msg").innerText = "Message Sent!";
    });
}

/* ===== DONATE BUTTON ===== */
function donate(){
    alert("Payment gateway coming soon!");
}

/* ===== LOAD ANIMATION (ONLY ONCE) ===== */

/* ===== LOAD ANIMATION (LEFT / RIGHT) ===== */
window.addEventListener("load", () => {

    const elements = document.querySelectorAll(".animate");

    elements.forEach((el, index) => {

        // Step 1: add init state
        el.classList.add("init");

        // Step 2: animate
        setTimeout(() => {
            el.classList.add("active");
        }, 200 + (index * 120));

    });

});

/* ===== NAVBAR SCROLL EFFECT ===== */
//window.addEventListener("scroll", () => {
//    const nav = document.querySelector(".navbar");
//
//    if (window.scrollY > 50) {
//        nav.style.padding = "10px 40px";
//        nav.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
//    } else {
//        nav.style.padding = "14px 50px";
//        nav.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
//    }
//});

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});


console.log("JS WORKING");

/* =========================================
   ABOUT PAGE SCROLL ANIMATION
========================================= */
/* enable js animations */
document.body.classList.add("js-enabled");
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach((el) => {

        const windowHeight = window.innerHeight;

        const revealTop =
            el.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            el.classList.add("active");
        }
    });
}

/* =========================================
   MOBILE MENU TOGGLE
========================================= */

function toggleMenu() {

    document
        .getElementById("navMenu")
        .classList.toggle("active");
}

/* =========================================
   CLOSE MENU WHEN CLICK OUTSIDE
========================================= */

document.addEventListener("click", function(event) {

    const navMenu =
        document.getElementById("navMenu");

    const menuToggle =
        document.querySelector(".menu-toggle");

    /* if menu open */
    if(navMenu.classList.contains("active")) {

        /* click outside menu */
        if(
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navMenu.classList.remove("active");
        }
    }
});

/* =========================================
   CLOSE MENU WHEN CLICK NAV LINK
========================================= */

document
    .querySelectorAll("#navMenu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            document
                .getElementById("navMenu")
                .classList.remove("active");
        });
});

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);