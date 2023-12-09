// ++++++++++++++++++      String       +++++++++++++++++++++++

const name = "Jagdish";
const repoCount = 50;

//console.log(name + repoCount + " value"); // outdated

//console.log(`${name} ${repoCount} value`); // present 

// Delare String new way

const gameName = new String('I+Love+to+play+Basketball');

// console.log(gameName);
// console.log(`${gameName.toUpperCase()}`);

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 9);
console.log(newString);

const anotherString = gameName.slice(-10, 10);
console.log(anotherString);

const newStringOne = "   Jagdish   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https;//jagdish.com/jagdish%20mahanta";

console.log(url.replace('%20', '-'));

console.log(url.includes('jagdish'));
console.log(url.includes('niket'));


console.log(gameName.split('+'));

