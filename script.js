const inputValue = document.getElementById("inputTask");
const addButton = document.getElementById("addBtn");
const searchButton = document.getElementById("searchBtn");
const tableBody = document.querySelector("tbody");
const deletebtn = document.getElementById("delete");
let counter=tableBody.rows.length;

addButton.addEventListener("click", addTask);

function addTask(){
    if(inputValue.value!=""){
        const tablerow = document.createElement("tr");
        const tabledata = document.createElement("td");
        counter++;
        tabledata.textContent = inputValue.value;
        tablerow.setAttribute("id", counter);
        tablerow.appendChild(tabledata);

        tablerow.innerHTML=`
        <td><i class="fa-regular fa-hand-point-right" style="color: #77b255;"></i></td>
        <td id="tasktext">${inputValue.value}</td>
        <td id="status">In-progress</td>
        <td><i class="fa-solid fa-trash-can trash" style="color: #c41212;" title="delete" onclick="deleteTask(this)"></i></td>
        <td><i class="fa-solid fa-pen-to-square" title="Edit" onclick="editTask(this)"></i></td>
        <td><i class="fa-solid fa-circle-check fa-lg" style="color: grey;" title="Finish" onclick="finishTask(this)"></i></td>
        `
        tableBody.appendChild(tablerow);
        inputValue.value="";

        document.getElementById("noTask").style.display="none";
    }

}

// Delete Task Function

function deleteTask(btn){
    
    let taskItem = btn.parentElement.parentElement;
    taskItem.remove();
    if(tableBody.rows.length==0){
        document.getElementById("noTask").style.display="block";
    }
    }

    // Finish Task Function

function finishTask(btn){
        let taskItem = btn.parentElement.parentElement;
        taskText = taskItem.querySelector("#tasktext");
        taskStatus = taskItem.querySelector("#status");
        taskText.classList.toggle("finished");
        console.log(taskText.classList);

        btn.style.color= taskText.classList.contains("finished")? "green" : "grey" ;
        taskStatus.textContent = taskText.classList.contains("finished")? "Finished" : "In-Progress" ;
        
    }

function editTask(btn){
    let taskItem = btn.parentElement.parentElement;
    let taskText = taskItem.querySelector("#tasktext");

    let newTask = prompt("Enter your task: ", taskText.innerText);

    if(newTask!=""){
        taskText.innerText = newTask.trim();
    }

}

