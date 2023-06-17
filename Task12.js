var form = document.getElementById('addform');
var itemList = document.getElementById('items');
// console.log(form);

form.addEventListener('submit',addElement);

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
    var nameNode = document.createTextNode("Name = " + name.value);
    var emailNode = document.createTextNode(" Email = " + email.value);
    var phoneNode = document.createTextNode(" Phone = " + phone.value);
    
    //append text node to li
    li.appendChild(nameNode);
    li.appendChild(emailNode);
    li.appendChild(phoneNode);

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