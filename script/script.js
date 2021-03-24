/**
 * Add a task button
 */
let addButton = document.getElementById("add-task")
let addShow = document.getElementById("add-task-container");
addButton.addEventListener("click",()=>displayAdd());


function displayAdd(){
    if(addShow.style.display ==="none"){
        addShow.style.display = "block";
        listShow.style.display = "none";
    }
    else{
        addShow.style.display = "none";
    }
}
/**
 * Tasks-list button
 */
let listButton = document.getElementById("list-task");
let listShow = document.getElementById("list-container");
listButton.addEventListener("click",()=>displayList());


function displayList(){

    if(listShow.style.display === "none"){
        listShow.style.display = "block";
        addShow.style.display = "none";
    }
    else{
        listShow.style.display = "none";
    }
}
/**
 * Add a task to array
 */

let tasks = [];

let texte = document.getElementById("add-task-text");
let addBtn = document.getElementById("add-texte-tasks");
addBtn.addEventListener("click",()=>addTask());
function addTask(){
    tasks.push(texte.value);
    texte.value="";
    pushIt()
}

/**
 * list all tasks
 */
 var options = '';
function pushIt(){
    options += '<option value="' + tasks[tasks.length-1] + '" />';
 document.getElementById('tasks-list').innerHTML = options;
}
/**
 * Is is done feature
 */
