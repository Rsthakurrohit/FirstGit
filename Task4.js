//getElementByClassName

let listt = document.getElementsByClassName('list-group-item');
console.log(listt)

listt[2].style.backgroundColor = 'green';
for( item of listt)
{
    item.style.fontWeight = '800';
}