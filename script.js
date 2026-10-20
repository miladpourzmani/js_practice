
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

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markhigherBMI = BMIMark > BMIJohn;

console.log(BMIJohn, markhigherBMI);

if(BMIMark > BMIJohn) {
   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
 console.log(`Mark's BMI (${BMIJohn})  is higher than John's (${BMIMark})`);
}

// type conversion
 
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);


console.log(Number('jonas'));
console.log(typeof NaN)

console.log(String(23), 23);

// type coercion
console.log('i am ' + 23 + 'years old')
console.log('23' - '10' - 3 );
console.log('23' / '2');



let n = '1' + 1; // '11'
n = n - 1;
console.log(n);