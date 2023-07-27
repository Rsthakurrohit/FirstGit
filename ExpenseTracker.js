let addExpenseButton = document.getElementById('add-expense');
let items = document.getElementById('items');
let form = document.getElementById('expenseForm');


addExpenseButton.addEventListener("click",addItem);
items.addEventListener("click",removeList);
items.addEventListener("click",editList);

function addItem(e)
{
    e.preventDefault();

    let expenseAmount = document.getElementById('amount');
    let description = document.getElementById('description');
    let category = document.getElementById('category')

    // create element
    let li = document.createElement('li');
    li.className = 'list-group-item mb-3'
    console.log(li);

    //create text node
    let expenseAmountNode = document.createTextNode(expenseAmount.value);
    let descriptionNode = document.createTextNode(" - " + description.value);
    let categoryNode = document.createTextNode(" - " + category.value);

    expenseAmountNode.className = 'amountNode';
    descriptionNode.className = 'descriptionNode';
    categoryNode.className = 'categoryNode';

    //append text node to li
    li.appendChild(expenseAmountNode);
    li.appendChild(descriptionNode);
    li.appendChild(categoryNode);

    //create delete button
    let del = document.createElement('button');
    del.textContent = ' Delete';
    del.className = 'btn btn-danger btn-sm mx-2 float-end delete';
    del.id = 'delete'

    //create edit button
    let edit = document.createElement('button');
    edit.textContent = ' Edit';
    edit.className = 'btn btn-dark btn-sm mx-2 float-end edit';
    edit.id = 'edit';

    //append delete and edit button in li
    li.appendChild(del);
    li.appendChild(edit);

    //append li to item list
    items.appendChild(li);

    //-----------------------------------------------------------
    // save data to local storage

    const formData = new FormData(form);

    // Convert form data to an object
    const formDataObject = {};
    console.log(formDataObject);
    for (let [key, value] of formData.entries()) {
        formDataObject[key] = value;
    }

    // Save the form data to local storage
    localStorage.setItem(description.value, JSON.stringify(formDataObject));
}

//-------------------------------------------------------------------------
// delete button functionality

function removeList(e)
{
    e.preventDefault();
    if(e.target.classList.contains('delete'))
    {
            let li = e.target.parentElement;
            let key = li.textContent.split(' ')[2];
            localStorage.removeItem(key);
            items.removeChild(li);
    }
}

//edit button functionality
function editList(e)
{
    e.preventDefault();
    if(e.target.classList.contains('edit'))
    {
            let li = e.target.parentElement;
            let expenseAmount = li.textContent.split(' ')[0];
            let description = li.textContent.split(' ')[2];
            let category = li.textContent.split(' ')[4];
           
            // setting value for input text when click on edit
            document.getElementById('amount').value = expenseAmount;
            document.getElementById('description').value = description;
            document.getElementById('category').value = category;
            //removing from local storage
            localStorage.removeItem(description);
            // removing element
            items.removeChild(li);
        
    }
}





