const container = document.getElementById("container");
var addTaskButton = document.createElement("button");
addTaskButton.textContent = "Add task";
container.appendChild(addTaskButton);
var count = 0;
var enterYourTaskInput = document.createElement("input");
enterYourTaskInput.placeholder = "Enter your task";
//container.appendChild(enterYourTaskInput);
var myTasksList = new Array();
class tasks {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}
addTaskButton.addEventListener("click", function() {
    // enterYourTaskInput.placeholder = "Enter your task";
    var newInput = document.createElement("input");
    var enterButton = document.createElement("button");
    var cancelButton = document.createElement("button");
    enterButton.addEventListener("click", function() {
        var newTask = new tasks(count, newInput.value);
        count++;
        myTasksList.push(newTask);
        var b1 = document.createElement("button");
        b1.textContent = "completed";
        var t1 = document.createElement("p");
        t1.textContent = newInput.value;
        container.appendChild(t1);
        container.appendChild(b1);
        b1.addEventListener("click", function() {
            container.removeChild(t1);
            container.removeChild(b1);
            myTasksList.remove(newTask);
        });
        container.removeChild(newInput);
        container.removeChild(enterButton);
        container.removeChild(cancelButton);
        container.appendChild(addTaskButton);
    });
    cancelButton.addEventListener("click", function() {
        container.removeChild(newInput);
        container.removeChild(enterButton);
        container.removeChild(cancelButton);
        container.appendChild(addTaskButton);
    });
    enterButton.textContent = "Enter";
    cancelButton.textContent = "Cancel";
    newInput.placeholder = "Enter your task";
    container.removeChild(addTaskButton);
    container.appendChild(newInput);
    container.appendChild(enterButton);
    container.appendChild(cancelButton);
});

//# sourceMappingURL=index.3e24aa3c.js.map
