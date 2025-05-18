(function() {
  if (!window.React || !window.ReactDOM) {
    console.error('React или ReactDOM не загружены');
    return;
  }

  const rootId = 'react-state-root-' + Date.now();
  
  const content = document.getElementById('content');
  if (!content) {
    console.error('Элемент content не найден');
    return;
  }

  const reactRoot = document.createElement('div');
  reactRoot.id = rootId;
  content.appendChild(reactRoot);


  const Counter = () => {
    const [count, setCount] = React.useState(0);
    
    const getColor = (value) => {
      if (value < 0) return 'red';
      if (value > 0) return 'green';
      return 'black';
    };

    return React.createElement('div', {
      style: {
        marginTop: '20px',
        padding: '20px',
        border: '2px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        maxWidth: '300px',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    }, [
      React.createElement('h3', { key: 'label' }, '🔄 Счётчик состояния'),
      React.createElement('p', {
        key: 'value',
        style: {
          fontSize: '2em',
          color: getColor(count),
          margin: '20px 0'
        }
      }, `Значение: ${count}`),
      React.createElement('div', {
        key: 'buttons',
        style: {
          display: 'flex',
          justifyContent: 'space-around'
        }
      }, [
        React.createElement('button', {
          onClick: () => setCount(count - 1),
          style: {
            padding: '10px 15px',
            fontSize: '1em'
          },
          key: 'decrease'
        }, '➖ Уменьшить'),
        React.createElement('button', {
          onClick: () => setCount(count + 1),
          style: {
            padding: '10px 15px',
            fontSize: '1em'
          },
          key: 'increase'
        }, '➕ Увеличить')
      ])
    ]);
  };

  ReactDOM.createRoot(document.getElementById(rootId)).render(
    React.createElement(Counter)
  );
})();