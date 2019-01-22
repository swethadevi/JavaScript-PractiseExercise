//Q 14. Consider the following object:
/*
var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

Exercise 1: Display all objects with occupation as 'Programmer'
Exercise 2: Sort the object basis the age key in the descending order
Exercise 3: Recreate the above array of objects into the following object of objects :{ 'Team Leader' : [{'name':_____________, 'age':__________},{}],
'<anotheroccupation>': [{'name':______________, 'age':________},{}]}

Exercise 4: Use the map function to create a new array containing only names present in myObj.
Expected output:
[ 'Saurabh'
 'Anupriya',
 'Kalyani',
 'Damodaran',
 'Krishnakath',
 'Venketraman' ]
*/
var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

console.log(myObj.length);
console.log("Object with occupation as Programmer is: ");
for(i=0;i<myObj.length;i++)
{
  if(myObj[i].occupation=="Programmer")
  console.log(myObj[i]);
}

//for Exercise 2: Sort the object basis the age key in the descending order
console.log('');
console.log("Sort the object basis the age key in the descending order is:");
var a = myObj.filter(obj => obj.occupation === "Programmer");
var b = myObj.sort((a, b) => Number(b.age) - Number(a.age));
console.log(b);
console.log(" ");


//Exercise 3: for Recreate the above array of objects into the following object of objects :{ 'Team Leader' : [{'name':_____________, 'age':__________},{}],
//'<anotheroccupation>': [{'name':______________, 'age':________},{}]}
var c = myObj.map(myObj => myObj.name);
console.log(c);

//Exercise 4: Use the map function to create a new array containing only names present in myObj.
var result = {};
 
result['Team Leader'] = myObj.filter(obj=>obj.occupation==="Team Leader");
result['Team Leader'] = result['Team Leader'].map(x=> ({name: x.name, age: x.age}));

result['Programmer'] = myObj.filter(obj=>obj.occupation==="Programmer");
result['Programmer'] = result['Programmer'].map(x=> ({name: x.name, age: x.age}));
console.log('');
console.log("New array containing name and age only:")
console.log(result);

