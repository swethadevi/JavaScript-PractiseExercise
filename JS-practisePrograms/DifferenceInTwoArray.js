// Q 6 Write a JavaScript function to find the difference of two arrays?


function arr_diff (array1, array2) {

    var  temp = [], diff = [];

    for (var i = 0; i < array1.length; i++) {
        temp[array1[i]] = true;
    }

    for (var i = 0; i < array2.length; i++) {
        if (temp[array2[i]]) {
            delete temp[array2[i]];
        } else {
            temp[array2[i]] = true;
        }
    }

    for (var k in temp) {
        diff.push(k);
    }

    return diff;
}

console.log(arr_diff(['a', 'b'], ['a', 'b', 'c', 'd']));
console.log(arr_diff("java", "javac"));
console.log(arr_diff("swetha", "swetha"));