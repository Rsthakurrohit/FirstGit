var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit',addElement);
itemList.addEventListener('click',removeElement);
filter.addEventListener('keyup', filterItems);

function addElement(e)
{
    e.preventDefault();

    // create li
    var li = document.createElement('li');

    //get input value
    var text = document.getElementById('item');
    var text2 = document.getElementById('item1');
    

    //append text
    li.appendChild(document.createTextNode(text.value));
    li.className = 'list-group-item';

    //append text2
    li.appendChild(document.createTextNode(" " + text2.value));
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

//filter items

function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item)
    {
        var itemName = item.firstChild.textContent;
    
        if(itemName.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
  }