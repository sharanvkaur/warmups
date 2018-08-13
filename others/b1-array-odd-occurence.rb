function findWeird () {
  var A = [1, 2, 3, 9, 3, 2, 1]
  var B = []
  for (var i = 0; i < A.length; i++) {
    console.log('array B is', B)
    var index = B.indexOf(A[i])
    console.log('element', i, 'of array A is index', index, 'in array B')

    if (index > -1) {
      B.splice(index, 1)
    } else {
      B.push(A[i])
    }
  }
  return B[0]
}

console.log(findWeird())

// done
