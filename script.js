// Smooth scrolling navigation
document.addEventListener('DOMContentLoaded', function() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('nav a');
  
  // Add click event listener to each nav link
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get the target section id from the href attribute
      const targetId = this.getAttribute('href');
      
      // Scroll to the target section
      const targetSection = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetSection.offsetTop - 80, // Offset to account for fixed header
        behavior: 'smooth'
      });
    });
  });

  // Header background change on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Dark mode toggle
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const toggleIcon = toggleBtn.querySelector('i');
  
  toggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // Change icon based on current theme
    if (document.body.classList.contains('dark-mode')) {
      toggleIcon.classList.remove('fa-moon');
      toggleIcon.classList.add('fa-sun');
    } else {
      toggleIcon.classList.remove('fa-sun');
      toggleIcon.classList.add('fa-moon');
    }
  });
});