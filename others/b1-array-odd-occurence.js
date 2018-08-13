function findWeird (A) {
  var B = []
  for (var i = 0; i < A.length; i++) {
    var index = B.indexOf(A[i])

    if (index > -1) {
      B.splice(index, 1)
    } else {
      B.push(A[i])
    }
  }
  return B[0]
}

console.log(findWeird([1, 2, 3, 9, 3, 2, 1]))

// done
// https://codility.com/demo/results/trainingXQRNUW-U83/
// 77%
