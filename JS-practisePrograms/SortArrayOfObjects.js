/* Q 7 Write a JavaScript function to sort the following array of objects by title value?

Sample object :
var library = [
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];
Expected result :

[[object Object] {
author: "Suzanne Collins",
libraryID: 3245,
title: "Mockingjay: The Final Book of The Hunger Games"
}, [object Object] {
author: "Bill Gates",
libraryID: 1254,
title: "The Road Ahead"
}, [object Object] {
author: "Steve Jobs",
libraryID: 4264,
title: "Walter Isaacson"
}]
*/

var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
 
 function compare_to_sort(temp,temp1) 
  {
   if (temp.title < temp1.title)
     return -1;
   if (temp.title > temp1.title)
     return 1;
   return 0;
  }
 
 console.log(library.sort(compare_to_sort));


