let list = document.getElementById('list');
let IDcounter;
document.getElementById('add').addEventListener('click', addListItem);
document.getElementById('del-all').addEventListener('click', deleteAll);


function addListItem() {

  if (!list.hasChildNodes()) {
    IDcounter = 1;
  }

  // new div for a new item
  let newListItem = createNewElement('div', 'list-item', `item-${IDcounter}`);

  //create done button
  let doneButton = createNewElement('button', 'doneB', `done-${IDcounter}`);
  let iDone = createNewElement('i','material-icons');
  iDone.appendChild(document.createTextNode("done"));
  doneButton.appendChild(iDone);

  //create delete button
  let delButton = createNewElement('button','delB',`del-${IDcounter}`);
  let iDel = createNewElement('i','material-icons');
  iDel.appendChild(document.createTextNode('clear'));
  delButton.appendChild(iDel);

  //create span for name of item
  let span = createNewElement('span',null,`span-${IDcounter}`);
  let itemName = document.createTextNode(
    IDcounter + ". " + document.getElementById('input').value
  );
  span.appendChild(itemName);

  newListItem.appendChild(span);
  newListItem.appendChild(doneButton);
  newListItem.appendChild(delButton);
  
  list.appendChild(newListItem);

  doneButton.addEventListener('click', () => {
    span.classList.add('doneClass');
    doneButton.classList.add('clicked');
  });

  document
    .getElementById(delButton.id)
    .addEventListener('click', () =>
      newListItem.parentElement.removeChild(newListItem)
    );

  IDcounter++;
}

function deleteAll() {
  while (list.firstChild) {
    list.removeChild(list.lastChild);
  }
}

function createNewElement(el, className = undefined, id = undefined) {
  let newEl = document.createElement(el);
  if (id) {
    newEl.id = id;
  }
  if (className) {
    newEl.classList.add(className);
  }
  return newEl;
}
