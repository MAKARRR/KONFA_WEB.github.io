
    const container = document.getElementById('content');
    const graph = document.createElement('div');
    graph.innerHTML = `
      <h2>Этап Git: Ветвление проекта</h2>
      <pre style="background:#333;color:#0f0;padding:1em;border-radius:8px;">
  *   main
  |\\
  | * feature/login
  | * feature/design
  * |
  |/
  *   init commit
      </pre>
      <p>Это пример дерева коммитов — на практике мы используем Git и GitHub для управления историей проекта.</p>
    `;
    container.appendChild(graph);
