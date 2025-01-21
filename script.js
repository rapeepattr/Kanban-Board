const drag_item = document.querySelectorAll('.drag-item')
const drag_list = document.querySelectorAll('.drag-item-list')
let selectItem

// รายการ
drag_item.forEach((item) => {
    item.addEventListener('dragstart', onDragStart)
})

// หมวดหมู่
drag_list.forEach((list) => {
    list.addEventListener('dragover', onDragOver)
    list.addEventListener('dragenter', onDragEnter)
    list.addEventListener('drop', onDrop)
})

function onDragStart() {   
    selectItem = this
}

function onDragOver(e) {
    e.preventDefault()
}

function onDragEnter(e) {
    e.preventDefault()
}

function onDrop() {
    this.append(selectItem)
    selectItem = null
}

function addTask(event) {
    event.preventDefault(); 
    const input = document.getElementById('new-task'); 
    const taskText = input.value.trim();

    if (taskText) {
        const newTask = document.createElement('li');
        newTask.classList.add('drag-item'); 
        newTask.draggable = true; 
        newTask.textContent = taskText; 

        newTask.addEventListener('dragstart', onDragStart);
        const backlogList = document.getElementById('backlog-list');
        backlogList.appendChild(newTask);

        input.value = '';
    } else {
        alert('Please enter a task.');
    }
}

