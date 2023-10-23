/*while-loop does not depend on the counter variable like for-loop. It continues executing until the condition is true */

let dice = Math.trunc(Math.random() * 6 + 1);
while (dice !== 6) {
  console.log(dice);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) console.log('We got 6!!');
}
