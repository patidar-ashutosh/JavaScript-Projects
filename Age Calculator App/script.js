// get the user selected date
const userInput = document.querySelector("#date");
// Stop the select date option for future
userInput.max = new Date().toISOString().split("T")[0];

// get the element where we show our result
const outputElement = document.getElementById('result');

const dateObj = new Date();
const currentDate = dateObj.getDate();
const currentMonth = dateObj.getMonth() + 1; // because the month is started from 0
const currentYear = dateObj.getFullYear();

function calculateAge(){
    const dateInString = userInput.value;

    // convert string to array
    const arr = dateInString.split('-');

    const userSelectedYear = arr[0];
    const userSelectedMonth = arr[1]++; // because the month is started from 0
    const userSelectedDate = arr[2];

    // Logic to get the difference
    let totalDay, totalMonth, totalYear;
    totalYear = currentYear - userSelectedYear;

    if(currentMonth >= userSelectedMonth){
        totalMonth = currentMonth - userSelectedMonth;
    }
    else{
        totalYear--;
        totalMonth = currentMonth - userSelectedMonth + 12;
    }

    if(currentDate >= userSelectedDate){
        totalDay = currentDate - userSelectedDate;
    }
    else{
        totalMonth--;
        totalDay = getDaysInMonth(currentYear, currentMonth) + currentDate - userSelectedDate;
    }

    if(totalMonth < 0){
        totalMonth = 11;
        totalYear--;
    }

    // add the result in p element
    outputElement.innerHTML = `You are <span>${totalYear}</span> years, <span>${totalMonth}</span> months and <span>${totalDay}</span> days old`;
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}