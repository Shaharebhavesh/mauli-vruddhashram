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