let listContainer = document.getElementById("list-container");

let inputBox = document.getElementById("input-box");

function addTask() {
    if(inputBox.value === '') {
        alert("add your task");
    }
    else {
        let task = document.createElement('li');
        task.textContent = inputBox.value
        listContainer.appendChild(task);

        let span = document.createElement('span');
        span.textContent = "\u00d7"                 // its unicode for multiply sign.
        task.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', (el) => {     // for checked listener
    if(el.target.tagName == 'LI'){
        el.target.classList.toggle('checked');
        saveData();
    }
    else if(el.target.tagName == 'SPAN'){
        el.target.parentElement.remove();
        saveData();
    }
})

// for saving data 
function saveData() {
    localStorage.setItem('tasks', listContainer.innerHTML)
}

function showData() {
    listContainer.innerHTML = localStorage.getItem('tasks');
}
showData();
