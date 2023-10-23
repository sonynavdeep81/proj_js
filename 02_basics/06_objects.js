const biodata = {
  fname: 'navdeep',
  lname: 'singh',
  age: 42,
  salary: 1002.45,
  funVal1: function () {
    //Anonymous function (also called function expression)
    //funVal1 is now a property of the object and not a variable
    return 10;
  },
  funVal2: (x) => x * 2, //arrow function with single parameter
  funVal3: function () {
    //arrow functions dont have this pointer
    console.log(this); //this always points to current object
    console.log(this.age);
  },
  funVal4: function () {
    this.new_variable = this.age + 5; //new variable created using this pointer
  },
};

console.log(biodata);
console.log(biodata['fname']);
console.log(biodata['age']);
console.log(biodata['funVal1']());
console.log(biodata['funVal2'](6));
biodata['funVal3']();
biodata['funVal4']();
console.log(biodata['new_variable']);
