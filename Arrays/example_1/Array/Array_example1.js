//Create an Array
var fruits = ['Apple','Bananna'];
console.log(fruits.length);
//o/p : 2


//Access (index into) an Array item
var first = fruits[0];
console.log(first);
//o/p : Apple

var last = fruits[fruits.length-1];
console.log(last);
//o/p : Bananna


//Loop over an Array
fruits.forEach(function (item,index,array) {
    console.log(item,index);
});
//o/p : apple 0
//    : Bananna 1


//Add to the end of an Array
var newlength = fruits.push("orange");
console.log(fruits);
//o/p :[ 'Apple', 'Bananna', 'orange' ]


//Remove from the end of an Array
var last = fruits.pop();  // remove Orange (from the end)
console.log(fruits);
//o/p : [ 'Apple', 'Bananna' ]


//Remove from the front of an Array
var first = fruits.shift(); //// remove Apple from the fron
console.log(fruits);
//o/p : [ 'Bananna' ]

//Add to the front of an Array
var first = fruits.unshift('Strawberry');
console.log(fruits);
//o/p : [ 'Strawberry', 'Bananna' ]

//Find the index of an item in the Array
fruits.push('Mango');
console.log(fruits);
//o/p : [ 'Strawberry', 'Bananna', 'Mango' ]

var pos = fruits.indexOf('Bananna');
console.log(pos);
//o/p : 1

//Remove an item by index position
var removeItem = fruits.splice(pos,1); // this is how to remove an item
console.log(fruits);
//o/p : [ 'Strawberry', 'Mango' ]

//Remove items from an index position
var vegetables = ['cabbage','Turnip','Raddish','Carrot'];
console.log(vegetables);
//o/p : [ 'cabbage', 'Turnip', 'Raddish', 'Carrot' ]

var pos=1; n=2;
var removedItems = vegetables.splice(pos,n);
// this is how to remove items, n defines the number of items to be removed,
// from that position(pos) onward to the end of array.
console.log(vegetables);
//o/p : [ 'cabbage', 'Carrot' ] (the original array is changed)
console.log(removedItems);
//o/p : [ 'Turnip', 'Raddish' ]


//Copy an Array
var shallowcopy = fruits.slice();
console.log(shallowcopy);
//o/p : [ 'Strawberry', 'Mango' ]

