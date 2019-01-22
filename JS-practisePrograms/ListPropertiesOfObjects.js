//Q 9 Write a JavaScript program to list the properties of a JavaScript object?
/*
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

Sample Output : name, sclass, rollno
*/

console.clear();

  var student = {
    name: "Swetha Devi D",
    sclass: "12 Class",
    rollno: 54
  };

  let result = "";

  for (let key in student)
    result += `${key},`;

  console.log(result.substring(0, result.length - 1)); // name,sclass,rollno

