// Add Tasks Function 
const taskAdd = document.getElementById("add_btn");

taskAdd.addEventListener("click", () => {
    const inputBox = document.getElementById("input_field");
    const inputText = inputBox.value;

    if (inputText.trim() !== "") {
        const listContainer = document.querySelector(".list_container");
        const listItem = document.createElement("li");
        listItem.classList.add("list_item");

        listItem.innerHTML = `
            ${inputText}
            <button class="btn btn_del"><i class="fa-solid fa-trash"></i></button>
        `;

        listContainer.appendChild(listItem);
        inputBox.value = ""; // Clear the input box
    } else {
        console.log("Task Cannot be empty!");
    }
});

// Delete Button Function
const taskContainer = document.querySelector(".list_container");

taskContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-trash")) {
        const task = event.target.closest("li");
        if (task) {
            task.remove();
        }
    }
});


taskContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const li = event.target.closest("li");
        if (li) {
            li.classList.toggle("checked");
        }
    }
});

// Delete All Button Function 

const delAll = document.querySelector(".del_all");

delAll.addEventListener("click", ()=>{
    taskContainer.innerHTML = "";
})