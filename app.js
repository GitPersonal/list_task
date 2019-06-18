// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const cleatBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
 functioin loadEventListeners(){
  // add task event
   form.addEventListener('submit', addTask);
 }

// add task
function addTask(e){
 if(taskInput.value === ""){
   alert("Add a Task");
    }
 // create li element
 const li = document.createElement('li');
 // Add class
 li.className = 'collection-item';
 // Create text node and append to li
 li.appendChild(document.createTextNode(taskInput.value));
 // create new link element
 const link = document.createElement('a');
 // Add Class name 
 link.className = "delete-item secondary-content";
 e.preventDefault();
}
