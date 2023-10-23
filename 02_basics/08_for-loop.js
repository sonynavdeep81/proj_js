/*for-loop, continue and break statements */
const arr = [1, 2, 'ram', 5.6, 'friends', true, false];
const arr_types = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'string') continue;
  else if (i === 5) {
    console.log('Bye');
    break;
  } else {
    arr_types[i] = typeof arr[i];
  }
}
console.log(arr_types);
console.log(arr_types[0]); //number
console.log(arr_types[2]); //undefined
