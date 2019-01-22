//Q 2 Write a JavaScript conditional statement to find the largest of five numbers?

//using array to find the largest number among five numbers
console.log("using array to find the largest number among five numbers")
largestArray=[10,150,20,25,30];
if(largestArray[0] > largestArray[1] && largestArray[0] > largestArray[2] && largestArray[0] > largestArray[2] && largestArray[0] > largestArray[3] && largestArray[0] > largestArray[4]){
    console.log("The largest number is :", largestArray[0]);
}
else if(largestArray[1] > largestArray[0] && largestArray[1] > largestArray[2] && largestArray[1] > largestArray[2] && largestArray[1] > largestArray[3] && largestArray[1] > largestArray[4]){
    console.log("The largest number is :" , largestArray[1]);
}
else if(largestArray[2] > largestArray[1] && largestArray[2] > largestArray[3] && largestArray[2] > largestArray[0] && largestArray[2] > largestArray[3] && largestArray[1] > largestArray[4]){
    console.log("The largest number is :" , largestArray[2]);
}
else if(largestArray[3] > largestArray[0] && largestArray[3] > largestArray[1] && largestArray[3] > largestArray[2] && largestArray[3] > largestArray[4] && largestArray[3] > largestArray[1]){
    console.log("The largest number is :" , largestArray[3]);
}
else{
    console.log("The largest number among the 5 numbers is :  ",largestArray[4])

}