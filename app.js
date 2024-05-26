//npm

const _=require('lodash')

const item=[1,[2,[3,[4]]]]

const nweItem=_.flattenDeep(item)

console.log(nweItem);