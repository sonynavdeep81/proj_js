const friends = ['ram', 'sham', 'lalit'];
console.log(friends);
console.log(friends[0], friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

// In JavaScript, when you declare an array using const, it means the variable friends is constant, which prevents you from reassigning it to a different array. However, it does not make the contents of the array themselves immutable. You can still modify the elements within the array.
friends[2] = 'honey';
console.log(friends);

// const friends = [1, 2, 3, 4]; not allowed

const arr = [1, 2, 'ram', 5.6, friends];
console.log(arr);
console.log(arr.length);

const ary = new Array(10, 20, 30); //another way of creating an array
console.log(ary);
