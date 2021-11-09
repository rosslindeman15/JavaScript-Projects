const myAge = 22;//my current age in years
let earlyYears = 2;//first 2 years of dog years count as 10.5 years
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4;
let myAgeInDogYears = earlyYears + laterYears;//my age in dog years
myName = "Ross".toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);