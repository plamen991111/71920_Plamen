const body = document.body;
const ul = document.querySelector('#my-list')

function addItem() {
    const input = document.querySelector('#input');
    const li = document.createElement('li');

    li.innerText = input.value;

    const btnDelete = document.createElement('button');
    btnDelete.innerText = 'Delete';
    btnDelete.onclick = function() {
        li.parentNode.removeChild(li);
        btnDelete.parentNode.removeChild(btnDelete)
    };

    ul.appendChild(li);
    ul.appendChild(btnDelete);


    input.value = '';

    
}


