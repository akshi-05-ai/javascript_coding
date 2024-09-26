const name = "akshita"
const repoCount = 50

console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} amd my repo count is ${repoCount}`);

const gameName = new String('akshic')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));

const anotherString = gameName.slice(-6, 3)
console.log(anotherString);

const newStringOne = "      akshi         "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://akshi.com/akshi#67chauhan"

console.log(url.replace('#67', '-'));

console.log(url.includes('akshi'));

console.log(gameName.split('-')); 
