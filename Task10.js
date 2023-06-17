var form = document.getElementById('addForm');

form.addEventListener('submit',saveLocal);

var count = 1;
function saveLocal(e)
{
    e.preventDefault();


    var text = document.getElementById('item');
    var arr = [];
    arr.push(localStorage.setItem(`input ${count}`,text.value));
    count++;
    
    

    
}

