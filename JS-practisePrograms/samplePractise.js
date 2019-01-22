
//simple addition for printing
var num =10;
var num1=20;
var num2=num+num1;
console.log(num2);

//for conditional looping
var n=10;
var n1=20;
var n2=30;
if(n>n1 && n>n2){
    console.log("n is bigger",n);
}
else if(n1>n2 && n1>n2){
    console.log("n1 is bigger",n1)
}
else{
    console.log("n2 is bigger",n2)
}


//using array and find the largest number among five numbers
console.log("using array and find the largest number among five numbers")
largestArray=[10,15,20,25,30];
if(largestArray[0] > largestArray[1] && largestArray[0] > largestArray[2] && largestArray[0] > largestArray[2] && largestArray[0] > largestArray[3] && largestArray[0] > largestArray[4]){
    console.log("The largest number is", largestArray[0]);
}
else if(largestArray[1] > largestArray[0] && largestArray[1] > largestArray[2] && largestArray[1] > largestArray[2] && largestArray[1] > largestArray[3] && largestArray[1] > largestArray[4]){
    console.log("The largest number is" , largestArray[1]);
}
else if(largestArray[2] > largestArray[1] && largestArray[2] > largestArray[3] && largestArray[2] > largestArray[0] && largestArray[2] > largestArray[3] && largestArray[1] > largestArray[4]){
    console.log("The largest number is" , largestArray[2]);
}
else if(largestArray[3] > largestArray[0] && largestArray[3] > largestArray[1] && largestArray[3] > largestArray[2] && largestArray[3] > largestArray[4] && largestArray[3] > largestArray[1]){
    console.log("The largest number is" , largestArray[3]);
}
else{
    console.log("The largest number among the 5 numbers is  ",largestArray[4])

}

//sample for object
var length = 16;                               // Number
var lastName = "devi";                      // String
var x = {firstName:"swethaa", lastName:"D"};
console.log(x);   // Object


//for accessing the array objects using null
var person = {firstName:"swetha", lastName:"Devi", age:22, Degree:"B.Tech(cse)"};
console.log(person);
person = null; 
console.log(person);

//for accessing the array objects using null
var person = {firstName:"swetha", lastName:"Devi", age:22, Degree:"B.Tech(cse)"};
console.log(person);
person = undefined; 
console.log(person);


//to check for typeOf in JS
console.log("---------to check for the type of the array or objects--------");
typeof{firstName:"swetha", lastName:"Devi", age:22, Degree:"B.Tech(cse)"};


//to check for the  function access
var x = myFunction(4, 4); 
function myFunction(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
  }
console.log(x);

  //to check for array sort
  console.log("------array sort using functions--------");
  arrayOne=["Java","SpringBoot","Maven","Bootstrap","Docker"]
  var result=myArray(arrayOne);
  function myArray(arrayOne){
      return arrayOne.sort();
  }
  console.log(result);


//Object methods accessing. Objects can also have methods.
// Methods are actions that can be performed on objects.
//Methods are stored in properties as function definitions.
console.log("-----Object methods  an accessing -------")
var person = {
    firstName: "SWETHA",
    lastName : "DEVI",
    id       : 39260,
    fullName : function() {
      return this.firstName + " " + this.lastName;
      /* this Keyword
        In a function definition, this refers to the "owner" of the function.
        In the example above, this is the person object that "owns" the fullName function.
        In other words, this.firstName means the firstName property of this object.
      */
    }

  }
  name = person.fullName();
  console.log(name);

  //TO Remove the white spaces using trim()
  var str = "       Hello World!        ";
  console.log(str.trim());

  //String  built in methods
  