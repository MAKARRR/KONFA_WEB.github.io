  const authSection = document.createElement('section2');
  authSection.innerHTML = `
     <h2>Тестирование</h2>
      <p>Проверим функцию суммирования: <code>sum(a, b)</code></p>
      <button id="run-tests">Запустить тесты</button>
      <ul id="test-results"></ul>
  `;
  
  content.appendChild(authSection);

  function sum(a, b) {
      return a + b;
    }
  
    function runTests() {
      const results = [
        { name: 'sum(1, 2) === 3', passed: sum(1, 2) === 3 },
        { name: 'sum(-1, 1) === 0', passed: sum(-1, 1) === 0 },
        { name: 'sum(2, 2) === 5', passed: sum(2, 2) === 5 }, 
      ];
  
      const ul = document.getElementById('test-results');
      ul.innerHTML = '';
      results.forEach(test => {
        const li = document.createElement('li');
        li.textContent = test.name + (test.passed ? ' ✅' : ' ❌');
        li.style.color = test.passed ? 'green' : 'red';
        ul.appendChild(li);
      });
    }
  
    document.getElementById('run-tests').addEventListener('click', runTests);
(function() {
  const content = document.getElementById('content');
  if (!content) {
    console.error('Элемент content не найден');
    return;
  }
})();
  