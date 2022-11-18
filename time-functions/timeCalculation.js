export default function timeCalculation() {
    const time = new Date();
    // dayName array assigns the day name to the numerical value that corresponds with .getDay() e.g. Sunday = 0 and Saturday = 6
    let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let weekDay = dayName[time.getDay()];
    
    // months array assigns the month name to the numerical value that corresponds with .getMonth() e.g. January = 0 and December = 11
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[time.getMonth()];

    // pulls date and year for calendar
    let day = time.getDate();
    let year = time.getFullYear();
    
    // pulls values for clock
    let hour = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();

    // calls functions to format values to look more natural when reading
    let days = dateFormat(day);
    let hours = hourFormat(hour);
    let minutes = checkTime(mins);
    let seconds = checkTime(secs);
    
    document.getElementById('date').textContent = `the time is ${hours}:${minutes}:${seconds} on ${weekDay}, the ${days} day of ${month}, ${year}.`
}

// converts hours into 12 hour format. adds a zero if under 12 to maintain HH:MM:SS format
const hourFormat = (x) => {
    if (x == 0) {
        x = 12
    }
    else if ( x > 12) {
        x = `0${x - 12}`
    } 
    else if (x < 10) {
        x = `0${x}`
    }
    else {
        x = x
    };
    return x;
}

// creates ordinal numbers .e.g. 1st, 2nd, 3rd, 4th, etc...
const dateFormat = (x) => {
    if (x == 1) {
        x = `${x}st`
    }
    else if (x == 2) {
        x = `${x}nd`
    }
    else if (x == 3) {
        x = `${x}rd`
    }
    else {
        x = `${x}th`
    }
    return x;
}

// adds 0 to minutes and seconds if less than 10 to maintain HH:MM:SS format
const checkTime = (i) => {
    if (i < 10) {
        i = `0${i}`
    };
    return i;
}
