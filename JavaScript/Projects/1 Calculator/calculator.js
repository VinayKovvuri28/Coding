let currentDisplay;
let currentValue = '';
let allButtons = document.querySelectorAll('button')

allButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        //console.log(event.target.value);
        currentValue = event.target.value;
        if(currentValue === 'C') {
            currentDisplay = '';
        }
        else if (currentValue == '=') {
            currentDisplay = eval(currentDisplay);
        }
        else {
            currentDisplay = currentDisplay + currentValue;
        }
        document.querySelector('#display').value = currentDisplay;
    });
});