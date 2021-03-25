/**
 * username - target the username and display it
 */
let getUserName = (function(){
    let userName = window.prompt("Please insert your name LazyBoy");
    let output = "";
    let namesOfFreinds = ["Gaby","Kevin"];
    if(userName === null || userName === ""){
        output = namesOfFreinds[Math.floor(Math.random() * namesOfFreinds.length)];
    }
    else{
        output = userName.charAt(0).toUpperCase()+userName.slice(1);
    }
    document.title = "Lazy"+output;
    document.getElementById("username-title").innerHTML = "Welcome Lazy"+output;
})();


/**
 * Add a task button
 */
let addButton = document.getElementById("add-task")
let addShow = document.getElementById("add-task-container");
addButton.addEventListener("click",()=>displayAdd());


function displayAdd(){
    if(addShow.style.display ==="block"){
        addShow.style.display = "none";
    }
    else{
        addShow.style.display = "block";
        listShow.style.display = "none";
    }
}
/**
 * Tasks-list button
 */
let listButton = document.getElementById("list-task");
let listShow = document.getElementById("list-container");
listButton.addEventListener("click",()=>displayList());


function displayList(){

    if(listShow.style.display === "block"){
        listShow.style.display = "none";
    }
    else{
        listShow.style.display = "block";
        addShow.style.display = "none";
    }
    pushIt()
}
/**
 * Add a task to array
 */

let tasks = [];


let addBtn = document.getElementById("add-texte-tasks");
addBtn.addEventListener("click",()=>addTask());
function addTask(){
    let text = document.getElementById("add-task-text");
    tasks.push(text.value);
    text.value="";
}

/**
 * list all tasks
 */
 var options = '';
function pushIt(){
    options="";
    for(let i =0;i<tasks.length;i++){
        options += '<option value="' + tasks[i] + '" />';
    }
    document.getElementById('tasks-list').innerHTML = options;
}
/**
 * Is is done/undone feature
 */
const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click",()=>saveButton());
function saveButton(){
    let texte = document.getElementById("task-list")
    let doneCheck = document.getElementById("task-done").checked;
    let undoneCheck = document.getElementById("task-undone").checked;
    let place = tasks.indexOf(texte.value);
    if(doneCheck && undoneCheck){
        alert("Please select 1 box");
    }
    else if(doneCheck && place>-1){
        tasks[place] = texte.value.match(/\w+/)+" 'done'";
        texte.value="";
        pushIt();
    }
    else if(undoneCheck && place>-1){
        tasks[place] = texte.value.match(/\w+/) + " 'undone'";
        texte.value = "";
        pushIt();
    }
    else if(place<0){
        alert("This task doesn't exist");
    }
}

/**
 * remove - remove a task
 */
const removeBtn = document.getElementById("task-remove");
removeBtn.addEventListener("click",()=>removeTask());
function removeTask(){
    let texte = document.getElementById("task-list")
    let place = tasks.indexOf(texte.value);
    tasks.splice(tasks[place],1);
    texte.value="";
    pushIt()
}

/**
 * edit- edits a task
 */
const editBtn = document.getElementById("task-edit");
editBtn.addEventListener("click",()=>editTask());

function editTask(){
    let textToReplace = document.getElementById("task-to-edit");
    let texte = document.getElementById("task-list");
    let place = tasks.indexOf(texte.value);
    if(place<0){
        alert("Please select a task")
    }else{
        tasks.splice(tasks[place],1,textToReplace.value);
        texte.value=""
        pushIt();
    }
}