
document.addEventListener('DOMContentLoaded', () => {
  // Tab switching
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      btn.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // Theme switching
  const themeSelect = document.getElementById('themeSelect');
  themeSelect.addEventListener('change', (e) => {
    if (e.target.value === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  });

  // Grid size adjustment
  const gridSize = document.getElementById('gridSize');
  const imageGrid = document.querySelector('.image-grid');
  
  gridSize.addEventListener('change', (e) => {
    const sizes = {
      'small': '200px',
      'medium': '250px',
      'large': '300px'
    };
    imageGrid.style.gridTemplateColumns = `repeat(auto-fit, minmax(${sizes[e.target.value]}, 1fr))`;
  });

  // Add fade-in animation to image placeholders
  const placeholders = document.querySelectorAll('.image-placeholder');
  placeholders.forEach((placeholder, index) => {
    placeholder.style.animationDelay = `${index * 0.1}s`;
  });
});
