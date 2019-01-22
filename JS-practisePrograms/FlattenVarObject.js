// Q 13 Flatten the following object:var myObj = [5, [22], [[14]], [[4]],[5,6]]
//Note: the output should be in the form:[ 5, 22, 14, 4, 5, 6 ]function flatten(arr) {
//      var result = [];

//----using toString approach------
// var data = [5, [22], [[14]], [[4]],[5,6]];
// var result = data.toString();
// console.log(result.split(","));
//[ 5, 22, 14, 4, 5, 6 ]


//-------using Array.prototype.flat approach----
let functional = {
    flatten (array) {
        if (Array.isArray(array)) {
            return Array.prototype.concat(...array.map(this.flatten, this));
        }

        return array;
    }
};

var result = functional.flatten([5, [22], [[14]], [[4]],[5,6]]); //
console.log(result);