//Q 11 Write a JavaScript function that returns a passed string    with letters in alphabetical order?
//Example string : 'webmaster'
//Expected Output : 'abeemrstw'

var str =  "webmaster";
function alphabet_order(str)
  {
    return str.split('').sort().join('');
  }

console.log("The result of string after Alphabetical sort is:");  
console.log(alphabet_order("webmaster"));
