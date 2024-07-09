document.addEventListener("DOMContentLoaded", function () {
    // Array of phrases
    const phrases = ["Web Developer", "Machine Learning Enthusiast"];

    // Get the element where the text will change
    const changingText = document.getElementById('changingText');

    // Initialize index to 0
    let index = 0;

    // Update text every 2000 milliseconds (2 seconds)
    setInterval(function () {
        changingText.textContent = phrases[index];
        index = (index + 1) % phrases.length;
    }, 2000); // Change this value to set the interval

    // Add fade-in animation to skills images when they come into view
    const skills = document.querySelectorAll('.skill img');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeIn');
            } else {
                entry.target.classList.remove('animate__animated', 'animate__fadeIn');
            }
        });
    }, { threshold: 0.9 }); // Adjust the threshold as needed

    skills.forEach(skill => {
        observer.observe(skill);
    });

    // Smooth scrolling to anchor links with a slow transition
    const navLinks = document.querySelectorAll('.navlist a');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const targetY = targetSection.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: targetY,
                    behavior: 'smooth'
                });

                // Remove 'active' class from all navigation links
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                });

                // Add 'active' class to the clicked navigation link
                this.classList.add('active');
            }
        });
    });

    // Function to check which section is currently active and highlight the corresponding navigation link
    function checkActiveSection() {
        const scrollPosition = window.scrollY;
        const sections = document.querySelectorAll('section');
        sections.forEach(function(section) {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                // Remove 'active' class from all navigation links
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                });

                // Add 'active' class to the corresponding navigation link
                const targetId = section.getAttribute('id');
                const correspondingNavLink = document.querySelector(`.navlist a[href="#${targetId}"]`);
                if (correspondingNavLink) {
                    correspondingNavLink.classList.add('active');
                }
            }
        });
    }

    // Call the function initially and on scroll
    checkActiveSection();
    window.addEventListener('scroll', checkActiveSection);
});

// const animationPath = 'img/Animation - 1704391965203.json';

//     // Set up the Lottie animation
//     const animationContainer = document.getElementById('lottie-container');
//     const animationData = {
//        container: animationContainer,
//        renderer: 'svg', // Choose the renderer (svg, canvas, html)
//        loop: true, // Set to true for an infinite loop
//        autoplay: true, // Set to true to play the animation automatically
//        path: animationPath,
//     };
 
//     // Load and play the Lottie animation
//     const animation = lottie.loadAnimation(animationData);

    // JavaScript to toggle the navigation menu
document.getElementById('menu-icon').addEventListener('click', function () {
    var navlist = document.querySelector('.navlist');
    navlist.style.display = navlist.style.display === 'flex' ? 'none' : 'flex';
  });
  