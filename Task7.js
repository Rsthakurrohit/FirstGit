//Traversing DOM
let itemList = document.querySelector('#items');

//parentnNode-----------------
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'grey';

// console.log(itemList.parentNode.parentNode);

//parendElement------------------

// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = 'grey';
// console.log(itemList.parentElement.parentElement);

//childNode----------------
// console.log(itemList.childNodes);

//children-----------------
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor = 'yellow';

//firstChild----------------------
// console.log(itemList.firstChild);

//firstChildElement-------------------
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.backgroundColor = 'grey';

//lastChild----------------------
// console.log(itemList.firstChild);

//lastChildElement-------------------
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.backgroundColor = 'grey';

//nextSibling

// console.log(itemList.nextSibling);

//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);

//previousElementSibling

// console.log(itemList.previousElementSibling);

// Create Element

let newDiv = document.createElement('div');
//add class to newDiv
newDiv.className = 'Hello';
//add Id to newDiv 
newDiv.id = 'hello';

// add attirbute
newDiv.setAttribute('title','Hello World');
console.log(newDiv);

//create textNode
let newDivText = document.createTextNode('Hello World');

//append 
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);

///---------------hello world before item1
let newDiv2 = document.createElement('div');
let newDiv2Text = document.createTextNode('Hello World');
newDiv2.appendChild(newDiv2Text);
let items = document.querySelector('#items');
let item1 = items.firstElementChild;
console.log(item1);

items.insertBefore(newDiv2,item1);