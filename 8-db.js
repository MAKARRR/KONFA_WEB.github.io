
(function() {
  const section = document.createElement('section');

  section.innerHTML = `
    <h2>Работа с базами данных</h2>
    <input type="text" id="reg-user" placeholder="Придумайте логин" />
    <input type="password" id="reg-pass" placeholder="Придумайте пароль" />
    <button id="reg-save">Сохранить в БД</button>
    <p id="reg-status"></p>
  `;
  document.getElementById('content').appendChild(section);

  document.getElementById('reg-save').addEventListener('click', () => {
    const login = document.getElementById('reg-user').value.trim();
    const password = document.getElementById('reg-pass').value.trim();

    if (login && password) {
      const users = JSON.parse(localStorage.getItem('user-db') || '{}');
      users[login] = password;
      localStorage.setItem('user-db', JSON.stringify(users));
      document.getElementById('reg-status').textContent = `Пользователь "${login}" зарегистрирован.`;
    } else {
      document.getElementById('reg-status').textContent = 'Введите логин и пароль.';
    }
  });
 document.getElementById('content').appendChild(section);
})();