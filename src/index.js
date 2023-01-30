const people = [
  'Elon Musk',
  'Balaji Srinivasan',
  'Andrew Huberman',
  'David Sinclair',
  'Yuval Harari',
];

const list = document.getElementById('draggable-list');

let dragged = null;

const onDragStart = e => {
  dragged = e.target;
  dragged.classList.add('dragging');
};

const onDragEnd = e => {
  e.target.classList.remove('dragging');
};

const onDragEnter = e => {
  e.target.classList.add('over');
};

const onDragOver = e => {
  e.preventDefault();
};

const onDragLeave = e => {
  e.target.classList.remove('over');
};

const onDrop = e => {
  e.target.classList.remove('over');

  const currItemIdx = Number(dragged.dataset.index);
  const closestItem = e.target.closest('li');
  const closestItemIdx = Number(closestItem.dataset.index);

  closestItem.insertAdjacentElement(
    currItemIdx <= closestItemIdx ? 'afterend' : 'beforebegin',
    dragged
  );

  list.childNodes.forEach((item, i) => {
    item.dataset.index = i;
    item.querySelector('.position').innerText = i + 1;
  });
};

function populateList() {
  people.forEach((person, i) => {
    const li = document.createElement('li');

    li.setAttribute('draggable', true);
    li.setAttribute('data-index', i);

    li.innerHTML = `
      <span class="position">${i + 1}</span>
      <span class="person-name">${person}</span>
    `;

    li.addEventListener('dragstart', onDragStart);
    li.addEventListener('dragenter', onDragEnter);
    li.addEventListener('dragover', onDragOver);
    li.addEventListener('dragleave', onDragLeave);
    li.addEventListener('dragend', onDragEnd);
    li.addEventListener('drop', onDrop);

    list.append(li);
  });
}

populateList();
