// Q 4 Write a JavaScript program to sort strings items of an array in both alphabetically ascending and descending order?


  //to sort the array in ascending order
  console.log("------Ascending and Descending array sort using functions--------");
  arrayOne=["Java","SpringBoot","Maven","Bootstrap","Docker"]
  var result=myArray(arrayOne);
  function myArray(arrayOne){
      return arrayOne.sort();

  }
  console.log(result);
  //for sorting the array in descending order
   var arrayDesc=["Java","SpringBoot","Maven","Bootstrap","Docker"]
  arrayDesc.sort();
  arrayDesc.reverse();
  console.log(arrayDesc);

