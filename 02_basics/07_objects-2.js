/* Example using objects with this pointer */

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height); //new proprty is created
    return this.BMI;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

if (mark['calcBMI']() > john['calcBMI']()) {
  //can use mark.calcBMI() in place of mark['calcBMI']()
  console.log(
    `${mark['fullName']}'s BMI (${mark['calcBMI']()}) is higher than ${
      john['fullName']
    }'s (${john['calcBMI']()})!`
  );
}
