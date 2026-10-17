
const firstName = 'milad'
const job = 'web developer'
const birthYear = 2008;
const year = 2037;


const milad = "'i'm " + firstName + ', a ' + (year - birthYear)
+ ' years old ' + job + '!';
console.log(milad)
  
const miladnew = 'im $(firstName), a ${year - birthYear} year old ${job}!';


const age = 15;

if (age >= 18) {
    console.log('sarah can start driving license');

} else{
    const yearsLeft = 18 - age;
    console.log('sarah is too young. wait another  {yearsLeft} years :)');
}