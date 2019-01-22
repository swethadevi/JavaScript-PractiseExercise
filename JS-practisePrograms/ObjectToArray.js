//Q 16 Consider this object:
/*
var obj = {
    "One":"1",
    "Two":"2",
    "Three":"3",
    "Four":"4"
    }
    Convert it into JavaScript array like:
    ["1","2","3","4"]
*/

var obj = {"One":"1","Two":"2","Three":"3","Four":"4"};
var arr = Array.from(Object.keys(obj), key=>obj[key]);
console.log(arr);