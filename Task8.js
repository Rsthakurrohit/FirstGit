var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit',addElement);
itemList.addEventListener('click',removeElement);

function addElement(e)
{
    e.preventDefault();

    // create li
    var li = document.createElement('li');

    //get input value
    var text = document.getElementById('item');

    //append text
    li.appendChild(document.createTextNode(text.value));
    li.className = 'list-group-item';

    //add li to list
    itemList.appendChild(li);

    //create delete button
    var deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    deleteButton.appendChild(document.createTextNode('X'));

    //add deletebutton to li

    li.appendChild(deleteButton);

    // console.log(li);

    //create edit button
    var editButton = document.createElement('button');
    editButton.className = 'btn btn-info btn-sm float-right edit mr-2'
    editButton.appendChild(document.createTextNode('Edit'));

    //add edit button to li

    li.appendChild(editButton);
}

// remove element function
function removeElement(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure?'))
        {
            var li = e.target.parentElement;
            itemList.removeChild(li);
            // console.log('1');
        }
    }
}