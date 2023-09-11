// get the current date
const currentDate = new Date();

//get the day of the week as a number 
const dayOfWeek = currentDate.getUTCDay();

//an array of day names
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//get the name of the day of the week
const currentDayOfWeek = daysOfWeek[dayOfWeek];

//get the current UTC time in milliseconds
const currentUTCTime = currentDate.getTime();

//Display the day of the week and UTC time on the page 
const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const UTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

dayOfWeekElement.textContent = currentDayOfWeek;
UTCTimeElement.textContent = currentUTCTime.toString();
