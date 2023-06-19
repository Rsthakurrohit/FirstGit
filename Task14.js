var form = document.getElementById('addform');
var itemList = document.getElementById('items');
// console.log(form);

form.addEventListener('submit',addElement);
itemList.addEventListener('click', removeList);
itemList.addEventListener('click', editList)

function addElement(e)
{
    e.preventDefault();
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    // console.log(`Name = ${name.value} Email = ${email.value} Phone = ${phone.value}`);

    //create element
    var li = document.createElement('li');
    li.className = 'list-group-item mt-2';
    console.log(li);

    //create text node
    var nameNode = document.createTextNode(name.value);
    var emailNode = document.createTextNode(" " + email.value);
    var phoneNode = document.createTextNode(" " + phone.value);

    nameNode.className = 'name';
    emailNode.className = 'email';
    phoneNode.className = 'phone';
    
    //append text node to li
    li.appendChild(nameNode);
    li.appendChild(emailNode);
    li.appendChild(phoneNode);

    //create delete button
    let del = document.createElement('button');
    del.textContent = ' Delete';
    del.className = 'btn btn-danger btn-sm mx-2 float-right delete';
    del.id = 'delete';

    // Create edit button
    let edit = document.createElement('button');
    edit.textContent = 'Edit';
    edit.className = 'btn btn-dark btn-sm mx-2 float-right edit';
    edit.id = 'edit';

    //append delete to li
    li.appendChild(del);

    //append edit to li
    li.appendChild(edit);



    console.log(li);

    //append to the list
    itemList.append(li);
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
    localStorage.setItem(email.value, JSON.stringify(formDataObject));
}

//-------------------------------------------------------------------------

//functionality for delete button
function removeList(e)
{
    e.preventDefault();
    // console.log("delete");
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure?'))
        {
            var li = e.target.parentElement;
            var key = li.textContent.split(' ')[2];
            // console.log(li.textContent);
            // console.log(key);
            localStorage.removeItem(key);
            itemList.removeChild(li);
            // console.log('1');
        }
    }
}

// functionality for edit button

function editList(e)
{
    e.preventDefault();
    // console.log("delete");
    if(e.target.classList.contains('edit'))
    {
            var li = e.target.parentElement;
            var email = li.textContent.split(' ')[1];
            var name = li.textContent.split(' ')[0];
            var phone = li.textContent.split(' ')[2];
            // setting value for input text when click on edit
            document.getElementById('name').value = name;
            document.getElementById('email').value = email;
            document.getElementById('phone').value = phone;
            //removing from local storage
            localStorage.removeItem(email);
            // removing element
            itemList.removeChild(li);
        
    }
}