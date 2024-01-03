let input_box = document.getElementById("inputbox");
let data = document.getElementById("data");
let addbutton = document.getElementById("add");
let save = document.getElementById("save");
save.style.display = "none";
let taskList = [];
let statuss = "";
function addTask() {
    let input = input_box.value;
    if (input === '') {
        alert("you have to enter something");
    }
    else {
        taskList.push(input);
        updateTaskList();
        input_box.value = '';
        console.log("tasklist ===>", taskList);
    }
}
function completeTask(index) {
    if (taskList[index].includes('<s>')) {
        taskList[index] = taskList[index].replace('<s>', '').replace('</s>', '');
    } else {
        taskList[index] = `<s>${taskList[index]}</s>`;
    }
    updateTaskList();
    position();
}
function deleteTask(index) {
    taskList.splice(index, 1);
    updateTaskList();
    position();
    console.log("deleted element", index);
    console.log("tasklist===>", taskList);
}
function editTask(index) {
    save.style.display = "block";
    addbutton.style.display = "none";
    if (taskList[index].includes('<s>')) {
        taskList[index] = taskList[index].replace('<s>', '').replace('</s>', '');
        updateTaskList();
    }
    input_box.value = taskList[index];
    save.onclick = function () {
        const newvalue = input_box.value;
        taskList[index] = newvalue;
        updateTaskList();
        input_box.value = "";
        save.style.display = "none";
        addbutton.style.display = "block";
    };
    // position();
}
function allTask() {
    statuss = "allTask"
    console.log("zzzzzzzzzz==>", statuss);
    let taskElements = document.querySelectorAll("#data b");
    for (let i = 0; i < taskElements.length; i++) {
        taskElements[i].style.display = "block";
    }
}
function completedTask() {
    statuss = "completedTask"
    console.log("zzzzzzzzzz==>", statuss);

    let taskElements = document.querySelectorAll("#data b");
    for (let i = 0; i < taskElements.length; i++) {
        let taskElement = taskElements[i];
        let element = taskElement.querySelector("s");
        if (element) {
            taskElement.style.display = "block";
        }
        else {
            taskElement.style.display = "none";
        }
    }
}
function pendingTask() {
    statuss = "pendingTask"
    console.log("zzzzzzzzzz==>", statuss);

    let taskElements = document.querySelectorAll("#data b");
    for (let i = 0; i < taskElements.length; i++) {
        let taskElement = taskElements[i];
        let element = taskElement.querySelector("s");
        if (!element) {
            taskElement.style.display = "block";
        }
        else {
            taskElement.style.display = "none";
        }
    }
}
function updateTaskList() {
    data.innerHTML = taskList.map((task, index) =>
        `<b><p>${task}</p>
            <button id="completed" onclick="completeTask(${index}, this)">COMPLETE</button>
            <button id="edit" onclick="editTask(${index})">EDIT</button>
            <button id="delete" onclick="deleteTask(${index},this)">DELETE</button></b>
           `
    ).join("");
}
function position() {
    switch (statuss) {
        case "alltask": allTask();
            break;
        case "pendingTask": pendingTask();
            break;
        case "completedTask": completedTask();
            break;
        default: console.log("defaultStatus===>");
    }
}





