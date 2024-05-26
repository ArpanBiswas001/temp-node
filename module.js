//module-encapsulated code
//every file is a module
//when we import a module ,we invoke it
const names=require('./names');
const sayHi=require('./funcmodule');
sayHi(names.john)
sayHi(names.peter)

require('./plus')