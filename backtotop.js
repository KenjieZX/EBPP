// Back to top button
document.addEventListener('DOMContentLoaded', function() {
  // First add this HTML before the closing body tag:
  // <button id="back-to-top" title="Back to top">↑</button>
  
  const backToTopButton = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});