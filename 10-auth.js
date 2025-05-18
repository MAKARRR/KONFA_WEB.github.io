  (function() {
  const content = document.getElementById('content');
  if (!content) {
    console.error('Элемент content не найден');
    return;
  }

  const authSection = document.createElement('section1'); 
  authSection.innerHTML = `
    <h2>Аутентификация</h2>
    <input type="text" id="auth-user" placeholder="Имя пользователя" />
    <input type="password" id="auth-pass" placeholder="Пароль" />
    <button id="auth-login">Войти</button>
    <p id="auth-status">Не авторизован</p>
  `;
  
  content.appendChild(authSection);

   document.getElementById('content').appendChild(section);

  document.getElementById('auth-login').addEventListener('click', () => {
    const login = document.getElementById('auth-user').value.trim();
    const password = document.getElementById('auth-pass').value.trim();
    const users = JSON.parse(localStorage.getItem('user-db') || '{}');

    if (users[login] && users[login] === password) {
      localStorage.setItem('authToken', 'jwt-token-12345');
      document.getElementById('auth-status').textContent = `Авторизован как ${login}`;
      document.body.style.backgroundColor = '#7b1fa2'; 
      document.body.style.color = 'white';
    } else {
      document.getElementById('auth-status').textContent = 'Ошибка входа';
    }
  });
})();