'use strict'; //use strict mode. Must always be at TOP
/*It helps to write secure code i.e  it helps to write code that is bug free. It prevents silent errors. Always USE THIS MODE */

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; //mistakenly written wrong, strict mode catches it and displays error. If strict mode not 'ON' it will be a silent error
if (hasDriversLicense) console.log('I can Drive:D');
