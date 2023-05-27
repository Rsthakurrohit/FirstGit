// console.log(document.domain);
// console.log(document.title);
// console.log(document.URL);
// document.title = 'Rohit';
// console.log(document.all);
// // document.all[9].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);

// getElementByID
// console.log(document.getElementById('header-title'));
let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';  // it does not pays attention to the styling
// headerTitle.innerText = 'Hi';  // It does pay attention to the styling
// headerTitle.innerHTML = '<h3>Heading</h3>';
headerTitle.style.border = 'solid 3px black';
header.style.borderBottom = 'solid 3px black';


// getElementsByClassName

let cardHeader = document.getElementsByClassName('title');
cardHeader[0].style.color = 'Green';
cardHeader[0].style.border = '1px solid red';
cardHeader[0].style.fontWeight = '900';