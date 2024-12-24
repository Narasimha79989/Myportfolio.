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





// Snowflake Animation Code
function createSnowflakes() {
    const snowflakeContainer = document.createElement('div');
    snowflakeContainer.classList.add('snowflake-container');
    document.body.appendChild(snowflakeContainer);

    setInterval(() => {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Between 2 and 5 seconds
        snowflake.style.opacity = Math.random();
        snowflakeContainer.appendChild(snowflake);

        // Remove snowflakes after animation ends
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }, 200); // Create a snowflake every 200ms
}

createSnowflakes();
