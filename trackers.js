var createForm = document.getElementById("createForm");
createForm.addEventListener("submit", addItem);

async function addItem(event) {
    event.preventDefault();
    const expenseAmount = document.getElementById("expenseAmount").value;
    const description = document.getElementById("description").value;
    const catagories = document.getElementById("catagories").value;


    document.getElementById("expenseAmount").value = "";
    document.getElementById("description").value = "";
   console.log(catagories);
    const saveObj = {
        expenseAmount,
        description,
        catagories
    }
    try {
        const response1 = await axios.post("https://crudcrud.com/api/3e6fd2eb54bf4df68c795610ee23301e/appointmentdata", saveObj)
        addList(response1.data); 
    } catch (err) {
        console.log(err);
    }
    // console.log("nm");
}

async function deleteTodo(element){
    const deleteItem = element.parentElement;
    deleteItem.remove();
    try {
        const response1 = await axios.delete(`https://crudcrud.com/api/3e6fd2eb54bf4df68c795610ee23301e/appointmentdata/${element.id}`)
    } catch (err) {
        console.log(err);
    }
 }


 async function addList(saveObj) {

    if (saveObj.catagories === "Table1") {
        const table1List = document.createElement("li");
        table1List.innerHTML = `
    <span class="todo-name">${saveObj.expenseAmount}</span>
    <span>${saveObj.description}</span>
    <button onclick="deleteTodo(this)" id = ${saveObj._id}>Delete</button>
`
        document.getElementById("table1Order").appendChild(table1List);

    }


    else if (saveObj.catagories == "Table2") {
        const table1List = document.createElement("li");
        table1List.innerHTML = `
    <span class="todo-name">${saveObj.expenseAmount}</span>
    <span>${saveObj.description}</span>
    <button onclick="deleteTodo(this)" id = ${saveObj._id}>Delete</button>
`
        document.getElementById("table2Order").appendChild(table1List);
    }


   else if (saveObj.catagories == "Table3") {
        const table1List = document.createElement("li");
        // const expenseAmount = document.getElementById("expenseAmount").value;
        // const description = document.getElementById("description").value;
        table1List.innerHTML = `
    <span class="todo-name">${saveObj.expenseAmount}</span>
    <span>${saveObj.description}</span>
    <button onclick="deleteTodo(this)" id = ${saveObj._id}>Delete</button>
`
        document.getElementById("table3Order").appendChild(table1List);
        console.log("table3");
    }
}

window.addEventListener(("DOMContentLoaded"), loadFunc);
async function loadFunc() {
    try {
        const response1 = await axios.get('https://crudcrud.com/api/3e6fd2eb54bf4df68c795610ee23301e/appointmentdata')
        for (let i = 0; i < response1.data.length; i++) {
            addList(response1.data[i]);
        }
    } catch (err) {
        console.log(err);
    }
}
