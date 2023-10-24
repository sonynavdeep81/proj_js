let age = '18';

if (age === 18) console.log('Strict operator'); //Does not perform type coercion
if (age == 18) console.log('Loose operator'); //Performs type coercion ('18' gets converted to 18)
//Never use loose operator

if (18 != '18') console.log('Loose inequality');
if (18 !== '18') console.log('Strict inequality');
