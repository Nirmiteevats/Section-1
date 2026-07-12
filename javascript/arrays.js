const arr = ['hello', 27, false, null];//elements of array can be of any datatype
//arrays are dynamic in nature, we can add or remove elements from array, they support insertion and deletion

console.log(Array.isArray(arr));

const movies = ['tere naam', 'don', 'obsession', 'dhurandar', 'baazigar', 'chava'];

console.log(movies.length);

// indexing
console.log(movies[3]);
console.log(movies.indexOf('don'));
// console.log(movies[-3]);                                //undefined
console.log(movies.at(-2));                                //negative index                         

movies[2] = 'batman';
console.log(movies);

// movies=[] this will not work

// slicing
console.log(movies.slice(1,4));
console.log(movies.slice(-3,-1));
console.log(movies.slice(-3));
console.log(movies.slice(-3,50));                           //(used in page initiation like in amazon a few pages are shown first)



// adding and removing elements in array
movies.push('Jungle');      //adds elements at the end of array
console.log(movies);

movies.unshift('Flash');   //adds elements at the start of array
console.log(movies);

movies.pop();              //removes element at the end of array
console.log(movies);

movies.shift();             //removes element at the start of array
console.log(movies);



// removing elements
// movies.splice(2,2);   //splice(first index from where to remove, no. of elements to be removed)

// movies.splice(2,2,'superman','aquaman');   //replacing elements
// replacing elements with as many elements u want
// splice function- performs many funtions

movies.splice(2,0,'Superman')//insert
console.log(movies);


