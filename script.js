// Get the containers and items
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const items = document.querySelectorAll('.text');
const resetButton = document.getElementById('reset');

// Add event listeners for drag events
items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

container2.addEventListener('dragover', dragOver);
container2.addEventListener('dragenter', dragEnter);
container2.addEventListener('dragleave', dragLeave);
container2.addEventListener('drop', dragDrop);

resetButton.addEventListener('click', resetContainers);

let draggedItem = null;

// Drag functions
function dragStart() {
  draggedItem = this;
  setTimeout(() => {
    this.style.display = 'none';
  }, 0);
}

function dragEnd() {
  draggedItem.style.display = 'block';
  draggedItem = null;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered');
}

function dragDrop() {
  this.classList.remove('hovered');
  this.appendChild(draggedItem);
  displayMessage('Item updated!');
}

function displayMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerText = message;
  document.body.appendChild(messageElement);
  setTimeout(() => {
    messageElement.remove();
  }, 2000);
}

function resetContainers() {
  container1.innerHTML = `
  <div class="item" draggable="true">Item 1</div>
    <div class="item" draggable="true">Item 2</div>
    <div class="item" draggable="true">Item 3</div>
  `;
  container2.innerHTML = '';
}