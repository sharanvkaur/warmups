var stack = new Array()
stack.push('apple')
stack.push('banana')
stack.push('citrus')
console.log(stack)
var i = stack.pop()
console.log('stack - last in, first out: ' + i)
console.log('=================')

stack.push('draft')
stack.push('elephant')
console.log(stack)

function peek () {
  return stack[0]
}

console.log('stack - peeking at first element: ' + peek())

console.log('=================')

var queue = new Array()
queue.push('animals')
queue.push('bear')
queue.push('cat')
console.log(queue)

var j = queue.shift()
console.log('queue - first in, first out: ' + j)

var k = queue.unshift('wazoo')
console.log('queue - adds to start of array: ', queue)
