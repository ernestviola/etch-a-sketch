const INITIAL_NODE_COUNT = 16;

const node__container = document.querySelector('.node__container');

for (let i = 0; i < INITIAL_NODE_COUNT; i++) {
  const node = document.createElement('div');
  node.classList.add('node')
  node__container.appendChild(node);
}