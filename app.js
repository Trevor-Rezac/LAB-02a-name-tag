const updateButton = document.getElementById('update-button')
const nameInput = document.getElementById('name-input');
const name = document.getElementById('name');
const backgroundColor = document.getElementById('main-tag');
const pink = document.getElementById('pink');
const lightGreen = document.getElementById('light-green');
const lightBlue = document.getElementById('light-blue');
const red = document.getElementById('red');

updateButton.addEventListener('click', () =>  {
    const newName = nameInput.value;
    name.textContent = newName;
});

pink.addEventListener('click', () => {
  backgroundColor.style.backgroundColor = 'pink';
});

lightGreen.addEventListener('click', () => {
    backgroundColor.style.backgroundColor = 'lightgreen';
  });

lightBlue.addEventListener('click', () => {
    backgroundColor.style.backgroundColor = 'lightblue';
});

red.addEventListener('click', () => {
    backgroundColor.style.backgroundColor = 'red'
})

