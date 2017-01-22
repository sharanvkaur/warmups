var primeSet = new Set()
primeSet.add(2)
primeSet.add(3)
primeSet.add(5)
primeSet.add(7)
primeSet.add(11)
console.log('primeSet: ', primeSet)

var listArr = [...primeSet]
console.log('array of numbers in primeSet: ', listArr)

var doesit = primeSet.has(8)
console.log('does it contain 8? ', doesit)

primeSet.delete(5)
console.log('deleting 5 from the set: ', primeSet)

var evenSet = new Set()
evenSet.add(2)
evenSet.add(4)
evenSet.add(6)
evenSet.add(8)
evenSet.add(10)
console.log('evenSet: ', evenSet)

var intersect = ([...primeSet].filter(i => evenSet.has(i)))
console.log('intersection of both sets? ', intersect)

var union = new Set([...primeSet, ...evenSet])

console.log('union of both sets? ', union)
