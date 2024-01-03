let date = new Date();
let getHours = date.getHours();
let greeetings = document.querySelector('#greeting');
personName = 'Vinay Kovvuri';
let noOfTimesClicked = 0;
let myButton = document.querySelector('#my-button');

function doGreetings(name) {
    if (getHours > 5 && getHours < 12) {
        greeetings.innerText = `Good Morning '${name}'`;
    }
    else if (getHours => 12 && getHours < 16) {
        greeetings.innerText = `Good Afternoon '${name}'`;
    }
    else if (getHours => 16 && getHours < 18) {
        greeetings.innerText = `Good Evenning '${name}'`;
    }
    else {
        greeetings.innerText = `Good Nigth '${name}'`;
    }
}

doGreetings(personName);
// console.log('Date: '+date);
// console.log('Get Hours: '+getHours);


function noOfBttonClicks() {
    // console.log('pressed');
    noOfTimesClicked++
    
    updateButton();
}

function updateButton() {
    if (noOfTimesClicked % 2 === 0) {
        myButton.classList.remove('odd');
        myButton.classList.add('even');
    }
    else {
        myButton.classList.remove('even');
        myButton.classList.add('odd');
    }

    myButton.innerText = noOfTimesClicked;
}

updateButton();