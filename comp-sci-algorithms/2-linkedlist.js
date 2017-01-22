function Node (data) {
  this.data = data
  this.next = null
}

function linkedList () {
  this.head = null
}

linkedList.prototype.add = function (val) {
  var node = new Node(val)
  currentNode = this.head

  if (!currentNode) {
    this.head = node
    return node
  }
  while (currentNode.next) {
    currentNode = currentNode.next
  }
  currentNode.next = node
  // return node
}

var newList = new linkedList()

newList.add('hello')
newList.add('from')
console.log(currentNode)
newList.add('the')
console.log(currentNode)
newList.add('other')
console.log(currentNode)
newList.add('side')
console.log(currentNode)
console.log(currentNode.next)
