require('./Object/index.js')


let f = { a: { b: 1 } }
console.log(f.safeD('a'))
console.log(f.safeD('a["b"]'))

console.log(f.safeD('a.b'))
console.log(f.safeD('a.b.c'))
console.log(f.safeD('a.b.c[0]'))
console.log(f.safeD('a["b"]["c"][0]'))
