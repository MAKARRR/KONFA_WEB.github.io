
    const root = document.createElement('div');
    root.id = 'react-root';
    document.getElementById('content').appendChild(root);
  
    const App = () => {
      return React.createElement('div', null, [
        React.createElement('h2', { key: 1 }, 'Этап фреймворка: React'),
        React.createElement('p', { key: 2 }, 'Это React-компонент, встроенный прямо в наш HTML.')
      ]);
    };
  
    ReactDOM.createRoot(document.getElementById('react-root')).render(React.createElement(App));
