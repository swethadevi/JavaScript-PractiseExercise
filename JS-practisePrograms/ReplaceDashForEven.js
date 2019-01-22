//Q 3 Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8?

const num= 2025468;
const str = num.toString();
const result = [str[0]];
  
for(let temp=1; temp<str.length; temp++)
  {
    if((str[temp-1]%2 === 0)&&(str[temp]%2 === 0))
     {
      result.push('-', str[temp]);
     }
    else
     {
      result.push(str[temp]);
     }
  }
console.log(result.join(''));
console.log("The result after replaceing with dash after even num is:\n",result);