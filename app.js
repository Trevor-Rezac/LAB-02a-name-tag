const updateButton = document.getElementById('update-button')
const nameInput = document.getElementById('name-input');
const name = document.getElementById('name');


updateButton.addEventListener('click', () =>  {
    const newName = nameInput.value;
    name.textContent = newName;
});