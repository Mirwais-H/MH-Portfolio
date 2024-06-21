document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section-box');
  const navLinks = document.querySelectorAll('nav ul li a');

  // Show only the home section by default
  document.getElementById('home').style.display = 'block';

  navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();
          const sectionId = event.target.getAttribute('data-section');

          // Hide all sections
          sections.forEach(section => {
              section.style.display = 'none';
         
