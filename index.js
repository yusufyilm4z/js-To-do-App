const addTaskButton = document.querySelector(".add-task");
const taskInput = document.querySelector(".to-do-input");
const taskListContainer = document.querySelector(".task-list");



const toggleCompleteButton = (event) => {
    const { parentElement } = event.currentTarget;
    
    const isCompleted = [...parentElement.classList].some(
        (className) => className === "completed"
);

    if(!isCompleted)
        event.currentTarget.innerText = "To-Do";
    else
        event.currentTarget.innerText = "Complete";
    
    event.currentTarget.parentElement.classList.toggle("completed");
}

const removeTask = (event) => {
    taskListContainer.removeChild(event.currentTarget.parentElement);
}

const renderTodoItem = (todoText) => {
    const todoItemElement = document.createElement('li');
    todoItemElement.classList.add('to-do-item');
    //todoItemElement.innerText = todoText;

    const completeButton = document.createElement('button');
    completeButton.classList.add("complete-button");
    completeButton.innerText = "Complete";
    completeButton.addEventListener("click" , toggleCompleteButton);
    todoItemElement.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", removeTask);
    todoItemElement.appendChild(deleteButton);

    const textElement = document.createElement('p');
    textElement.innerText = todoText;
    textElement.classList.add("to-do-text");
    todoItemElement.appendChild(textElement);

    taskListContainer.appendChild(todoItemElement);
    taskInput.value = "";
    taskInput.focus();
}

const addTask = () => {
    if (taskInput.value === ""){
        alert("Görev kutusu boş olamaz!");
    }
    else{
        renderTodoItem(taskInput.value);
    }
}

addTaskButton.addEventListener('click' , addTask);