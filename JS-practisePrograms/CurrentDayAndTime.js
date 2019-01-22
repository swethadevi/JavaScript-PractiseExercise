//Q 1 Write a JavaScript program to display the current day and time in the following format mm/dd/yyyy?

//to display current day
var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1; 
var year = today.getFullYear();
today = day+'/'+month+'/'+year;
console.log("Today's Date is: ",today);

//to display current day
var today = new Date();
 var day = today.getDay();
 var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
 console.log("Current Day is : " + daylist[day] + ".");
 var hour = today.getHours();
 var minute = today.getMinutes();
 var second = today.getSeconds();
 var prepand = (hour >= 12)? " PM ":" AM ";
 hour = (hour >= 12)? hour - 12: hour;
 if (hour===0 && prepand===' PM ')
 {
 if (minute===0 && second===0)
 {
 hour=12;
 prepand=' Noon';
 }
 else
 {
 hour=12;
 prepand=' PM';
 }
 }
 if (hour===0 && prepand===' AM ')
 {
 if (minute===0 && second===0)
 {
 hour=12;
 prepand=' Midnight';
 }
 else
 {Veni
 hour=12;
 prepand=' AM';
 }
 }
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);