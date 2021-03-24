let addButton = document.getElementById("add-task")
addButton.addEventListener("click",()=>displayAdd());
let addShow = document.getElementById("add-task-container");
let listShow = document.getElementById("list-container");

function displayAdd(){
    if(addShow.style.display ==="none"){
        addShow.style.display = "block";
        listShow.style.display = "none";
    }
    else{
        addShow.style.display = "none";
    }
}
let listButton = document.getElementById("list-task");
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
