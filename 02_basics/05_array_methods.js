const a = ['monty', 'deepu', 'ram'];

const newLength = a.push('honey'); //insert at last
console.log(a, newLength);

const newLength2 = a.unshift('vicky'); //insert at beginning
console.log(a, newLength2);

const newLength3 = a.splice(2, 0, 'shaan'); //insert at index 2, delete nothing
console.log(a);
console.log(newLength3); //array of deleted elements

const newLength4 = a.splice(3, 2, 'parwan'); //insert at index 2, delete 2 elements starting from specified index
console.log(a);
console.log(newLength4);

const elementDeleted = a.pop(); //delete last element, return deleted element
console.log(a, elementDeleted);

const elementDeleted2 = a.shift(); //delete first element, return deleted element
console.log(a, elementDeleted2);

const elementsDeleted = a.splice(1, 1); //delete 1 element beginning at index 1
console.log(a, elementsDeleted);

const elementsDeleted2 = a.splice(0, 2); //delete 2 elements from index 0
console.log(a, elementsDeleted2);
