document.getElementById('add').addEventListener('click', addListItem);

let IDcounter = 1;
function addListItem(){
    if(document.getElementById('list').hasChildNodes() == false){
        IDcounter = 1;
    }
    // new div for a new item
    let newDiv = document.createElement('div');
    newDiv.id = 'item-'+IDcounter;
    newDiv.classList.add('list-item');
    //create done button
    let doneButton = document.createElement('button');
    doneButton.id = 'done-'+IDcounter;
    doneButton.classList.add('doneB')
    let iDone = document.createElement('i');
    iDone.classList.add('material-icons');
    iDone.appendChild(document.createTextNode('done'));
    doneButton.appendChild(iDone);  
    //create delete button
    let delButton = document.createElement('button');
    delButton.id = 'del-'+IDcounter;
    delButton.classList.add('delB')
    let iDel = document.createElement('i');
    iDel.classList.add('material-icons');
    iDel.appendChild(document.createTextNode('clear'));
    delButton.appendChild(iDel);  
    //create span for name of item 
    let span = document.createElement('span');
    span.id = 'span-'+IDcounter;
    let itemName = document.createTextNode(IDcounter +'. ' + document.getElementById('input').value);

    span.appendChild(itemName);
    newDiv.appendChild(span);
    newDiv.appendChild(doneButton);
    newDiv.appendChild(delButton);
    document.getElementById('list').appendChild(newDiv);

    document.getElementById(doneButton.id).addEventListener('click', addDoneClass);
    document.getElementById(delButton.id).addEventListener('click', delItem);

    function delItem(){
        newDiv.parentElement.removeChild(newDiv);
    }

    function addDoneClass(){
        document.getElementById(span.id).classList.add('doneClass');
        document.getElementById(doneButton.id).classList.add('clicked');
    }
    IDcounter++;
}

document.getElementById('del-all').addEventListener('click', deleteAll);

function deleteAll(){
    let myNode = document.getElementById('list');
    while(myNode.firstChild){
        myNode.removeChild(myNode.lastChild);
    }
   
}
