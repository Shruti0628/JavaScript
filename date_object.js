// const currentDate = new Date();
// // const dateString = "2024-02-19T10:44:09.274Z"; Will return you old date
// console.log(dateString);

const data = new Date(2025,12); //will show the specified month
console.log(data);


const new_data = new Date(2025,2,6); //In JS, Jan starts with 0th so it's total months are 0-11
console.log(new_data)

// How to get current date and time using "millisecond only"
const  currMilliSeconds = new Date().getTime();
const dateFromMilliseconds = new Date(currMilliSeconds);
console.log(dateFromMilliseconds);

// Date String Format: If the dateString is in a recognizable format, the Date Object will be created accordingly.
const date1 = new Date("2024-01-05");
console.log(date1)

// Date Get Methods : To get specific components like year,day,date,month

const currentDate1 = new Date();
const year = currentDate1.getFullYear();
console.log(year);
const month = currentDate1.getMonth();
console.log(month);
const date2 = currentDate1.getDate();
console.log(date2);
const day = currentDate1.getDay();
console.log(day);

// Date Set Methods: To set specific components like year,date,day,month.

const date3 = new Date();
date3.setFullYear(2026);
console.log(date3);

date3.setMonth(5);
console.log(date3);

date3.setDate(15);
console.log(date3);

// Time Get Methods: To get specific components of time like hrs, mins, sec, time overall

const currentTime = new Date();
const hrs = currentTime.getHours();
console.log(hrs);

// Do the same for getMinutes(), getSeconds(), getTime().

// Some Useful Methods: Also, locale basically means location/region's cultural settings.

/* 1. toLocaleString(): It returns a string representing date and time portion of a Date object using current locale convention.*/

const date4 = new Date();
const localString = date4.toLocaleString();
const localString1 = date4.toLocaleString('en-NP');
console.log(localString);
console.log(localString1);

/* 2. toLocaleDateString(): It returns a string representing the date portion of a Date object using current locale's conventions.*/

const date5 = new Date();
const localeDateString = date5.toLocaleDateString();
console.log(localeDateString);

/* 3. toLocaleTimeString(): It returns a string representing the time portion of a Date object using current locale's conventions. And its static*/

const time = new Date();
const res_Time = time.toLocaleTimeString();
console.log(res_Time);

/* 4. parse(): It parses a string representation of a date and returns the number of milliseconds since Jan 1, 1970, 00:00:00 UTC.*/

const parsed = "2024-02-19T16:30:00Z";
const parsedDate = Date.parse(parsed);
console.log(parsedDate)

/* 5. now(): to represent current date, time, milliseconds, seconds, hours, etc. Also it's also static */


// WAP to add a specified numbers of days to a given date
const addDaysToDate = (date, extraDays) => {
    // console.log(date);
    // console.log(date.setDate(date.getDate() + extraDays)); //Helps to get the new date afer adding extra days in milliseconds.
    // console.log(new Date(1711756800000));
    // return date;

    let updatedDate = date.setDate(date.getDate() + extraDays);
    updatedDate = new Date(updatedDate);
    return updatedDate;
}
const date = new Date("2024-03-25");
const newDate = addDaysToDate(date, 5);
console.log(newDate);

// WAP to calculate the difference in days between two given dates
const dateDifference = (date1, date2) => {
    let oneDay = 24 * 60 * 60 * 1000; // Converting days to milliseconds i.e. 864000000 milliseconds. 
    const difference = Math.abs(date2 - date1);
    return Math.round(difference / oneDay);
};

const d1 = new Date();
const d2 = new Date("2025-03-06");
console.log(dateDifference(d1, d2));
