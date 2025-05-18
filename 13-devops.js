(function() {
  const content = document.getElementById('content');
  if (!content) {
    console.error('Элемент content не найден');
    return;
  }

  const devopsSection = document.createElement('section');
  devopsSection.innerHTML = `
    <h2>DevOps: CI/CD пайплайн</h2>
    <p>Имитация выполнения пайплайна после push-коммита:</p>
    
    <div id="ci-cd-log" class="ci-cd-log">
      <button id="start-pipeline">▶ Запустить пайплайн</button>
      <div class="progress-bar">
        <div id="progress-fill" class="progress-fill"></div>
      </div>
      <ul id="pipeline-steps"></ul>
    </div>
  `;
  
  content.appendChild(devopsSection);

  const steps = [
    { message: '🔁 Клонирование репозитория...', delay: 1000 },
    { message: '📦 Установка зависимостей...', delay: 1500 },
    { message: '🔧 Сборка проекта...', delay: 2000 },
    { message: '🚀 Деплой на сервер...', delay: 1500 },
    { message: '✅ Пайплайн завершён успешно!', delay: 1000 },
  ];

  document.getElementById('start-pipeline')?.addEventListener('click', async () => {
    const list = document.getElementById('pipeline-steps');
    const progress = document.getElementById('progress-fill');
    
    if (!list || !progress) return;
    
    list.innerHTML = '';
    progress.style.width = '0%';

    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      const li = document.createElement('li');
      li.textContent = step.message;
      list.appendChild(li);
      const percent = ((i + 1) / steps.length) * 100;
      progress.style.width = `${percent}%`;

      await new Promise(resolve => setTimeout(resolve, step.delay));
    }
  });
})();