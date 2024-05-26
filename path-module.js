//path module

const path=require('path')

console.log(path.sep);

const sub=path.join('\folder','subfolder','text.txt')

console.log(sub);

const total=path.resolve(__dirname,'folder','subfolder','text.txt')

console.log(total);

const base=path.basename(sub)

console.log(base);