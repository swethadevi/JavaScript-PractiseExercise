//Q 12 Write a JavaScript function that accepts two arguments,    a string and a letter and the function will    count the number of occurrences of the specified letter within the    string.
//Sample arguments : 'gmail.com', 'm'
//Expected output : 2


function char_count(str, letter)
{
var letter_Count = 0;
for (var position = 0; position < str.length; position++)
{
   if (str.charAt(position) == letter)
     {
     letter_Count += 1;
     }
 }
 return letter_Count;
}

console.log("The occurence of 'o' is :",char_count('Facebook.com', 'o'));
