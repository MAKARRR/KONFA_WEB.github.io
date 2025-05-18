  (function() {
  const content = document.getElementById('content');
  if (!content) {
    console.error('Элемент content не найден');
    return;
  }

  const authSection = document.createElement('section'); // Уникальное имя переменной
  authSection.innerHTML = `
      <h2>Оптимизация</h2>
      <ul>
        <li>📦 Минификация CSS и JS</li>
        <li>💾 Кэширование статических файлов</li>
        <li>📱 Поддержка PWA (установка как приложение)</li>
      </ul>
      <p>Сайт теперь загружается быстрее и может работать оффлайн.</p>
  `;
  
  content.appendChild(authSection);

      document.getElementById('content').appendChild(section);
})();