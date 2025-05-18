(function() {
  console.log("3js.js подключен и работает");
  
  const themeStyles = document.createElement('style');
  themeStyles.textContent = `
    .dark-theme {
      background-color: #121212;
      color: #eee;
    }
    .dark-theme header,
    .dark-theme footer {
      background-color: #1f1f1f;
      color: #eee;
    }
    .dark-theme button {
      background-color: #6c757d;
      color: white;
    }
    .dark-theme button:hover {
      background-color: #5a6268;
    }
  `;
  document.head.appendChild(themeStyles);

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.style.display = 'inline-block';
    themeBtn.addEventListener('click', function() {
      console.log('Кнопка нажата'); // Для отладки
      document.body.classList.toggle('dark-theme');
    });
  } else {
    console.error('Кнопка theme-toggle не найдена');
  }
})();