function Node (val) {
  this.value = val
  this.left = null
  this.right = null
  console.log(val);
}

function BinarySearchTree () {
  this.root = null
}

BinarySearchTree.prototype.push = function (val) {
  var root = this.root
  if (!root) {
    this.root = new Node(val)
    return
  }

  var currentNode = root
  var newNode = new Node(val)

  while (currentNode) {
    if (val < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode
        break
      } else {
        currentNode = currentNode.left
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode
        break
      } else {
        currentNode = currentNode.right
      }
    }
  }
}


var goTime = new BinarySearchTree()
goTime.push(20)
goTime.push(10)
goTime.push(30)
goTime.push(15)
goTime.push(25)
goTime.push(35)
goTime.push(8)
goTime.push(6)
goTime.push(9)



console.log(JSON.stringify(goTime.root));
