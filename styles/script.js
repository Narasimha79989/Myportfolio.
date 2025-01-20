// Menu Toggle Code
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};

window.onscroll = () => {
    navLinks.classList.remove('active');
};

// Typing Text Animation Code
const typed = new Typed('.multiple-text', {
    strings: ["FullStack Developer!", "Python Developer!", "Microsoft Office!","Microsoft PowerBI!"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 600,
    loop: true,
});

// Email Redirect Function
function redirectToGmail() {
    const mailtoLink = "mailto:narasimha.b74@gmail.com";
    window.location.href = mailtoLink;

    // Optional: Show the navigation or typing animation before redirect (example)
    navLinks.classList.add('active'); // Toggle nav links to active before redirect
}
