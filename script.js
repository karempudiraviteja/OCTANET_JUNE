function openNavbar() {
    document.getElementById("sideNavigationBar").style.width = "250px";
}

function closeNavbar() {
    document.getElementById("sideNavigationBar").style.width = "0";
}

document.getElementById('contactForm').addEventListener('Send Message', function(event) {
    event.preventDefault();
    
    const form = this;
    const email = form.email.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Thank you for your message!');
    

    // Clear the form fields
    form.reset();
    
        
});