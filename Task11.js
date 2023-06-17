var form = document.getElementById('addForm');

form.addEventListener('submit',saveLocal);


function saveLocal(e)
{
    e.preventDefault();

    // Get the form data
  const formData = new FormData(form);

  // Convert form data to an object
  const formDataObject = {};
  for (let [key, value] of formData.entries()) {
    formDataObject[key] = value;
  }

  // Save the form data to local storage
  localStorage.setItem('formData', JSON.stringify(formDataObject));
}

