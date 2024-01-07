const path = require('path');


console.log(path.basename(__filename))
console.log(path.extname(__filename))
// console.log(path.join('Abc' , 'code/abc.html', '..','..'))
console.log(path.parse(__filename))

