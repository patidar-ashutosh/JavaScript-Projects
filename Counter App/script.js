// fetch the counter id Element
const countValue = document.getElementById('counter');
// another way to fetch Element
// const countValue = document.querySelector('#counter');

function increment(){
    // get the value from UI
    let value = parseInt(countValue.innerText);
    // another way to get value
    // let value = parseInt(countValue.textContent);

    // Update the value
    value = value + 1;

    // set the value onto UI
    countValue.innerText = value;
};

function decrement(){
    // get the value from UI
    let value = parseInt(countValue.innerText);

    // Update the value
    value = value - 1;
    
    // set the value onto UI
    countValue.innerText = value;
};