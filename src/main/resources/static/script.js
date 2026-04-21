// MOBILE MENU
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

// CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("msg").innerText = "Message Sent!";
});

// DONATE BUTTON
function donate(){
    alert("Payment gateway coming soon!");
}