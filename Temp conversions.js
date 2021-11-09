const kelvin = 400; //Today's temp in Kelvin
let celsius = kelvin - 273;//celsius 273 less than kelvin
let fahrenheit = celsius * (9/5) + 32;//fahrenheit conversion
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degress Fahrenheit.`);
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);