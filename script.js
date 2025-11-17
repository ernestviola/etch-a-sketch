// initialize the page with a number of nodes
let currentNodeCount = 0;

const width = document.querySelector('#width');
const height = document.querySelector('#height');

updateNodeCount(width.value*height.value);

width.addEventListener('input', () => {
  if (Number(width.value) > Number(width.max)) return;
  updateNodeCount(width.value * height.value);
  const root = document.documentElement;
  root.style.setProperty('--width', width.value);
})

height.addEventListener('input', () => {
  if (Number(height.value) > Number(height.max)) return;
  updateNodeCount(width.value * height.value);
  const root = document.documentElement;
  root.style.setProperty('--height', height.value);
})

const button = document.querySelector('.reset');
button.addEventListener('click',(event) => {
  event.preventDefault();
  resetColors();
})

function updateNodeCount(num) {
  const nodeContainer = document.querySelector('.node__container');

  if (num < currentNodeCount) {
    for (let i = currentNodeCount; i > num; i--) {
      nodeContainer.removeChild(nodeContainer.lastElementChild);
    }
  } else if (num > currentNodeCount) {
    for (let i = currentNodeCount; i < num; i++) {
      createNode(nodeContainer);
    }
  }
  currentNodeCount = num;
}

function createNode(nodeContainer) {
  const node = document.createElement('div');
  node.classList.add('node')
  node.addEventListener('mouseover', () => {
    // get opacity
    let r = g = b = a = 0;

    if (node.style.backgroundColor) {
      // increase opacity
      const values = node.style.backgroundColor.replace(/^rgba?\(|\)$/g, '').split(',');
      r = parseInt(values[0].trim()) - 10;
      g = parseInt(values[1].trim()) - 10;
      b = parseInt(values[2].trim()) - 10;
      alpha = parseFloat(values[3] ? values[3].trim() : 1) + .2;
    } else {
      r = Math.floor(Math.random() * 255);
      g = Math.floor(Math.random() * 255);
      b = Math.floor(Math.random() * 255);
      alpha = .4;
    }
    node.style.backgroundColor = `rgba(${r},${g},${b},${alpha})`;
  })
  nodeContainer.appendChild(node);
};

function resetColors() {
  const nodes = document.querySelectorAll('.node');
  nodes.forEach( node => {
    node.style.backgroundColor = ''
  })
}