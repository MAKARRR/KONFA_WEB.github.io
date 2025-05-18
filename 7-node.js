
  const section = document.createElement('section');
  section.innerHTML = `
    <h2>Node.js )</h2>
    <button id="get-time">Получить "серверное" время</button>
    <p id="server-response"></p>
  `;
  document.getElementById('content').appendChild(section);

  document.getElementById('get-time').addEventListener('click', async () => {
    document.getElementById('server-response').textContent = 'Запрос к серверу...';


    const getTimeFromServer = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const currentTime = new Date().toLocaleTimeString();
          resolve({ time: currentTime });
        }, 1000); 
      });
    };

    try {
      const data = await getTimeFromServer();
      document.getElementById('server-response').textContent = `Время с сервера: ${data.time}`;
    } catch (err) {
      document.getElementById('server-response').textContent = 'Ошибка при получении времени';
    }
  });
