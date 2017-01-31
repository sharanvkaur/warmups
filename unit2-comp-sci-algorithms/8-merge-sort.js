function merge (left, right) {
  var result = [],
    ileft = 0,
    iright = 0
  while (ileft < left.length && iright < right.length) {
    if (left[ileft] < right[iright]) {
      result.push(left[ileft++])
    } else {
      result.push(right[iright++])
    }
  }
  return result.concat(left.slice(ileft)).concat(right.slice(iright))
}
// console.log(merge([4, 3, 2, 1], [9, 8, 7, 6])) // test merge


function mergeSort (items) {
  if (items.length < 2) {
    return items
  }
  var middle = Math.floor(items.length / 2)
  var left = items.slice(0, middle)
  var right = items.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

var testArray = [ 2, 54, 16, 28, 1, 3, 15, 38, 9 ]
console.log(testArray)
console.log(mergeSort(testArray))
