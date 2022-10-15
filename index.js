const stopwatch = document.getElementById('stopwatch');
const watchTime = document.querySelector('[watchTime]');
const timeCellElements = document.querySelectorAll('[time-cell]');
const dateCellElements = document.querySelectorAll('[date-cell]');
console.log(stopwatch);
console.log(watchTime);


function showDate(){
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();


    dateCellElements[0].innerText = year;
    dateCellElements[1].innerText = '/';
    dateCellElements[2].innerText = month;
    dateCellElements[3].innerText = '/';
    dateCellElements[4].innerText = day;

    
    console.log(getFact(month, day).resolve)
    document.getElementById('factcontainer').innerHTML = getFact(month, day);

}

async function getFact(month, day){
    fetch('http://numbersapi.com/' + month + '/' + day + '/' + 'date')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.text();
    })
    .then(text => {
        document.getElementById("factcontainer").innerHTML = text;
    })
    .catch(error => {
        // Handle/report error
    });
}

function showTime(){
    
    
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let milliseconds = date.getMilliseconds();
    let ampm = 'AM';

    if (hours<0){
        hours = 12;
    }
    else if (hours> 12){
        hours = hours-12;
        ampm = 'PM';
    }
    if (hours<10){
        hours = '0'+hours;
    }
    if (minutes<10){
        minutes = '0'+minutes;
    }
    if (seconds<10){
        seconds = '0'+seconds;
    }
    if (milliseconds<10){
        milliseconds = '0'+milliseconds;
    }
    if(milliseconds<100){
        milliseconds = '0'+milliseconds;
    }
    timeCellElements[0].innerText = hours;
    timeCellElements[1].innerText = ':';
    timeCellElements[2].innerText = minutes;
    timeCellElements[3].innerText = ':';
    timeCellElements[4].innerText = seconds;
    timeCellElements[5].innerText = '.';
    timeCellElements[6].innerText = milliseconds;
    timeCellElements[7].innerText = '  ';
    timeCellElements[8].innerText = ampm;

    setTimeout(() => {
        showTime();
    }, 10);
}
showDate();
showTime();