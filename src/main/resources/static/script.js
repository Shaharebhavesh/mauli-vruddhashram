// MOBILE MENU
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

// CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("msg").innerText = "Message Sent!";
});

//new mob
function toggleMenu() {
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.toggle('active');
    }

// DONATE BUTTON
function donate(){
    alert("Payment gateway coming soon!");
}