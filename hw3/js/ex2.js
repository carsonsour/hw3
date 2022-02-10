/* Tutorial 4
   Example 2 JavaScript code
*/
const dayEntered = prompt("What is the day?(Enter day in three letter abbreviation)")
switch (dayEntered) {
   case 'sun':
      console.log(`You entered: ${dayEntered}`);
      console.log('The following day is:mon')
      break;
   case 'mon':
      console.log(`You entered: ${dayEntered}`);
      console.log('The following day is:Monday')
      break;
   case 'tues':
      console.log(`You entered: ${dayEntered}`);
      console.log('The following day is:wed')
      break;
   case 'wed':
      console.log(`You entered: ${dayEntered}`);
      console.log('The following day is:thurs')
      break;
   case 'thurs':
      console.log(`You entered: ${dayEntered}`);
      console.log('The following day is:fri')
   case 'fri':
      console.log(`You entered: ${dayEntered}`);
      console.log('The following day is:sat')
   case 'sat':
      console.log(`You entered: ${dayEntered}`);
      console.log('The following day is:sun')
      default:
      console.log("Not a valid day type");

}
console.log("Carson's Output from Tutorial 4 Example 2");
