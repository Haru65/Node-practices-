
const copy = require('fs');
//copy  = fs.readFileSync('./file.txt');
//console.log(data)

//copy.writeFileSync("./file.txt","chyewcndjo")
var hello = copy.readFileSync("./file.txt","utf-8")
console.log(hello)