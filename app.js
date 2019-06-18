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
function addTask(){
}
