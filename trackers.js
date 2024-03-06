var createForm = document.getElementById("createForm");
var catagories = document.getElementById("catagories");
createForm.addEventListener("submit", addItem);

async function addItem(event) {
    event.preventDefault();
    const expenseAmount = document.getElementById("expenseAmount").value;
    const description = document.getElementById("description").value;

    document.getElementById("expenseAmount").value = "";
    document.getElementById("description").value = "";

    const saveObj = {
        expenseAmount,
        description
    }
    try {
        const response1 = await axios.post("https://crudcrud.com/api/4512045c2b6e4d3aad7626560aa0e1c1/appointmentdata", saveObj)
        addList(response1.data); 
    } catch (err) {
        console.log(err);
    }
    console.log("nm");
}

async function deleteTodo(element){
    const deleteItem = element.parentElement;
    deleteItem.remove();
    console.log(element.id);
    try {
        const response1 = await axios.delete(`https://crudcrud.com/api/4512045c2b6e4d3aad7626560aa0e1c1/appointmentdata/${element.id}`)
    } catch (err) {
        console.log(err);
    }
 }


 async function addList(element) {
    // element.preventDefault();
    if (catagories.value === "Table1") {
        const table1List = document.createElement("li");
        table1List.innerHTML = `
    <span class="todo-name">${element.expenseAmount}</span>
    <span>${element.description}</span>
    <button onclick="deleteTodo(this)" id = ${element._id}>Delete</button>
`
        document.getElementById("table1Order").appendChild(table1List);

    }


    else if (catagories.value == "Table2") {
        const table1List = document.createElement("li");
        // const expenseAmount = document.getElementById("expenseAmount").value;
        // const description = document.getElementById("description").value;
        table1List.innerHTML = `
    <span class="todo-name">${element.expenseAmount}</span>
    <span>${element.description}</span>
    <button onclick="deleteTodo(this)" id = ${element._id}>Delete</button>
`
        document.getElementById("table2Order").appendChild(table1List);
        console.log("table2");
    }


   else if (catagories.value == "Table3") {
        const table1List = document.createElement("li");
        // const expenseAmount = document.getElementById("expenseAmount").value;
        // const description = document.getElementById("description").value;
        table1List.innerHTML = `
    <span class="todo-name">${element.expenseAmount}</span>
    <span>${element.description}</span>
    <button onclick="deleteTodo(this)" id = ${element._id}>Delete</button>
`
        document.getElementById("table3Order").appendChild(table1List);
        console.log("table3");
    }
}

window.addEventListener(("DOMContentLoaded"), loadFunc);
async function loadFunc() {
    try {
        const response1 = await axios.get('https://crudcrud.com/api/4512045c2b6e4d3aad7626560aa0e1c1/appointmentdata')
        for (let i = 0; i < response1.data.length; i++) {
            addList(response1.data[i]);
            // console.log(response1.data[i]);

        }
    } catch (err) {
        console.log(err);
    }
}