(function() {
  const content = document.getElementById('content');
  if (!content) return;

  const tsSection = document.createElement('section');
  tsSection.innerHTML = `
    <h2>TypeScript (эмуляция поведения)</h2>
    <p>Здесь мы имитируем поведение типизации TypeScript на практике.</p>
    <label for="username">Введите имя:</label>
    <input id="username" type="text" placeholder="Имя" style="margin: 0 10px; padding: 5px;">
    <button id="greetBtn" style="padding: 5px 10px;">Поздороваться</button>
    <p id="greetingOutput" style="margin-top: 15px; font-weight: bold;"></p>
  `;

  content.appendChild(tsSection);

  window.greet = (name) => {
    if (typeof name !== 'string') {
      return 'Ошибка: имя должно быть строкой!';
    }
    return 'Привет, ' + name;
  };

  document.getElementById('greetBtn')?.addEventListener('click', () => {
    const input = document.getElementById('username')?.value;
    if (input !== undefined) {
      const result = greet(input);
      document.getElementById('greetingOutput').textContent = result;
    }
  });
})();