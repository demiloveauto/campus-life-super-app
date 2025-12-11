// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully!');
    // script.js - tiny helpers: set active nav link & map search mock
document.addEventListener('DOMContentLoaded', () => {
  // highlight active nav by matching filename
  const links = document.querySelectorAll('.nav a');
  const file = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href');
    if(href && href.includes(file)) a.classList.add('active');
  });

  // simple map search mock (non-functional placeholder)
  const mapForm = document.getElementById('map-search-form');
  if(mapForm){
    mapForm.addEventListener('submit', e => {
      e.preventDefault();
      const q = document.getElementById('map-search-input').value.trim();
      const result = document.getElementById('map-search-result');
      result.textContent = q ? `Search placeholder: showing results for "${q}"` : 'Enter a building or place to search (placeholder).';
      result.style.color = '#555';
    });
  }
});

});
