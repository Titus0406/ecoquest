   //toggle button for navbar
   function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }

  // Detect scroll and change the navbar background
  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    if (window.scrollY > 50) {  // 50 is pexels ya kubadilika
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
    // Back to Top Button functionality
    var mybutton = document.getElementById("backToTopBtn");

    // Show the button when the user scrolls down 100px
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 100 || 
            document.documentElement.scrollTop > 100) {
            // mybutton.style.display = "block";
            backToTopBtn.classList.add('scrolled');
        } else {
            // mybutton.style.display = "none";
            backToTopBtn.classList.remove('scrolled');
        }
    }

    // Scroll to the top when the user clicks the button
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
